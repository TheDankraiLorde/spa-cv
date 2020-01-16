import React from 'react';
import './header.css';
import data from "../data/data_val";

const Header = () => (
    <div className="App-header">
        <div className="jumbotron App-heading">
          <h1 className="name">{data.name}</h1>
          <h6 className="about">{data.about}</h6>
        </div>
    </div>
)

export default Header;