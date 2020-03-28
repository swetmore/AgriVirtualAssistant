import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function Navbar()
{
     
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
                    <Button color="inherited" component={Link} to="/">Home</Button>
                    <Button color="inherited" component={Link} to="/weatherpage">Check the Weather</Button>
                    <Button aria-controls="simple-menu" aria-haspopup="true" color="inherited" onClick={handleClick}>
                    Videos
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
                   
                    <Button color="inherited" component={Link} to="/pestpage">Search Pests</Button>
                </Toolbar>
            </AppBar>
        )
    }
