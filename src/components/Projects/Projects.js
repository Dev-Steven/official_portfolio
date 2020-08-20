import React, { Component } from 'react';
import './Projects.scss';

export default class Projects extends Component {
	render() {
		return (
			<div class='projects' id='projects'>
				<div class='homeContainer'>
					<h1 class='font-weight-bold text-center'>My Projects</h1>
					<div className='container'>
						<div className='row'>
							<div className='col'>project 1</div>
							<div className='col'>project 2</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
