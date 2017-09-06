import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import './index.scss';

export default class Profile extends Component {
	render() {
		return (
			<div id='profile'>
			  <img src={require('lib/images/profile.png')}></img>
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
		)
	}
}