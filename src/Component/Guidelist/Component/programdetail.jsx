import React, { useState, useEffect } from 'react';
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
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Programdetail() {
  const [open, setOpen] = React.useState(false);
  
  const[mount,setMount] = React.useState(false)

  const guide = [
    {
      id:0,
      title:"Transferred Credits and Placement Program",
      content:`     Engineering Quality
      Our graduates will apply computer engineering practice, combined with innovative process, to identify and solve significant problems across a broad range of applications.
      Innovation
      Our graduates will adapt the process by which technological ideas are generated, developed and transformed into new business products, processes, services and/or solutions.
      Leadership
      Our graduates will apply their technical and innovative leadership to establish successful careers in their business, profession and community.
      Economic Impact
      Our graduates will apply their technical expertise, leadership and innovative mindset to support and strengthen the society’s economic well-being.
      Lifelong Learning
      Our graduates will learn new technologies, methodologies and tools and adapt them to respond to the challenges of a changing environment.`,
      opening:false
    },
    {
      id:1,
      title:"Program Structure",
      content:"jdakdasdnakdnaskjdnajkdnajkda",
      opening:false
    },

  ]
  const [allguide, setGuide] = React.useState(guide);
  
  useEffect(() => {
    console.log(mount);
  }, [mount])  // pass `value` as a dependency

  const handleExpand =(event,pos)=>{
    let t = allguide;
    t[pos].opening = !t[pos].opening;
    setGuide(t)
    setMount(!mount)
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
        {allguide.map((each) => (
            <ListItem key={each} >
                
                {/* <Stack alignItems="baseline">
             <ListItemButton   onClick={(event) => handleExpand(event, each.id)}>
        
        <ListItemText primary={each.title} />
        {each.opening ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={each.opening} timeout="auto" unmountOnExit sx={{ width:10 }}>
      
      
        
        <Typography component="div" disablePadding sx={{ pl: 4,maxWidth:500 }} paragraph>
          {each.content}
        </Typography>
        
        

      </Collapse>
      </Stack> */}
      <Accordion sx={{width:1000}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >{each.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{maxWidth:1000}}>
            {each.content}
          </Typography>
        </AccordionDetails>
      </Accordion>


      
      </ListItem>
    
                
        ))}
    </List>


  );
}
