import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom"
import MainPage from "./Pages";
import WeatherPage from "./Pages/weatherpage";
import VideoPage from "./Pages/videopage";
import PestPage from "./Pages/pestpage";
import ErrorPage from './Pages/errorpage';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/weatherpage" component={WeatherPage} />
        <Route exact path="/videopage" component={VideoPage}/>
        <Route exact path="/pestpage" component={PestPage}/>
        <Route exact path="/errorpage" component={ErrorPage}/>
        
        <Redirect to="/errorpage"/>
        </Switch>
      </Router>
    );
  }
}

export default App;
