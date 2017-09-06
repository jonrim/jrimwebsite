import React, { Component } from 'react';
import { Button, Label, Grid } from 'semantic-ui-react';

import './index.scss';

export default class CloudPartners extends Component {
	render() {
		return (
			<Grid.Column className='grid-col' id='col-1'>
				<div className='work' id='cloud-partners'>
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