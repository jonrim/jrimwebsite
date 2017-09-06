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
		window.addEventListener('resize', this.setScreenWidth.bind(this));
	}

	setScreenWidth() {
		this.setState({
			screenWidth: window.innerWidth
		});
	}

	render() {
		const { screenWidth } = this.state;
		return (
			<div id='profile'>
				<div id='profile-header'>
				  <img src={require('lib/images/profile.png')} id='profile-img' />
				  <h1>Jonathan Rim</h1>
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
			  {
			  	(screenWidth >= 500) ? (
	  				<Grid columns={2}>
				  		<Grid.Column width={10}>
						    <img src={require('lib/images/michigan.png')} />
						    <img src={require('lib/images/fsa.png')} />
						  </Grid.Column>
					  	<Grid.Column width={6}>
						    <img src={require('lib/images/stuyvesant.png')} />
					  	</Grid.Column>
					  </Grid>
			  	) : (
	  				<Grid columns={3} className='education-mobile'>
				  		<Grid.Column>
						    <img src={require('lib/images/michigan-mobile.png')} />
					  	</Grid.Column>
					  	<Grid.Column>
						    <img src={require('lib/images/fsa-mobile.png')} />
					  	</Grid.Column>
			  	  	<Grid.Column>
			  		    <img src={require('lib/images/stuyvesant.png')} />
			  	  	</Grid.Column>
		  			</Grid>
			  	)
			  }
			</div>
		)
	}
}