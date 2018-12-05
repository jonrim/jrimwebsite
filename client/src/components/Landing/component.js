import React, { Component } from 'react';
import { Button, Label, Grid } from 'semantic-ui-react';
import objectFitImages from 'object-fit-images';

import Profile from '../Profile';
import CloudPartners from '../CloudPartners';
import FreshAire from '../FreshAire';
import Kakao from '../Kakao';
import DownTime from '../DownTime';
import WorkWork from '../WorkWork';
import SuperMario from '../SuperMario';
import Haru from '../Haru';

export default class Landing extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    objectFitImages();
    Array.from(document.getElementsByClassName('grid-col')).forEach((col, index) => {
      // col's direct child is col-wrapper that is used for setting the background
      // col-wrapper's child is 'work' that will have classes added and removed from it
      // this lets the background's opacity change on click only for cols 3-6
      col = col.firstChild.firstChild;
      col.addEventListener('click', e => {
        if (col.classList.contains('clicked')) {
          col.classList.remove('clicked');
          col.classList.add('unclicked');
          if (index >= 3) {
            col.classList.remove('makeDim');
            col.classList.add('makeBright');
          }
        }
        else {
          col.classList.add('clicked');
          col.classList.remove('unclicked');
          if (index >= 3) {
            col.classList.add('makeDim');
            col.classList.remove('makeBright');
          }
        }
      });
      if (col.querySelector('.website-button')) {
        col.querySelector('.website-button').addEventListener('click', e => {
          e.stopPropagation();
        });
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth < 520) {
        Array.from(document.getElementsByClassName('grid-col')).forEach(col => {
          col.firstChild.firstChild.classList.remove('unclicked');
        });
      }
    });
  }

  render() {
    return (
      <div className="container" id="landing">
        <Profile />
        <Grid columns={2} stackable doubling verticalAlign='middle'>
          <CloudPartners />
          <FreshAire />
        </Grid>
        <Grid columns={1} stackable doubling verticalAlign='middle'>
          <Kakao />
        </Grid>
        <Grid columns={2} stackable doubling verticalAlign='middle'>
          <DownTime />
          <WorkWork />
          <SuperMario />
          <Haru />
        </Grid>
      </div>  
    );
  }
}