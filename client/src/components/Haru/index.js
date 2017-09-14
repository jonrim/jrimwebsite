import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import StandardModal from 'lib/components/Modal';

import './index.scss';

export default class Haru extends Component {
  render() {
    return (
      <Grid.Column className='grid-col' id='col-6'>
        <div className='col-wrapper'>
          <div className='work' id='haru'>
            <div className='work-wrapper'>
              <div className='info'>
                <h2>HARU THE SHIBA INU'S SHOP</h2>
                <p className="subtitle">A STATIC E-COMMERCE PAGE FOR A YOUTUBE CHANNEL</p>
              </div>
              <a href='https://www.youtube.com/channel/UCYd6CmhFvvq6yruUBmGXjuA/feed' target='_blank'>
                <Button className='website-button youtube-button'>
                  <i className='fa fa-youtube-square' />
                </Button>
              </a>
              <a href='//harushop.herokuapp.com' target='_blank'>
                <Button className='website-button' icon='world' content='www' />
              </a>
              <div className='description'>
                <p>Built a static e-commerce page for a 28k+ subscribers YouTube channel.</p>
                <StandardModal
                  name={'HARU THE SHIBA INU\'S SHOP'}
                  descriptions={descriptions}
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
  `https://harushop.herokuapp.com`,
  `Made a static e-commerce page for a YouTube channel with easy checkout.`,
];