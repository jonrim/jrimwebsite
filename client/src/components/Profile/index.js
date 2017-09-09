import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import './index.scss';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: window.innerWidth
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.changeScaling.bind(this));
    if (window.innerWidth >= 500) {
      setTimeout(() => {
        let leftCol = document.getElementById('left-education-container');
        let rightCol = document.getElementById('right-education-container');
        leftCol.style['top'] = 0.5 * (rightCol.offsetHeight - leftCol.offsetHeight) + 'px';
        this.forceUpdate();
      }, 100);
    }
    if (window.innerWidth >= 1200) {
      setTimeout(() => {
        let leftCol = document.getElementById('education');
        let rightCol = document.getElementById('stack');
        leftCol.style['top'] = 0.5 * (rightCol.offsetHeight - leftCol.offsetHeight) + 'px';
        this.forceUpdate();
      }, 100);
    }
  }

  changeScaling() {
    if (window.innerWidth >= 500) {
      let leftCol = document.getElementById('left-education-container');
      let rightCol = document.getElementById('right-education-container');
      if (leftCol && rightCol) {
        leftCol.style['top'] = 0.5 * (rightCol.offsetHeight - leftCol.offsetHeight) + 'px';
      }
    }
    if (window.innerWidth >= 1200) {
      let leftCol = document.getElementById('education');
      let rightCol = document.getElementById('stack');
      leftCol.style['top'] = 0.5 * (rightCol.offsetHeight - leftCol.offsetHeight) + 'px';
    }
    this.setState({
      screenWidth: window.innerWidth
    });
  }

  render() {
    const { screenWidth } = this.state;
    const technologies = [
      ['https://res.cloudinary.com/fresh-aire-mechanical-co/image/upload/v1504773171/react_xq5uv1.png',
       'https://res.cloudinary.com/fresh-aire-mechanical-co/image/upload/v1504773170/node_drrzs9.png'],
      ['https://res.cloudinary.com/fresh-aire-mechanical-co/image/upload/v1504773171/postgres_br2dni.png',
      'https://res.cloudinary.com/fresh-aire-mechanical-co/image/upload/v1504773170/express_v9rnmb.png']
    ];
    return (
      <div id='profile'>
        <div id='profile-header'>
          <img
            src='https://res.cloudinary.com/fresh-aire-mechanical-co/image/upload/v1504773171/profile_lqnift.png'
            id='profile-img'
          />
          <h1>Jonathan Rim</h1>
          <h4>jrim@jonathanrim.com</h4>
          <div id='buttons'>
            <a href='https://github.com/jonrim' target='_blank'>
              <Button className='button button-purple'>
                <i className='fa fa-github fa-lg' />Github
              </Button>
            </a>
            <a href='https://linkedin.com/in/jonathan-rim' target='_blank'>
              <Button className='button button-blue'>
                <i className='fa fa-linkedin-square fa-lg' />LinkedIn
              </Button>
            </a>
          </div>    
        </div>
        <div id='education-stack'>
          {
            (screenWidth >= 500) ? (
              <Grid columns={2} id='education'>
                <Grid.Column width={10}>
                  <div id='left-education-container'>
                    <a href='https://umich.edu' target='_blank'>
                      <img src='https://res.cloudinary.com/fresh-aire-mechanical-co/image/upload/v1504773170/michigan_qbqufw.png' />
                    </a>
                    <a href='https://www.fullstackacademy.com' target='_blank'>
                      <img src='https://res.cloudinary.com/fresh-aire-mechanical-co/image/upload/v1504773170/fsa_lmxzpy.png' />
                    </a>
                  </div>
                </Grid.Column>
                <Grid.Column width={6}>
                  <div id='right-education-container'>
                    <a href='https://en.wikipedia.org/wiki/Stuyvesant_High_School' target='_blank'>
                      <img src='https://res.cloudinary.com/fresh-aire-mechanical-co/image/upload/v1504773171/stuyvesant_paujhu.png' />
                    </a>
                  </div>
                </Grid.Column>
              </Grid>
            ) : (
              <Grid columns={3} className='education-mobile'>
                <Grid.Column>
                  <a href='https://umich.edu' target='_blank'>
                    <img src='https://res.cloudinary.com/fresh-aire-mechanical-co/image/upload/v1504773171/michigan-mobile_psyxnv.png' />
                  </a>
                </Grid.Column>
                <Grid.Column>
                  <a href='https://www.fullstackacademy.com' target='_blank'>
                    <img src='https://res.cloudinary.com/fresh-aire-mechanical-co/image/upload/v1504773170/fsa-mobile_cdqudw.png' />
                  </a>
                </Grid.Column>
                <Grid.Column>
                  <a href='https://en.wikipedia.org/wiki/Stuyvesant_High_School' target='_blank'>
                    <img src='https://res.cloudinary.com/fresh-aire-mechanical-co/image/upload/v1504773171/stuyvesant_paujhu.png' />
                  </a>
                </Grid.Column>
              </Grid>
            )
          }
          <Grid columns={2} id='stack'>
            {
              technologies.map((technology, index) => (
                <Grid.Row key={'technology-' + index}>
                  <Grid.Column width={6} id={technology[0]}>
                    <img src={technology[0]} />
                  </Grid.Column>
                  <Grid.Column width={10} id={technology[1]}>
                    <img src={technology[1]} />
                  </Grid.Column>
                </Grid.Row>
              ))
            }
          </Grid>
        </div>
      </div>
    )
  }
}