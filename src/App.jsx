import React, {useContext} from "react";
import {useTransition, animated} from 'react-spring';
import {Switch, Route, __RouterContext} from 'react-router-dom';

//Components
import About from './components/About/About';
import Menu from "./components/Menu/Menu";
import Education from "./components/Education/education";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/contact";
import Projects from "./components/Projects/Projects";

//CSS
import "./App.css";



const App = () => {

  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate(100%, 0)"},
    enter: { opacity: 1, transform: "translate(0%, 0)" },
    leave: { opacity: 0, transform: "translate(-50%, 0)"},
  })

  return (
    <div className="App">
      {
        transitions.map(
          ({item,props,key}) => (
            <animated.div key={key} style={props}>
              <Switch location={item}>
                <Route exact path="/" component={Menu}/>            
                <Route exact path="/about" component={About}/>            
                <Route exact path="/education" component={Education}/>            
                <Route exact path="/skills" component={Skills}/>            
                <Route exact path="/projects" component={Projects}/>            
                <Route exact path="/links" component={Contact}/>            
              </Switch>
            </animated.div>
          )
        )
      }  
    </div>
    
  );
}

export default App;
