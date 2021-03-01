import React from "react";
import Navbar from "./Navbar/Navbar";
import Home from './Pages/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Hero = ({handleLogout}) => {
  return (
    <div className="hero">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </Router>
      <h1>Logout</h1>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};

export default Hero;
