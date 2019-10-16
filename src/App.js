import React, { Component }  from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default class App extends Component {
  render(){

    return (
      <div>
        <Navbar></Navbar>
        {/* Route orders matter  */}
        <Switch>
          <Route path="/contact" component={Contact}/>
          <Route path="/resume" component={Resume}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/" component={HomePage} />
        </Switch>
        <Footer></Footer>
      </div>
    );
  };
}
    

