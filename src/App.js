import React from "react";
import logo from "./logo.svg";
import "./App.css";
import data from "./data/data_val";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="jumbotron App-heading">
          <h1 className="name">{data.name}</h1>
          <h6 className="about">{data.about}</h6>
        </div>
      </div>
    </div>
  );
}

export default App;
