import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';

import './index.scss';

export default class FreshAire extends Component {
	render() {
		return (
			<Grid.Column className='grid-col' id='col-2'>
				<div className='work' id='fresh-aire'>
				  <div className='work-wrapper'>
				    <img src={require('lib/images/freshaire.png')}></img>
				    <div className='info'>
				      <h4>Full Stack Engineer</h4>
				      <p className='subtitle'><span>Jan 2017</span> - <span>Present</span></p>
				    </div>
				    <div className='description'>
			      	<p><a href='//www.freshaireny.com' target='_blank'>freshaireny.com</a></p>
				      <p>Built a website for father's company.</p>
				      <p>Serves as a flyer for clients looking for HVAC services.</p>
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