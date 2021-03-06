import React, { Component } from 'react';
import './Projects.scss';
import Card from '../Card/Card';
// importing pictures from assets
import weatherly from '../../assets/weatherly.png';
import ghostcord from '../../assets/ghostcord.png';
import pathfindervs from '../../assets/pathfindervs.png';

export default class Projects extends Component {
	render() {
		return (
			<div className='projects' id='projects'>
				<div className='homeContainer'>
					<h1 className='font-weight-bold text-center mb-2'>
						My Projects
					</h1>
					<hr />
					<div className='container text-center'>
						<div className='row text-center'>
							<div className='col text-center zoom'>
								<Card
									title='Weatherly'
									img={weatherly}
									descr='Weather app that utilizes the Openweather API to display current weather information.'
									btn_text='View Site'
									link='https://loving-panini-a8a548.netlify.app'
								/>
							</div>
							<div className='col'>
								<Card
									title='Ghostcord'
									img={ghostcord}
									descr='Social media app with features: video call, whiteboarding and messaging. Built with a team of 4 developers'
									btn_text='View on Github'
									link='https://github.com/henrymhong/ghostcord'
								/>
							</div>
							<div className='col'>
								<Card
									title='Pathfinder'
									img={pathfindervs}
									descr='Visually display how certain pathfinding algorithms work. (Still in progress)'
									btn_text='View Site'
									link='https://loving-johnson-6296df.netlify.app'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
