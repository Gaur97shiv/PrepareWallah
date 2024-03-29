import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of Navigate

const electionItems = ['Frontend-Developer', 'Backend-Developer', 'Devops', 'Data Scientist','Gen AI'];

function Navbar(props) {
  const navigate = useNavigate(); // Use useNavigate hook here
  const [electionAnchorEl, setElectionAnchorEl] = useState(null);

  const handleElectionClick = (event) => {
    setElectionAnchorEl(event.currentTarget);
  };

  const handleElectionClose = () => {
    setElectionAnchorEl(null);
  };

  const handleClick = () => {
    navigate('/Signup'); 
  };
  const handleClick1 =() =>{
    navigate('/');
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
            Prepare Wallah
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button sx={{ color: '#fff' }} > News</Button>
            <Button sx={{ color: '#fff' }}>Jobs </Button>
            <Button sx={{ color: '#fff' }} onClick={handleClick}> Log-In</Button>
            <Button
              onClick={handleElectionClick}
              sx={{ color: '#fff' }}
            >
              Tech-Roles
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
