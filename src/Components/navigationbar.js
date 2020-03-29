import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Flower from './flower.png';
export default function Navbar() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (

        <AppBar color='primary'>

            <Toolbar>
                {<img src={Flower} width="30" height="50" />}
                <Button color="inherit" component={Link} to="/"><Typography variant="h6" color="inherit">
                    Home </Typography></Button>
                <Button color="inherit" component={Link} to="/weatherpage"><Typography variant="h6" color="inherit">
                    Check the Weather</Typography></Button>
                <Button aria-controls="simple-menu" aria-haspopup="true" color="inherited" onClick={handleClick}>
                    <Typography variant="h6" color="inherit">
                        Videos</Typography>
                </Button>

                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose} color="inherited" component={Link} to="/videopage1">Preservation</MenuItem>
                    <MenuItem onClick={handleClose} color="inherited" component={Link} to="/videopage2" >Productivity</MenuItem>
                    <MenuItem onClick={handleClose} color="inherited" component={Link} to="/videopage3">AG Technique</MenuItem>
                </Menu>

                <Button color="inherit" component={Link} to="/pestpage"><Typography variant="h6" color="inherit">
                    Search Pests</Typography></Button>
                <Button color="inherit" component={Link} to="/photopage"><Typography variant="h6" color="inherit">
                    Pest Photos</Typography></Button>
            </Toolbar>
        </AppBar>
    )
}
