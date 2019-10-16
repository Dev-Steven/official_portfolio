import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class HomePage extends Component {
    render() {

        return(
            <div class="homeContainer">
                <div class="imagePic">
                    <img class="myPic" src="myPic.jpg" alt="steven"></img>
                </div>
                <div class="intro">
                    <div class="homeInfo">

                    <h1>Steven Chung</h1>
                    <h3><span>Full-Stack Developer</span></h3>
                    <hr></hr>
                    <h5>
                        Hello,  my name is Steven Chung. I am currently a senior with a major in Computer Science. 
                        My goal is to become a computer programmer when I graduate next year.  
                        In addition to my computer science studies, I have completed an intense three month coding bootcamp program that provided hands-on experience
                        in three different stacks. I am passionate about computer application work and I hope to find an ideal fit for someone like me in your organization
                        where I can apply my knowledge to work towards achieving the goals of the team while challenging myself to constantly improve upon my abilities. 
                    </h5>
                    </div>

                    <div class="links row justify-content-center">
                        <div class="socials">
                            <div class="divResume">
                            <Link class="resume" to="/resume"> <h7>View Resume</h7></Link>
                            </div>
                            <div class="linkers">
                                <a href="https://www.linkedin.com/in/dev-steven-chung/" target="_blank" class="fa fa-linkedin-square"></a>
                                <a href="https://github.com/Dev-Steven" target="_blank" class="fa fa-github"></a>
                                <a href="https://github.com/Dev-Steven" target="_blank" class="fa fa-envelope"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

