import React from 'react';
import './header.css';
import data from "../../data/data_val";
import styled, { keyframes } from 'styled-components';
import bounce from 'react-animations/lib/bounce';

const Bounce = styled.div`animation: 2s ${keyframes `${bounce}`}  1`

const Header = () => (
    <div className="App-header">
      <Bounce>
        <div className="jumbotron App-heading">
            <h1 className="name">{data.name}</h1>
        </div>
      </Bounce>
    </div>
)

export default Header;