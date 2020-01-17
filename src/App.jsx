import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Header from './components/Header/header'
import menu from './data/menu'
import data from './data/data_val'

function App() {
  return (
    <div className="App">
      <Header />
      <h6 className="about">{data.about}</h6>
      <Router>
        <div className="container body">
          <div className="card-deck">
          {
            menu.map(item => (
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    {item.title}
                  </h5>
                  <p className="card-text">
                    {item.description}
                  </p>
                  <button className="btn btn-primary" style={
                    {
                      textTransform:'capitalize'
                    }
                  }>
                    {item.title}
                  </button>
                </div>
              </div>
            ))
          }
          </div>
        </div>
      </Router>
    </div>
    
  );
}

export default App;
