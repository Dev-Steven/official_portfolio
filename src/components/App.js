import React, { Component } from 'react';
import './App.scss';
import { Route, Switch, Router } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage/HomePage';
import AboutMe from './About/AboutMe';
import Projects from './Projects/Projects';
import Contact from './Contact';
import Footer from './Footer';

export default class App extends Component {
	render() {
		return (
			<div className='app-container'>
				<Navbar />
				<HomePage />
				<AboutMe />
				<Projects />
				<Contact />
				{/* <Footer></Footer> */}
			</div>
		);
	}
}
