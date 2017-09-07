import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';

import './index.scss';

export default class DownTime extends Component {
  render() {
    return (
      <Grid.Column className='grid-col' id='col-3'>
        <div className='col-wrapper'>
          <div className='work' id='downtime'>
            <div className='work-wrapper'>
              <div className='info'>
                <h2>DOWNTIME</h2>
                <p className="subtitle">A REACT NATIVE MOBILE APP THAT TRACKS PRODUCTIVITY BY GEOLOCATION</p>
              </div>
              <div className='description'>
                <p>Mobile app that saves geolocations and time spent to track productivity and history.</p>
                <Button>More Info</Button>
              </div>
              <img src={require('lib/images/reactnative.png')} />
            </div>
          </div>
        </div>
      </Grid.Column>
    )
  }
}