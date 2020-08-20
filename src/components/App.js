import React, { Component } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage/HomePage';
import AboutMe from './About/AboutMe';
import Projects from './Projects/Projects';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';

export default class App extends Component {
	render() {
		return (
			<div className='app-container'>
				<Navbar></Navbar>
				<HomePage />
				<AboutMe />
				<Projects />
				{/* <Footer></Footer> */}
			</div>
		);
	}
}
