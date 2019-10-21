import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { flash } from "react-animations";

const Jello = styled.div`animation: 1s ${keyframes`${flash}`} 2`;

export default class Projects extends Component {
    render() {
        return(
            <div class="homeContainer">
                <h1 class="font-weight-bold">Some of My Projects</h1>
                <div class="text-center">
                    <Jello>
                        <h2 class="text-warning">Currently Under Development...</h2>
                    </Jello>
                </div>
            </div>
        );
    }
}