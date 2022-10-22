import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import StarBorder from '@mui/icons-material/StarBorder';

export default function Objective() {
  const [open, setOpen] = React.useState(false);
  const [isopen, setExpand] = React.useState([]);

  const guide = [
    {
      id:0,
      title:"Program Educational Objectives",
      content:"jdakdasdnakdnaskjdnajkdnajkda",
      opening:false
    },
    {
      id:1,
      title:"Student Outcomes",
      content:"jdakdasdnakdnaskjdnajkdnajkda",
      opening:false
    },
    {
      id:2,
      title:"Possible Career",
      content:"jdakdasdnakdnaskjdnajkdnajkda",
      opening:false
    },
  ]

  let i = 0;
  while (i < length(guide)){
    let t = isopen;
    t.push(false);
    setExpand(t);
    i += 1;

  }

  const handleExpand =(pos)=>{
    let t = isopen;
    t[pos] = !t[pos];
    setExpand(t)
  }

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List>
        
        <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Program Educational Objectives" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {/* <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List> */}
        <Typography component="div" disablePadding sx={{ pl: 4 }}>
          dsmdkadklamdkasmdkadmalda
        </Typography>

      </Collapse>


      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Student Outcomes" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Typography component="div" disablePadding sx={{ pl: 4 }}>
          dsmdkadklamdkasmdkadmalda
        </Typography>

      </Collapse>
        
    </List>
  );
}
