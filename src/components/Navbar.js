import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return(

                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <Link class="navbar-brand" to="/"><span class="Logo">Steven Chung</span></Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-item nav-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-item nav-link" to="/projects">Projects</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
       
       );
    }
}

