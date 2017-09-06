import React, { Component } from 'react';
import { Button, Label, Grid } from 'semantic-ui-react';

import './index.scss';

export default class FreshAire extends Component {
	render() {
		return (
			<Grid.Column className='grid-col' id='col-2'>
				<div id='fresh-aire'>
				  <div className='work-wrapper'>
				    <img src={require('lib/images/freshaire.png')}></img>
				    <div className='info'>
				      <h4>Full Stack Engineer</h4>
				      <p className="subtitle"><span>Jan 2017</span> - <span>Present</span></p>
				    </div>
				    <div className="description">
				      <p>Currently building the entire client site of Cloud Partners' future platform.</p>
				      <p>Used for creating and evaluating assessments of interviewees
				      for companies like Goldman Sachs.</p>
				      <Button>
				    		More Info
				    	</Button>
				    </div>
				  </div>
				</div>
			</Grid.Column>
		)
	}
}