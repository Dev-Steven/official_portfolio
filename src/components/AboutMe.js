import React, { Component } from 'react';

export default class AboutMe extends Component {
    render() {
        return(
            <div class="homeContainer">
                <h1>About</h1>
                <hr></hr>


                <div class="stuff" id="aboutStuff">
                <h4>Education</h4>
                    <p>
                        I currently attend college at the California State University of Long Beach, pursuing a Bachelor's of Science in Computer Science.
                        Prior to attending CSULB, I attended Skyline Community College, located in San Bruno, California, which is the area in which I grew up.
                        Skyline is where I took my very first computer programming course, C++. While taking this course I quickly fell in love with the concept
                        of communicating with a computer and having the ability to build anything I could imagine.
                    </p>
                </div>


                <div class="stuff" id="aboutStuff">
                <h4>Coding Bootcamp</h4>
                    <p>
                        Toward the end of my junior year in the Sping of 2019, I wanted to improve and sharpen my programming abilities so I decided to 
                        take on the biggest challenge of my life. I joined a 3 month highly intense coding bootcamp. Throughout this bootcamp I learned 
                        3 full stacks, the Python Stack, MEAN Stack, and C# Stack. This bootcamp required 12+ hours a day, dedicated to learning alogrithms, 
                        data structure concepts and hands on programming. After graduating, I feel a lot stronger and more confident in my abilities to 
                        not only code but work with others on projects.
                    </p>
                </div>

                <div class="stuff" id="aboutStuff">
                <h4>Freelancer</h4>
                    <p>
                        Currently I am part of a freelancing team of four developers. Our team develops websites and web applications for our clients. I really 
                        enjoy the work we do because we exercise many skills required to be successful in working as a software engineer or full-stack developer
                        in a company. We are always open to discussing with potential clients about any ideas they would like to have become a reality.
                    </p>
                </div>

            </div>
        );
    }
}