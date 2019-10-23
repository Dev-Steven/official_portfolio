import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { rubberBand } from "react-animations";

const Swing = styled.div`animation: 2s ${keyframes`${rubberBand}`} 1`;


export default class Footer extends Component {
    render() {
        return(
            <footer class="footer">
                <div class="container">
                    <div class="linkers row ">
                        <div class="col">
                            <Swing>
                                <a  href="https://www.linkedin.com/in/dev-steven-chung/" target="_blank" class="fa fa-linkedin-square"></a>
                            
                                <a href="https://github.com/Dev-Steven" target="_blank" class="fa fa-github"></a>
                            
                                <a href="https://www.instagram.com/steven.devs/" target="_blank" class="fa fa-instagram"></a>
                            </Swing>
                        </div>
                    </div>
                    <div class="copyRight">
                        <p class="font-weight-normal">
                            Email: <span>stevenchung650@gmail.com</span> |
                            Phone: <span>650-863-5324 </span>
                            | © 2019 Copyright: Steven Chung
                        </p>
                    </div>
                </div>
            </footer>
        );
    }
}


