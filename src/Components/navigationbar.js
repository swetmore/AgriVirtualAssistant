import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
//MUI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
class Navbar extends Component {
    render() {
        return (
            <AppBar color='primary'>
                <Toolbar>
                    <Button color="inherited" component={Link} to="/">Home</Button>
                    <Button color="inherited" component={Link} to="/weatherpage">Check the Weather</Button>
                    <Button color="inherited" component={Link} to="/videopage">Watch Videos</Button>
                    <Button color="inherited" component={Link} to="/pestpage">Search Pests</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Navbar
