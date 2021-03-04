import React from "react";
import Navbar from "./Navbar/Navbar";
import Home from './Pages/Home';
import Forum from './Pages/Forum';
import "./Hero.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/forum' component={Forum} />
        </Switch>
      </Router>
    </div>
  );
};

export default Hero;
