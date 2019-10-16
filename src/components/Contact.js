import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Contact extends Component {
    render() {
        return(
            <div class="homeContainer">
                <h1>Let's Get In Contact</h1>
                <h4>
                    I am currently looking for a position as a Full-Stack developer as well as open to discuss any business ideas. 
                    Please feel free to reach me at any of the following:
                </h4>
                <a href="https://www.linkedin.com/in/dev-steven-chung/" target="_blank" class="fa fa-linkedin-square"></a>
                <a href="https://github.com/Dev-Steven" target="_blank" class="fa fa-github"></a>
                <a href="https://github.com/Dev-Steven" target="_blank" class="fa fa-envelope"></a>

                

            </div>
        );
    }
}