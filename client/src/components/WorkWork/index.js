import React, { Component } from 'react';
import { Button, Label, Grid } from 'semantic-ui-react';

import './index.scss';

export default class WorkWork extends Component {
  render() {
    return (
      <Grid.Column className='grid-col' id='col-4'>
        <div className='col-wrapper'>
          <div className='work' id='workwork'>
            <Label floating color='red'>Technical</Label>
            <div className='work-wrapper'>

              <div className='info'>
                <h2>WORKWORK.JS</h2>
                <p className="subtitle">JAVASCRIPT LIBRARY THAT CAN RUN COMPUTATION-HEAVY TASKS CONCURRENTLY IN THE BROWSER</p>
              </div>
              <div className='description'>
                <p>Assists the native Array.prototype methods by running tasks simultaneously using HTML5 Web Workers.</p>
                <Button>More Info</Button>
              </div>
              <img src={require('lib/images/html5.png')} />
            </div>
          </div>
        </div>
      </Grid.Column>
    )
  }
}