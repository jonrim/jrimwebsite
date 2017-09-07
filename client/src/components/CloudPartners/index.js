import React, { Component } from 'react';
import { Button, Label, Grid } from 'semantic-ui-react';
import StandardModal from 'lib/components/Modal';

import './index.scss';

export default class CloudPartners extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  showModalHandler(bool) {
    this.setState({showModal: bool});
  }

  render() {
    const { showModal } = this.state;
    return (
      <Grid.Column className='grid-col' id='col-1'>
        <div className='col-wrapper'>
          <div className='work' id='cloud-partners'>
            <Label floating color='blue'>Freelance</Label>
            <div className='work-wrapper'>
              <img src='https://res.cloudinary.com/fresh-aire-mechanical-co/image/upload/v1504773171/top_kkzgup.png' />
              <div className='info'>
                <h4>Full Stack Engineer</h4>
                <p className="subtitle"><span>July 2017</span> - <span>Dec 2017</span></p>
              </div>
              <div className="description">
                <p>Currently building the entire client site of Cloud Partners' future platform.</p>
                <p>Used for creating and evaluating assessments of interviewees
                for companies like Goldman Sachs.</p>
                <StandardModal
                  showModal={showModal}
                  showModalHandler={this.showModalHandler.bind(this)}
                  name='CLOUD PARTNERS'
                  descriptions={descriptions}
                  challenges={challenges}
                />
              </div>
            </div>
           </div>
        </div>
      </Grid.Column>
    )
  }
}

let descriptions = [
  'Sample description 1',
  'Sample description 2',
  'Sample description 3'
];

let challenges = [
  {content: 'this is the content', pictureType: 'multi'},
  {content: 'this is the content', pictureType: 'left'},
  {content: 'this is the content', pictureType: 'right'},
]