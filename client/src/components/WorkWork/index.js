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

					    </div>
					  </div>
					</div>
				</div>
			</Grid.Column>
		)
	}
}