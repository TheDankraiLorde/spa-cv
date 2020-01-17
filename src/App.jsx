import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header/header'
import data from './data/data_val'
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="jumbotron about">{data.about}</div>
      <Router>
        <Menu />
      </Router>
    </div>
    
  );
}

export default App;
