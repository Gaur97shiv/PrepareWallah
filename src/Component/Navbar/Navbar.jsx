import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
const electionItems = ['Frontend-Developer', 'Backend-Developer', 'Devops', 'Data Scientist','Gen AI'];
function Navbar(props) {
  
  const navigate = useNavigate(); 
  const [electionAnchorEl, setElectionAnchorEl] = useState(null);
  const handleElectionClick = (event) => {
    setElectionAnchorEl(event.currentTarget);
  };
  const handleElectionClose = ( ) => {
    setElectionAnchorEl(null);
    
  };
  const handleClick = () => {
    navigate('/Signup'); 
  };
  const handleClick1 =() =>{
    navigate('/');
  }
  const handleSignOut=()=>{
    navigate("/SignOut")
  }
  const handlePractice=()=>{
          navigate("/Practice")
  }
  const handleNews=()=>{
    navigate("/News")
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' },"&:hover": { color: "black" },cursor: "pointer"}}
            onClick={handleClick1}
          >
            PrepareWell
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button sx={{ color: '#fff' }} onClick={handlePractice}>Practice</Button>
            <Button sx={{ color: '#fff' }} onClick={handleNews}> News</Button>
            <Button sx={{ color: '#fff' }}>Jobs </Button>
            <Button sx={{ color: '#fff' }} onClick={handleClick}> Sign-In</Button>
            <Button sx={{ backgroundColor:"red", color:"white" }} onClick={handleSignOut}>Sign-Out </Button>
            <Button
              onClick={handleElectionClick}
              sx={{ color: '#fff' }}
            >
              Roadmaps
            </Button>
            <Menu
              anchorEl={electionAnchorEl}
              open={Boolean(electionAnchorEl)}
              onClose={handleElectionClose}
            >
              {electionItems.map((item) => (
                <MenuItem key={item} onClick={handleElectionClose}>
                  {item}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
