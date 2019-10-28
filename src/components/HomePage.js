import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { bounceInDown, pulse, tada, lightSpeedIn, slideInDown } from "react-animations";
import styled, { keyframes } from 'styled-components';

const BounceInDown = styled.div`animation: 2s ${keyframes`${bounceInDown}`} 1`;
const Pulse = styled.div`animation: 2s ${keyframes`${pulse}`} 2`;
const Tada = styled.div`animation: 2s ${keyframes`${tada}`} 1`;
const LightSpeedIn = styled.div`animation: 2s ${keyframes`${lightSpeedIn}`} 1`;
const SlideInDown = styled.div`animation: 2s ${keyframes`${slideInDown}`} 1`;




export default class HomePage extends Component {
    render() {

        return(
            <div class="contains">
                {/* <div class="row"> */}
                    <div class="homeContainer row align-items-center shadow p-3 mb-5 bg-white rounded">
                        <div class="imagePic col-5 rounded float-left">
                            <img class="myPic " src="myPic2.jpg" alt="steven"></img>
                        </div>
                        <div class="intro col-7">
                            <div class="homeInfo">
                                <BounceInDown>
                                    <h1 id="title">Steven Chung</h1>
                                </BounceInDown>
                                <LightSpeedIn>
                                    <h3><span>Full-Stack Developer</span></h3>
                                </LightSpeedIn>

                                <hr></hr>
                                <p class="elevatorPitch font-weight-normal">
                                    How's it going, my name is Steven Chung. I am currently a senior with a major in Computer Science. 
                                    My goal is to become a Full-Stack Developer when I graduate in the Spring of 2020.  
                                    In addition to my computer science studies, I have completed an intense three month coding bootcamp program that provided hands-on experience
                                    in three different stacks. I have a passion for developing and building things and I enjoy the process of working 
                                    with a team to achieve one common goal. I always love a challenge and I will push myself as much as possible inorder to find a solution.
                                </p>
                            </div>
                            <div class="links row justify-content-center">
                                <div class="socials">
                                    {/* <div class="divResume"> */}
                                    <Link class="btn btn-outline-dark" to="/resume"> <h7 class="font-weight-bold">View Resume</h7></Link>
                                    {/* </div>  */}
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
                {/* http://www.stevendanielchung.com/ */}
            </div>
        );
    }
}

