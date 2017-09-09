import React, { Component } from 'react';
import { Button, Modal, Segment, Image } from 'semantic-ui-react';
import LightboxPhoto from '../LightboxPhoto';

import './index.scss';

export default class StandardModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      showModal: false,
      lightboxIsOpen: false
    };
    this.showModalHandler = this.showModalHandler.bind(this);
    this.lightboxHandler = this.lightboxHandler.bind(this);
    this.onMovePrevRequest = this.onMovePrevRequest.bind(this);
    this.onMoveNextRequest = this.onMoveNextRequest.bind(this);
  }

  showModalHandler(bool) {
    this.setState({showModal: bool, lightboxIsOpen: false});
  }

  lightboxHandler(bool, index) {
    this.setState({ lightboxIsOpen: bool, photoIndex: index });
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
        </div>
        <div className='modal-content'>
          <LightboxPhoto
            pictures={headerPhotos}
            lightboxHandler={lightboxHandler}
            onMovePrevRequest={onMovePrevRequest}
            onMoveNextRequest={onMoveNextRequest}
            lightboxIsOpen={lightboxIsOpen}
            photoIndex={photoIndex}
          />
          <h2>CHALLENGES</h2>
          {
            challenges.map((challenge, index) => (
              <Segment key={index}>
                <h3>{challenge.header}</h3>
                {
                  challenge.body.map((content, index) => (
                    <div key={index} className='content-container'>
                      {
                        content.pictureType === 'multi' ? (
                          <div>
                            <p>{content.text}</p>
                            <div className='picture-row'>
                            </div>
                          </div>
                        ) : (
                          <div className='one-image-div'>
                            <Image floated={ content.pictureType } src={content.picture} size='small' />
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
