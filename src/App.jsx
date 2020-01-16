import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Header from './components/header'
import data from './data/data_val'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <div className="body container">
            <div className="list text-cap">
              <ul className="list-group">
                {
                  Object.keys(data.skills).map(item => (
                    <li className="list-group-item">
                        <Link to="/">
                          {item}
                        </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="description">
                Hello I am right!
            </div>
        </div>
      </Router>
    </div>
    
  );
}

export default App;
