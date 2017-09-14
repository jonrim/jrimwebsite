import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import StandardModal from 'lib/components/Modal';

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
                <StandardModal
                  name='DOWNTIME'
                  descriptions={descriptions}
                  headerPhotos={headerPhotos}
                  videos={videos}
                />
              </div>
              <img src='https://res.cloudinary.com/fresh-aire-mechanical-co/image/upload/v1504773171/reactnative_tmsdnh.png' />
            </div>
          </div>
        </div>
      </Grid.Column>
    )
  }
}

let descriptions = [
  `https://github.com/jonrim/downtime`,
  `Mobile app that saves geolocations and time spent to track productivity and history.`,
  `Learned React Native and made this application in less than 2 weeks.`
];

let headerPhotos = [
  'https://i.gyazo.com/0b4809629c46aba1aaed58ce66f96c28.png',
  'https://i.gyazo.com/f3982c40e5c56254c81aec0d25f8c5b2.png',
  'https://i.gyazo.com/936f59fd69651523956f682305ba7736.png',
  'https://i.gyazo.com/49ec8d9a95411c8d7bc4ccffd94bf6e9.png',
  'https://i.gyazo.com/c566e892d8aff823628f305f3e382116.png'
];

let videos = [
  'WXJsSVdsl1k',
];