import React, { Component } from 'react';
import './App.scss';
import Navbar from './Navbar';
import HomePage from './HomePage/HomePage';
import AboutMe from './About/AboutMe';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

export default class App extends Component {
	render() {
		return (
			<div className='app-container'>
				<Navbar />
				<HomePage />
				<AboutMe />
				<Projects />
				<Contact />
			</div>
		);
	}
}
