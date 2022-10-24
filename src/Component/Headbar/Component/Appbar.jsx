import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from '@mui/icons-material/Email';

import CIEicon from './CIE_logo.svg'
import CIEicon2 from './image2vector.svg'

const pages = [
  "Program Guide",
  "Course",
  "Gallery",
  "Student Work",
  "FAQ",
  "Contact US",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const newpages = [
  {
    id: 0,
    name: "Program Guide",
    path: "/programguide",
  },
  {
    id: 1,
    name: "Courses",
    path: "/courses",
  },
  {
    id: 2,
    name: "Gallery",
    path: "/gallery",
  },
  {
    id: 3,
    name: "Student Work",
    path: "/student-work",
  },
  {
    id: 4,
    name: "FAQS",
    path: "/faqs",
  },
  {
    id: 5,
    name: "Contact Us",
    path: "/contact-us",
  },
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    console.log('hi there')
    setAnchorElNav(null);
  };
  const testtab = () => {
    console.log('ghege')
    setAnchorElNav(null);
  };

  const smalltabber = (event,path) => {
    console.log('c')
    setAnchorElNav(null);
    window.location.href = path
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <AppBar elevation={7}  position="sticky" sx={{ backgroundColor:"white", color:"black"}}>
      <Typography
        display="flex"
        sx={{
          alignItems: "center",
          justifyContent: "right",
          px: "1rem",
          py: "0.5rem",
          backgroundColor:"#F3791D"
        }}
      >
        {/* <Link to="/">
          <Typography
            display="flex"
            sx={{ color: "white", textAlign: "center", backgroundImage:"none",pr:"1rem"}}
          >
            <CallIcon sx={{ px:"0.5rem" }}></CallIcon>
            +66 902920977
          </Typography>
        </Link> */}
        <a href= "tel:0902920977" target="_blank">
          <Typography
            display="flex"
            sx={{ color: "white", textAlign: "center", backgroundImage:"none",pr:"1rem"}}
          >
            <CallIcon sx={{ px:"0.5rem" }}></CallIcon>
            +66 902920977
          </Typography>
          </a>

        <a href= "mailto:cie@kmitl.ac.th" target="_blank">
          <Typography
            display="flex"
            sx={{ color: "white", textAlign: "center", backgroundImage:"none"}}
          >
            <EmailIcon  sx={{ px:"0.5rem" }}></EmailIcon>
            cie@kmitl.ac.th
          </Typography>
        </a>
      </Typography>
     
      <Menu
        id="menu-appbar"
        anchorEl={anchorElUser}
        sx={{ 
          color:"black"
         }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>

      <Container maxWidth="xl">
        <Toolbar sx={{ml:30}} disableGutters>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
            <img style={{maxWidth:40, maxHeight:40}}  src={CIEicon2} ></img>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ 
                display: { xs: "block", md: "none" },
              }}
            >
              {newpages.map((page) => (
                <MenuItem
                
                  key={page}
                  href={page.path}
                  onClick={(event)=>smalltabber(event,page.path)}
                >
                  <Typography   textAlign="center" sx={{ color:"black" }}>{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
            <img style={{maxWidth:40, maxHeight:40}}  src={CIEicon2} ></img>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {newpages.map((page) => (
              <Button
                key={page}
                onClick={(event)=>smalltabber(event,page.path)}
                //onClick={testtab}
                sx={{ mx: "1rem", color: "grey", display: "block" }}
                
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
