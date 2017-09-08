import React, { Component } from 'react';
import { Button, Modal, Segment, Image } from 'semantic-ui-react';
import Lightbox from 'react-image-lightbox';

import './index.scss';

export default class StandardModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen: false,
      photoIndex: 0
    };
  }

  render() {
    const { lightboxIsOpen, photoIndex } = this.state;
    const { showModalHandler, showModal, name, descriptions, challenges } = this.props;
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
                              {
                                content.pictures.map((picture, index) => (
                                  <span key={index}>
                                    <button
                                      type="button"
                                      onClick={() => this.setState({ lightboxIsOpen: true, photoIndex: index })}
                                    >
                                      <Image src={picture} size='small' />
                                    </button>

                                    {
                                      lightboxIsOpen &&
                                      <Lightbox
                                        mainSrc={content.pictures[photoIndex]}
                                        nextSrc={content.pictures[(photoIndex + 1) % content.pictures.length]}
                                        prevSrc={content.pictures[(photoIndex + content.pictures.length - 1) % content.pictures.length]}

                                        onCloseRequest={() => this.setState({ lightboxIsOpen: false, photoIndex: 0 })}
                                        onMovePrevRequest={() => this.setState({
                                          photoIndex: (photoIndex + content.pictures.length - 1) % content.pictures.length,
                                        })}
                                        onMoveNextRequest={() => this.setState({
                                          photoIndex: (photoIndex + 1) % content.pictures.length,
                                        })}
                                      />
                                    }
                                  </span>
                                ))
                              }
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
