import React from "react";
import { Box } from "@mui/material";
import { BottomNavigation,BottomNavigationAction } from "@material-ui/core";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";

function Footer() {
    return (
      <Container maxWidth="xl" style={{backgroundColor:'#f0e0df'}}>
      <BottomNavigation style={{backgroundColor:'#f0e0df'}} >
      <BottomNavigationAction icon={<CallIcon />} />
      <BottomNavigationAction icon={<EmailIcon />}/>
      <BottomNavigationAction icon={<InstagramIcon />} />
      </BottomNavigation><br />
      <Box textAlign={"center"} >
      <Typography variant="caption">Pulsar. Definitely Male</Typography>
      </Box>
      </Container>
);
}

export default Footer;