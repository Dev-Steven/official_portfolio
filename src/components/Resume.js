import React, { Component } from 'react';

export default class Resume extends Component {
    render() {
        return(
            <div class="resumeContainer">
                <h1>Take a Look at My Resume</h1>
                <div class="container_resume">
                    <object class="preview_resume" data="Chung_Steven_Resume_2019.pdf"></object>
                </div>
            </div>
        );
    }
}