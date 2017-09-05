import React, { Component } from 'react';
import { Button, Label, Grid, Segment } from 'semantic-ui-react';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="container" id="landing">
        <div id='profile'>
          <img src={require('lib/images/profile.png')}></img>
          <h1>Jonathan Rim</h1>
          <div id='buttons'>
            <a href="https://github.com/jonrim" target='_blank'>
              <Button className='button button-purple'>
                <i className="fa fa-github fa-lg" />Github
              </Button>
            </a>
            <a href="https://linkedin.com/in/jonathan-rim" target='_blank'>
              <Button className='button button-blue'>
                <i className="fa fa-linkedin-square fa-lg" />LinkedIn
              </Button>
            </a>
          </div>
        </div>
        <Grid columns={2} stackable divided doubling verticalAlign='middle'>
          <Grid.Column id='cloud-partners'>
            <input type='checkbox' id='cloud-partners-btn' className='col-btns' />
            <label for='cloud-partners-btn'>
              <Label floating color='blue'>Freelance</Label>
              <div className='work-wrapper'>
                <img src={require('lib/images/top.png')}></img>
                <div className='info'>
                  <h4>Full Stack Engineer</h4>
                  <p className="subtitle"><span>July 2017</span> - <span>Dec 2017</span></p>
                </div>
                <div className="description">
                  <p>Currently building the entire client site of Cloud Partners' future platform.</p>
                  <p>Used for creating and evaluating assessments of interviewees
                  for companies like Goldman Sachs.</p>
                  <Button />
                </div>
              </div>
            </label>
          </Grid.Column>
          asd
          <Grid.Column>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid>
      </div>  
    );
  }
}