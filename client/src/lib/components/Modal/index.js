import React, { Component } from 'react';
import { Button, Modal, Segment, Image } from 'semantic-ui-react';
import LightboxPhoto from '../LightboxPhoto';
import Lightbox from 'react-image-lightbox';

import './index.scss';

export default class StandardModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      showModal: false,
      lightboxIsOpen: {description: false},
      updated: false
    };
    this.showModalHandler = this.showModalHandler.bind(this);
    this.lightboxHandler = this.lightboxHandler.bind(this);
    this.onMovePrevRequest = this.onMovePrevRequest.bind(this);
    this.onMoveNextRequest = this.onMoveNextRequest.bind(this);
  }

  componentDidUpdate() {
    // have a state variable called 'updated' so that this doesn't run for every updated property
    if (!this.state.updated) {
      let challengeContents = document.getElementsByClassName('challenge-contents');
      // Resize the height of each 'Challenge' section when the window resizes
      window.addEventListener('resize', e => {
        Array.from(challengeContents).forEach(challenge => {
          challenge.style['max-height'] = challenge.querySelector('h3').offsetHeight + 29 + 'px';
        });
      });
      // Expand on click
      if (challengeContents && challengeContents.length > 0) {
        Array.from(challengeContents).forEach(challenge => {
          challenge.style['max-height'] = challenge.querySelector('h3').offsetHeight + 29 + 'px';
          challenge.addEventListener('click', e => {
            if (e.target.tagName !== 'IMG') {
              challenge.classList.toggle('expand');
            }
          });
        });
      }
      this.setState({updated: true});
    }
  }

  showModalHandler(bool) {
    this.setState({showModal: bool, lightboxIsOpen: false, updated: false});
  }

  lightboxHandler(bool, name, index) {
    this.setState({photoIndex: index}, () => {
      this.setState({lightboxIsOpen:
        {
          [name]: bool
        }
      });
    });
  }

  onMovePrevRequest(pictures, photoIndex) {
    this.setState({
      photoIndex: (photoIndex + pictures.length - 1) % pictures.length,
    });
  }

  onMoveNextRequest(pictures, photoIndex) {
    this.setState({
      photoIndex: (photoIndex + 1) % pictures.length,
    })
  }

  render() {
    const { photoIndex, showModal, lightboxIsOpen } = this.state;
    const { name, descriptions, headerPhotos, challenges } = this.props;
    const { showModalHandler, lightboxHandler, onMovePrevRequest, onMoveNextRequest } = this;
    return (
      <Modal
        trigger={ <Button onClick={e => showModalHandler(true)}>More Info</Button> }
        className='standard-modal'
        open={showModal}
        size='large'
        closeIcon
        onClose={e => showModalHandler(false)}
      >
        <h1>{name}</h1>
        <div className='modal-description'>
          {
            descriptions.map((description, index) => (
              <p key={index}>{description}</p>
            ))
          }
          <LightboxPhoto
            name='description'
            pictures={headerPhotos}
            lightboxHandler={lightboxHandler}
            onMovePrevRequest={onMovePrevRequest}
            onMoveNextRequest={onMoveNextRequest}
            lightboxIsOpen={lightboxIsOpen}
            photoIndex={photoIndex}
          />
        </div>
        <div className='modal-content'>
          <h2>CHALLENGES</h2>
          {
            challenges.map((challenge, index) => (
              <Segment key={index} className='challenge-contents'>
                <h3>{challenge.header}</h3>
                {
                  challenge.body.map((content, index) => (
                    <div key={index} className='content-container'>
                      {
                        content.pictureType === 'multi' ? (
                          <div>
                            <p>{content.text}</p>
                            <div className='picture-row'>
                              <LightboxPhoto
                                pictures={content.pictures}
                                lightboxHandler={lightboxHandler}
                                onMovePrevRequest={onMovePrevRequest}
                                onMoveNextRequest={onMoveNextRequest}
                                lightboxIsOpen={lightboxIsOpen}
                                photoIndex={photoIndex}
                              />
                            </div>
                          </div>
                        ) : (
                          <div className='one-image-div'>
                            {
                              content.picture && 
                              <div>
                                <button
                                  style={
                                    {
                                      float: content.pictureType
                                    }
                                  }
                                  type="button"
                                  onClick={e => {e.stopPropagation(); lightboxHandler(true, content.picture, 0);}}
                                >
                                  <Image floated={ content.pictureType } src={content.picture} size='small' />
                                </button>
                                { lightboxIsOpen[content.picture] &&
                                  <Lightbox
                                    mainSrc={content.picture}
                                    onCloseRequest={e => lightboxHandler(false, content.picture, 0)}
                                  />
                                }
                              </div>
                            }
                            <p>{content.text}</p>
                          </div>
                        )
                      }
                    </div>
                  ))
                }
              </Segment>
            ))
          }
        </div>
      </Modal>
    )
  }
}
