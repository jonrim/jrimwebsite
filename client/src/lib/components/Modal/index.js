import React, { Component } from 'react';
import { Button, Modal, Segment, Rail } from 'semantic-ui-react';

import './index.scss';

export default class StandardModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  render() {
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
            descriptions.map(description => (
              <p>{description}</p>
            ))
          }
        </div>
        <div className='modal-content'>
          <h3>CHALLENGES</h3>
          {
            challenges.map((challenge, index) => (
              <Segment>
                { challenge }
                <Rail position={index % 2 ? 'left' : 'right'}>
                  Image here
                </Rail>
              </Segment>
            ))
          }
        </div>
      </Modal>
    )
  }
}