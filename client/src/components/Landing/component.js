import React, { Component } from 'react';
import { Button, Label, Grid, Segment, Image } from 'semantic-ui-react';

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
          <Grid.Column id="cloud-partners">
            <Image
              fluid
              label={{ color: 'blue', corner: 'left' }}
            />
            <text className='corner-label-text'>freelance</text>
            <div className='work-wrapper'>
              <img src={require('lib/images/top.png')}></img>
              <div className='info'>
                <h4>Freelance</h4>
                <h4>Full Stack Engineer</h4>
                <p className="subtitle">July 2017 - Dec 2017</p>
              </div>
              <p className="description">
                Currently building the entire client site of Cloud Partners' future platform.
                Used for creating and evaluating assessments of interviewees
                for companies like Goldman Sachs.
              </p>
            </div>
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