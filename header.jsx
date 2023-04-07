import React from 'react';
import {AppBar,Toolbar, Typography,Box} from '@material-ui/core';
import {createTheme,ThemeProvider} from '@material-ui/core'
import MenuIcon from '@mui/icons-material/Menu';
import Dropdown from 'react-bootstrap/Dropdown';
import { IconButton } from '@mui/material';

const theme = createTheme({
    typography:{
        fontFamily:[
            'Poppins',
        ].join(','),
    },
  });

function Header()
{
    return(
        <ThemeProvider theme={theme}>
        <div className='header'>
            <AppBar position='sticky' style={{backgroundColor:"#f0e0df",color:'black'}}>
                <Toolbar style={{display:'flex',justifyContent:"space-between"}}>
                    <img src="https://rb.gy/h4ej" alt=""></img>
                    <Typography variant='h4'>Bajaj Auto</Typography>
                    <Box>
                    <Dropdown>
                        <Dropdown.Toggle variant="" id="dropdown-basic">
                        <IconButton style={{color:'color'}}>
                            <MenuIcon />
                        </IconButton>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/about">About</Dropdown.Item>
                            <Dropdown.Item href="/pulsar">Pulsar</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Others</Dropdown.Item>
                            <Dropdown.Item href="/customerService">Customer Servive</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
        </ThemeProvider>

    );
}

export default Header;