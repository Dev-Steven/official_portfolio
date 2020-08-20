import React, { Component } from 'react';
import { LightSpeedIn } from '../../animations';
import './HomePage.scss';

export default class HomePage extends Component {
	render() {
		return (
			<div className='home-info text-center' id='home'>
				<h1 className='font-weight-bold'>Steven Chung</h1>
				<LightSpeedIn>
					<h4 className='job-title'>Software Engineer</h4>
				</LightSpeedIn>
				<hr></hr>
				<p className='message font-weight-normal'>
					Hey, I'm Steven, a Software Engineer specializing in
					Front-End development.
				</p>
				<a className='btn btn-outline-dark m-auto' href='#projects'>
					Checkout my work
				</a>
			</div>
		);
	}
}
