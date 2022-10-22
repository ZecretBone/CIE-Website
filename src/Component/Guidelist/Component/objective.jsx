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
import ListItem from '@mui/material/ListItem';

export default function Objective() {
  const [open, setOpen] = React.useState(false);
  const [isopen, setExpand] = React.useState([true,false,false]);


  

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
  

  const startPage =()=>{
//     let i = 0;
//     let t = isopen;
//   while (i < guide.length){
    
//     t.push(false);
    
//     i += 1;
//   }
//   setExpand(t);
//setExpand([false,false,false])
  }
  
  startPage();

  const handleExpand =(event,pos)=>{
    let t = isopen;
    t[pos] = !t[pos];
    setExpand(t)
    console.log(isopen)
  }

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    // <List>
        
    //     <ListItemButton onClick={handleClick}>
    //     <ListItemIcon>
    //       <InboxIcon />
    //     </ListItemIcon>
    //     <ListItemText primary="Program Educational Objectives" />
    //     {open ? <ExpandLess /> : <ExpandMore />}
    //   </ListItemButton>
    //   <Collapse in={open} timeout="auto" unmountOnExit>
    //     <Typography component="div" disablePadding sx={{ pl: 4 }}>
    //       dsmdkadklamdkasmdkadmalda
    //     </Typography>

    //   </Collapse>


    //   <ListItemButton onClick={handleClick}>
    //     <ListItemIcon>
    //       <InboxIcon />
    //     </ListItemIcon>
    //     <ListItemText primary="Student Outcomes" />
    //     {open ? <ExpandLess /> : <ExpandMore />}
    //   </ListItemButton>
    //   <Collapse in={open} timeout="auto" unmountOnExit>
    //     <Typography component="div" disablePadding sx={{ pl: 4 }}>
    //       dsmdkadklamdkasmdkadmalda
    //     </Typography>

    //   </Collapse>
        
    // </List>

    <List>
        {guide.map((each) => (
            <ListItem key={each}>
             <ListItemButton onClick={(event) => handleExpand(event, each.id)}>
        
        <ListItemText primary={each.title} />
        {isopen[each.id] ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isopen[each.id]} timeout="auto" unmountOnExit>
        <Typography component="div" disablePadding sx={{ pl: 4 }}>
          dsmdkadklamdkasmdkadmalda
        </Typography>

      </Collapse>
      </ListItem>
    
                
        ))}
    </List>


  );
}
