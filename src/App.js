import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom"
import MainPage from "./Pages/homepage";
import WeatherPage from "./Pages/weatherpage";
import VideoPage from "./Pages/videopage";
import PestPage from "./Pages/pestpage";
import ErrorPage from './Pages/errorpage';
import Navbar from './Components/navigationbar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

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
              <Route exact path="/videopage" component={VideoPage} />
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
