import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header/header'
import About from './components/About/About';
import Menu from "./components/Menu/Menu";
import Education from "./components/Education/education";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
          <Switch>
            <Route exact path="/" component={Menu}/>            
            <Route exact path="/About" component={About}/>            
            <Route exact path="/Education" component={Education}/>            
            <Route exact path="/Skills" component={Skills}/>            
            <Route exact path="/Contact" component={Contact}/>            
          </Switch>
      </Router>
    </div>
    
  );
}

export default App;
