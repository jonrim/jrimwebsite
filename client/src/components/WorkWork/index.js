import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';

import './index.scss';

export default class WorkWork extends Component {
  render() {
    return (
      <Grid.Column className='grid-col' id='col-4'>
        <div className='col-wrapper'>
          <div className='work' id='workwork'>
            <div className='work-wrapper'>
              <div className='info'>
                <h2>WORKWORK.JS</h2>
                <p className="subtitle">JAVASCRIPT LIBRARY THAT CAN RUN COMPUTATION-HEAVY TASKS CONCURRENTLY IN THE BROWSER</p>
              </div>
              <a href='https://workworkjs.github.io/workworkjs/index.html' target='_blank'>
                <Button className='website-button' icon='world' content='www' />
              </a>
              <div className='description'>
                <p>Assists the native Array.prototype methods by running tasks simultaneously using HTML5 Web Workers.</p>
                <Button>More Info</Button>
              </div>
              <img src='https://res.cloudinary.com/fresh-aire-mechanical-co/image/upload/v1504773170/html5_nepitm.png' />
            </div>
          </div>
        </div>
      </Grid.Column>
    )
  }
}