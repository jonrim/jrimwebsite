import React, { Component } from 'react';
import { Button, Label, Grid } from 'semantic-ui-react';

import Profile from '../Profile';
import CloudPartners from '../CloudPartners';
import FreshAire from '../FreshAire';
import DownTime from '../DownTime';
import WorkWork from '../WorkWork';
import SuperMario from '../SuperMario';
import Haru from '../Haru';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    Array.from(document.getElementsByClassName('grid-col')).forEach(col => {
      col = col.children[0];
      col.addEventListener('click', e => {
        if (col.classList.contains('clicked')) {
          col.classList.remove('clicked');
          col.classList.add('unclicked');
        }
        else {
          col.classList.add('clicked');
          col.classList.remove('unclicked');
        }
      });
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth < 520) {
        Array.from(document.getElementsByClassName('grid-col')).forEach(col => {
          col.classList.remove('unclicked');
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
          <DownTime />
          <WorkWork />
          <SuperMario />
          <Haru />
        </Grid>
      </div>  
    );
  }
}