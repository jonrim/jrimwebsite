import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';

import './index.scss';

export default class Haru extends Component {
	render() {
		return (
			<Grid.Column className='grid-col' id='col-6'>
				<div className='col-wrapper'>
					<div className='work' id='haru'>
					  <div className='work-wrapper'>
					    <div className='info'>
					      <h2>HARU THE SHIBA INU</h2>
					      <p className="subtitle">A STATIC E-COMMERCE PAGE FOR A YOUTUBE CHANNEL</p>
					    </div>
					    <div className='description'>
				      	<p><a href='//harushop.herokuapp.com' target='_blank'>harushop.herokuapp.com</a></p>
				      	<p>
				      		<a
				      			href='https://www.youtube.com/channel/UCYd6CmhFvvq6yruUBmGXjuA/feed'
				      			target='_blank'
				      		>
				      			YouTube Channel
				      		</a>
				      	</p>
					      <p>Built a static e-commerce page for 28k+ subscribers YouTube channel.</p>
					      <Button>
					    		More Info
					    	</Button>
					    </div>
					  </div>
					</div>
				</div>
			</Grid.Column>
		)
	}
}