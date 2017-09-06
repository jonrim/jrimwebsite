import React, { Component } from 'react';
import { Button, Label, Grid } from 'semantic-ui-react';

import './index.scss';

export default class WorkWork extends Component {
	render() {
		return (
			<Grid.Column className='grid-col' id='col-4'>
				<div className='work' id='workwork'>
				  <Label floating color='red'>Technical</Label>
				  <div className='work-wrapper'>

				    <div className='info'>
				      <h2>WORKWORK.JS</h2>
				    </div>
				    <div className='description'>

				    </div>
				  </div>
				</div>
			</Grid.Column>
		)
	}
}