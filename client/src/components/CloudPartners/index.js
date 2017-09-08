import React, { Component } from 'react';
import { Button, Label, Grid } from 'semantic-ui-react';
import StandardModal from 'lib/components/Modal';

import './index.scss';

export default class CloudPartners extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  showModalHandler(bool) {
    this.setState({showModal: bool});
  }

  render() {
    const { showModal } = this.state;
    return (
      <Grid.Column className='grid-col' id='col-1'>
        <div className='col-wrapper'>
          <div className='work' id='cloud-partners'>
            <Label floating color='blue'>Freelance</Label>
            <div className='work-wrapper'>
              <img src='https://res.cloudinary.com/fresh-aire-mechanical-co/image/upload/v1504773171/top_kkzgup.png' />
              <div className='info'>
                <h4>Full Stack Engineer</h4>
                <p className="subtitle"><span>July 2017</span> - <span>Dec 2017</span></p>
              </div>
              <div className="description">
                <p>Currently building the entire client site of Cloud Partners' future platform.</p>
                <p>Used for creating and evaluating assessments of interviewees
                for companies like Goldman Sachs.</p>
                <StandardModal
                  showModal={showModal}
                  showModalHandler={this.showModalHandler.bind(this)}
                  name='CLOUD PARTNERS'
                  descriptions={descriptions}
                  challenges={challenges}
                />
              </div>
            </div>
           </div>
        </div>
      </Grid.Column>
    )
  }
}

let descriptions = [
  'Currently building the Talent Optimization Platform that will be used by companies like Goldman Sachs for creating and evaluating assessments of interviewees.',
  'Consists of a team of one senior engineer, one software engineer (me), one UI designer, and two other software engineers that are on call.',
  'We code review for clean, readable and efficient "Don\'t Repeat Yourself" code. We consider reasonable design choices so that we can build a complete working prototype by November and finish by December.'
];

let challenges = [
  {
    header: 'Semantic UI React\'s limitations',
    body: [
      {
        text: `It was frustrating trying to add my own properties and behavior onto Semantic UI React's wrappers around HTML elements. One huge example of its limitations
                  is there is no 'onPressEnter' property for an 'Input' component that I can run if the the user presses enter. I have to add my own event listener, which I also have to make sure
                  doesn't collide with the normal behavior of certain components of Semantic. e.g. A 'Search Dropdown' only completes the search on whichever result it's highlighted on and closes the
                  dropdown if you press enter. If you want to run your own behavior, I found that you have to check to see if the dropdown is closed first by checking the dropdown's class list for an
                  'active' class.`,
        pictureType: 'multi',
        pictures: ['https://i.gyazo.com/429d28ae8f443a6df61b027b6e3d4885.png', 'https://i.gyazo.com/429d28ae8f443a6df61b027b6e3d4885.png']
      },
      {
        text: `SUIR's Grid and Table collections can also want to make you rip your hair out. For Tables, a Header can't be easily styled - even if the job is to just get rid of all of the Header's styles. 
              In the screenshot, there's a table in the center with a Header that looks separate from the table. The easy way to achieve that was to make a totally separate table from the body 
              and make the background and border set to 'none'.`,
        pictureType: 'right',
        picture: 'https://i.gyazo.com/429d28ae8f443a6df61b027b6e3d4885.png'
      },
      {
        text: `For Grids, the screenshot also shows the Dynamic Assessment Builder to be broken down into three different columns - however, it's actually made of a parent component of two columns 
              (the two on the left are considered to be one column) with a child component that further breaks down the two columns. This is so that React can share the same state between the two 
              left columns through the parent. Data can be exchanged between the two: adding skills on the left will populate the central table. Deleting skills from the central table will reactivate 
              the skills on the left. A simple problem, yet it can be easily overlooked if not thought out through beforehand. Time spent refactoring can be time wasted.`,
        pictureType: 'right',
        picture: ''
      }
    ]
  },
]