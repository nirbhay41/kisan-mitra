import React, { lazy, Suspense } from "react";
import "./Hero.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
// import Home from './Pages/Home';
// import Forum from "./Pages/Forum";
// import Information from "./Pages/Information";
// import Schemes from "./Pages/Schemes";
// import About from "./Pages/About";

//Code Splitting
const Home = lazy(() => import('./Pages/Home'));
const Forum = lazy(() => import('./Pages/Forum'));
const Information = lazy(() => import('./Pages/Information'));
const Schemes = lazy(() => import('./Pages/Schemes'));
const About = lazy(() => import('./Pages/About'));

const Hero = () => {
  return (
    <div className="hero">
      <Router>
        <Navbar backgroundStyle='bg-color' />
        <Switch>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Route exact path='/' component={Home} />
            <Route exact path='/forum' component={Forum} />
            <Route exact path='/info' component={Information} />
            <Route exact path='/schemes' component={Schemes} />
            <Route exact path='/about' component={About} />
          </Suspense>
        </Switch>
      </Router>
    </div>
  );
};

export default Hero;
