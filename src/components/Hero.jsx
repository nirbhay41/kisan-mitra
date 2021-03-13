import React from "react";
import Home from './Pages/Home';
import Forum from './Pages/Forum';
import Information from './Pages/Information';
import Schemes from './Pages/Schemes';
import About from './Pages/About';
import "./Hero.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const Hero = () => {
  return (
    <div className="hero">
      <Router>
        <Navbar backgroundStyle='bg-color' />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/forum' component={Forum} />
          <Route exact path='/info' component={Information} />
          <Route exact path='/schemes' component={Schemes} />
          <Route exact path='/about' component={About} />
        </Switch>
      </Router>
    </div>
  );
};

export default Hero;
