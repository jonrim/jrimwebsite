import React, { Component } from 'react';
import { Button, Modal, Segment, Image } from 'semantic-ui-react';
import LightboxPhoto from '../LightboxPhoto';
import Lightbox from 'react-image-lightbox';
import YouTube from 'react-youtube';

import './index.scss';

export default class StandardModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      showModal: false,
      lightboxIsOpen: {},
      closeOnEscape: true,
      updated: false
    };
    this.showModalHandler = this.showModalHandler.bind(this);
    this.lightboxHandler = this.lightboxHandler.bind(this);
    this.onMovePrevRequest = this.onMovePrevRequest.bind(this);
    this.onMoveNextRequest = this.onMoveNextRequest.bind(this);
  }

  changeSubsectionHeights(section) {
    Array.from(section).forEach(subsection => {
      if (!subsection.classList.contains('expand')) {
        subsection.style['max-height'] = subsection.querySelector('h5').offsetHeight + 29 + 'px';
      }
    });
  }

  componentDidUpdate() {
    // have a state variable called 'updated' so that this doesn't run for every updated property
    if (!this.state.updated) {
      let introductionContents = document.getElementsByClassName('introduction-contents');
      let challengeContents = document.getElementsByClassName('challenge-contents');
      [introductionContents, challengeContents].forEach(section => {
        if (section && section.length > 0) {
          window.addEventListener("orientationchange", e => this.changeSubsectionHeights(section));
          // Resize the height of each subsection (under both Introduction and Challenges) when the window resizes
          window.addEventListener('resize', e => this.changeSubsectionHeights(section));
          // Expand on click
          Array.from(section).forEach(subsection => {
            subsection.style['max-height'] = subsection.querySelector('h5').offsetHeight + 29 + 'px';
            subsection.addEventListener('click', e => {
              if (e.target.tagName !== 'IMG') {
                subsection.classList.toggle('expand');
                subsection.style['max-height'] = subsection.classList.contains('expand') ? '1000px' : 
                                                subsection.querySelector('h5').offsetHeight + 29 + 'px';
              }
            });
          });
        }
      });
      this.setState({updated: true});
    }
  }

  showModalHandler(bool) {
    this.setState({showModal: bool, lightboxIsOpen: {}, updated: false, closeOnEscape: true});
  }

  lightboxHandler(bool, name, index) {
    this.setState({photoIndex: index}, () => {
      this.setState({
        lightboxIsOpen: {
          [name]: bool
        },
        closeOnEscape: false
      });
    });
    if (!bool) {
      setTimeout(() => {
        this.setState({closeOnEscape: true})
      }, 100);
    }
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
    const { photoIndex, showModal, lightboxIsOpen, closeOnEscape } = this.state;
    const { name, descriptions, headerPhotos, videos, introduction, challenges } = this.props;
    const { showModalHandler, lightboxHandler, onMovePrevRequest, onMoveNextRequest } = this;
    return (
      <Modal
        trigger={ <Button onClick={e => showModalHandler(true)}>More Info</Button> }
        className='standard-modal'
        open={showModal}
        size='large'
        closeIcon
        closeOnEscape={closeOnEscape}
        onClose={e => showModalHandler(false)}
      >
        <h1>{name}</h1>
        <div className='modal-description'>
          {
            descriptions && descriptions.map((description, index) => (
              <div key={index}>
                {
                  description.slice(0,5) === 'https' ? (
                    <p><a href={description} target='_blank'>{description}</a></p>
                  ) : description.slice(0,3) === 'www' || description.slice(-4) === '.com' ? (
                    <p><a href={'//' + description} target='_blank'>{description}</a></p>
                  ) : (
                    <p key={index}>{description}</p>
                  )
                }
              </div>
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
          <div className='videos'>
            {
              videos && videos.map(video => (
                <YouTube
                  key={video}
                  videoId={video}
                />
              )) 
            }
          </div>
        </div>
        <div className='modal-content'>
          {
            [introduction, challenges].map((section, index) => (
              <div className='modal-section' key={index}>
                {
                  section && 
                  <div>
                    <h2>{section === introduction ? 'INTRODUCTION' : 'CHALLENGES'}</h2>
                    {
                      section.map((subsection, index) => (
                        <Segment key={index} className={(section === introduction ? 'introduction' : 'challenge') +'-contents'}>
                          <h5>{subsection.header}</h5>
                          {
                            subsection.body.map((content, index) => (
                              <div key={index} className='content-container'>
                                {
                                  content.pictureType === 'multi' ? (
                                    <div>
                                      {
                                        content.text.slice(0,5) === 'https' ? (
                                          <p><a href={content.text} target='_blank'>{content.text}</a></p>
                                        ) : content.text.slice(0,3) === 'www' ? (
                                          <p><a href={'//' + content.text} target='_blank'>{content.text}</a></p>
                                        ) : (
                                          <p>{content.text}</p>
                                        )
                                      }
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
                                      {
                                        content.text.slice(0,5) === 'https' ? (
                                          <p><a href={content.text} target='_blank'>{content.text}</a></p>
                                        ) : content.text.slice(0,3) === 'www' ? (
                                          <p><a href={'//' + content.text} target='_blank'>{content.text}</a></p>
                                        ) : (
                                          <p>{content.text}</p>
                                        )
                                      }
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
                }
              </div>
            ))
          }
        </div>
      </Modal>
    )
  }
}
