import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';

import './index.scss';

export default class DownTime extends Component {
	render() {
		return (
			<Grid.Column className='grid-col' id='col-3'>
				<div className='work' id='downtime'>
				  <div className='work-wrapper'>
				    <div className='info'>
				      <h2>DOWNTIME</h2>
				    </div>
				    <div className='description'>
			      </div>
				  </div>
				</div>
			</Grid.Column>
		)
	}
}