import Loadable from "react-loadable";
import "./Hero.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Code Splitting
function Loading(props) {
  if (props.error) {
    return <div>Error! <button onClick={props.retry}>Retry</button></div>;
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
}

const Home = Loadable({
  loader: () => import("./Pages/Home"),
  loading: Loading,
  delay:300,
});

const Forum = Loadable({
  loader: () => import("./Pages/Forum"),
  loading: Loading,
  delay:300,
});

const Information = Loadable({
  loader: () => import("./Pages/Information"),
  loading: Loading,
  delay:300,
});

const Schemes = Loadable({
  loader: () => import("./Pages/Schemes"),
  loading: Loading,
  delay:300,
});

const About = Loadable({
  loader: () => import("./Pages/About"),
  loading: Loading,
  delay:300,
});

const Crops = Loadable({
  loader: () => import("./Pages/Crops/Crops"),
  loading: Loading,
  delay:300,
});

const Soils = Loadable({
  loader: () => import("./Pages/Soils/Soils"),
  loading: Loading,
  delay: 300,
});

const NotFound = Loadable({
  loader: () => import("./Pages/NotFound"),
  loading: Loading,
  delay: 300,
})

const Hero = () => {
  return (
    <div className="hero">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/forum" component={Forum} />
          <Route exact path="/info" component={Information} />
          <Route exact path="/schemes" component={Schemes} />
          <Route exact path="/about" component={About} />
          <Route exact path="/info/crops" component={Crops} />
          <Route exact path="/info/soils" component={Soils} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default Hero;
