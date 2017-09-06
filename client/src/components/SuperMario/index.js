import React, { Component } from 'react';
import { Button, Label, Grid } from 'semantic-ui-react';

import './index.scss';

export default class SuperMario extends Component {
	render() {
		return (
			<Grid.Column className='grid-col' id='col-5'>
				<div className='work' id='super-mario'>
				  <div className='work-wrapper'>
				  	<Label floating color='red'>Technical</Label>
				    <div className='info'>
				      <h2>SUPER MARIO BROS. 3 REMAKE</h2>
				    </div>
				    <div className='description'>
			      	
				    </div>
				  </div>
				</div>
			</Grid.Column>
		)
	}
}