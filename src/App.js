import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom"
import MainPage from "./Pages/homepage";
import WeatherPage from "./Pages/weatherpage";
import PestPage from "./Pages/pestpage";
import ErrorPage from './Pages/errorpage';
import Navbar from './Components/navigationbar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import VideoPage1 from './Pages/videopage1'
import VideoPage2 from './Pages/videopage2'
import VideoPage3 from './Pages/videopage3'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#7cb342',
    },
    secondary: {
      main: '#ffeb3b',
    },
  },
})

class App extends React.Component {

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/weatherpage" component={WeatherPage} />
              <Route exact path="/videopage1" component={VideoPage1} />
              <Route exact path="/videopage2" component={VideoPage2} />
              <Route exact path="/videopage3" component={VideoPage3} />
              <Route exact path="/pestpage" component={PestPage} />
              <Route exact path="/errorpage" component={ErrorPage} />
              <Redirect to="/errorpage" />
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
