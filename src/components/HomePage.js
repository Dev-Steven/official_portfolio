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

                    <h1 id="title">Steven Chung</h1>
                    <h3><span>Full-Stack Developer</span></h3>
                    <hr></hr>
                    <p class="elevatorPitch">
                        Hello, my name is Steven Chung. I am currently a senior with a major in Computer Science. 
                        My goal is to become a Full-Stack Developer when I graduate in the Spring of 2020.  
                        In addition to my computer science studies, I have completed an intense three month coding bootcamp program that provided hands-on experience
                        in three different stacks. I have a passion for developing and building things and I enjoy the process of working 
                        with a team to achieve one common goal. I always love a challenge and I will push myself as much as possible inorder to find a solution.
                        
                        
                    </p>
                    </div>

                    <div class="links row justify-content-center">
                        <div class="socials">
                            <div class="divResume">
                            <Link class="resume" to="/resume"> <h7>View Resume</h7></Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

