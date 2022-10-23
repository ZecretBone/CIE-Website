import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Program Guide', 'Course', 'About Us','Student Work','FAQ','Contact US'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const newpages = [
    {
        id:0,
        name:'Herllo',
        path:'/programguide'
    },
    {
        id:1,
        name:'Courses',
        path:'/courses'
    },
    {
        id:2,
        name:'About Us',
        path:'/about-us'
    },
    {
        id:3,
        name:'Student Work',
        path:'/student-work'
    },
    {
        id:4,
        name:'FAQS',
        path:'/faqs'
    },
    {
        id:5,
        name:'Contact Us',
        path:'/contact-us'
    },

]


const Top = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" 
    //sx={{mb:3.5}}
    >
      <Container  maxWidth="xl">
        <Toolbar disableGutters>
          <Button variant="success">fdsdfds</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Top;