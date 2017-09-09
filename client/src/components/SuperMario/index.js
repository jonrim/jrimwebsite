import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';

import './index.scss';

export default class SuperMario extends Component {
  render() {
    return (
      <Grid.Column className='grid-col' id='col-5'>
        <div className='col-wrapper'>
          <div className='work' id='super-mario'>
            <div className='work-wrapper'>
              <div className='info'>
                <h2>SUPER MARIO BROS. 3 REMAKE</h2>
                <p className="subtitle">EXPLORATION OF PHYSICS ENGINES & GAME DESIGN</p>
              </div>
              <div className='description'>
                <p>Completely remade the first level of Super Mario Bros. 3, and also made a unique custom level.</p>
                <p>Focused on building a collision detection system, a physics engine, and a state machine for animations that imitate the real game.</p>
                <Button>More Info</Button>
              </div>
            </div>
          </div>
        </div>
      </Grid.Column>
    )
  }
}