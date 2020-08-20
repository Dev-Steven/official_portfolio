import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
	render() {
		return (
			<nav className='navbar navbar-expand-lg navbar-dark bg-dark px-5 fixed-top'>
				<a
					className='navbar-brand font-weight-bold text-white'
					href='#home'
				>
					<span className='text-white'>Steven Chung</span>
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNav'
					aria-controls='#navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav ml-auto'>
						<li className='nav-item'>
							<a
								className='nav-link nav-a font-weight-normal text-white'
								href='#about'
							>
								About
							</a>
						</li>
						<li className='nav-item'>
							<a
								className='nav-link nav-a font-weight-normal text-white'
								href='#projects'
							>
								Projects
							</a>
						</li>
						<li className='nav-item'>
							<a
								className='nav-link nav-a font-weight-normal text-white'
								to='/'
							>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
