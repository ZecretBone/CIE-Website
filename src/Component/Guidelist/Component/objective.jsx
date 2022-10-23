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
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Objective() {
  const [open, setOpen] = React.useState(false);
  
  const[mount,setMount] = React.useState(false)

//   const guide = [
//     {
//       id:0,
//       title:"Program Educational Objectives",
//       content:`     Engineering Quality
//       Our graduates will apply computer engineering practice, combined with innovative process, to identify and solve significant problems across a broad range of applications.
//       Innovation
//       Our graduates will adapt the process by which technological ideas are generated, developed and transformed into new business products, processes, services and/or solutions.
//       Leadership
//       Our graduates will apply their technical and innovative leadership to establish successful careers in their business, profession and community.
//       Economic Impact
//       Our graduates will apply their technical expertise, leadership and innovative mindset to support and strengthen the society’s economic well-being.
//       Lifelong Learning
//       Our graduates will learn new technologies, methodologies and tools and adapt them to respond to the challenges of a changing environment.`,
//       opening:false
//     },
//     {
//       id:1,
//       title:"Student Outcomes",
//       content:"jdakdasdnakdnaskjdnajkdnajkda",
//       opening:false
//     },
//     {
//       id:2,
//       title:"Possible Career",
//       content:"jdakdasdnakdnaskjdnajkdnajkda",
//       opening:false
//     },
//   ]

  const guide = [
    {
      id:0,
      title:"Program Educational Objectives",
      content:[
        {
        sub:'dasdasdasd654654',
        info:'dsasadsadsadasdasdsadsa1'
        },
        {
        sub:'dasdasdasd654',
        info:'dsasadsadsadasdasdsadsa2'
        },
        {
        sub:'dasdasdasd45654',
        info:'dsasadsadsadasdasdsadsa3'
        },

    ],
      opening:false
    },
    {
      id:1,
      title:"Student Outcomes",
      content:[
        {
        sub:'dasd asdasd654',
        info:'dsasadsads adasdasdsadsa4'
        },
        {
        sub:'dasdasdasd6547',
        info:'dsasads adsadasdasdsadsa5'
        },
        {
        sub:'dasdas dasd6456',
        info:'dsasadsadsadasdas dsadsa6'
        },

    ],
      opening:false
    },
    {
      id:2,
      title:"Possible Career",
      content:[
        {
        sub:'dasda sdasd123',
        info:'dsasadsa dsadasdasdsadsa7'
        },
        {
        sub:'dasdasd asd456',
        info:'dsasad sadsadasdasdsadsa8'
        },
        {
        sub:'dasdasdasd 758',
        info:'dsasa dsadsadas dasdsadsa9'
        },

    ],
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

    // <List>
    //     {allguide.map((each) => (
    //         <ListItem key={each} >
            
    //   <Accordion sx={{width:1000}}>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //     >
    //       <Typography >{each.title}</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //         <List>
    //             {each.content.map((itemx) => (
    //                 <ListItem  key={itemx}>
    //                     <Typography   variant="h6" sx={{maxWidth:1000}}>
    //         {itemx.sub}
    //       </Typography>
    //       <Typography  sx={{maxWidth:1000}}>
    //         {itemx.info}
    //       </Typography>
    //                 </ListItem>
    //             ))}
    //         </List>
          
    //     </AccordionDetails>
    //   </Accordion>


      
    //   </ListItem>

      
    
                
    //     ))}
    // </List>

    <Grid
    container
      
      alignItems="center"
      justifyContent="center "
    >
        <Stack spacing={1.5}> 
        <Typography>Objectives & Outcomes</Typography>
        
    <Accordion sx={{width:1000}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >Program Educational Objectives</Typography>
        </AccordionSummary>
        <AccordionDetails>
            
            <Typography variant='h6'  sx={{maxWidth:1000}}>
            Hello World
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
            nice to meet you
          </Typography>
          <Typography variant='h6'  sx={{maxWidth:1000}}>
            Hello World
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
            nice to meet you
          </Typography>
          <Typography variant='h6'  sx={{maxWidth:1000}}>
            Hello World
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
            nice to meet you
          </Typography>
          <Typography variant='h6'  sx={{maxWidth:1000}}>
            Hello World
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
            nice to meet you
          </Typography>
          
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{width:1000}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >Student Outcomes</Typography>
        </AccordionSummary>
        <AccordionDetails>
            
            <Typography   sx={{maxWidth:1000}}>
            Hello World
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
            nice to meet you
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
            nice to meet you
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
            nice to meet you
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
            nice to meet you
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
            nice to meet you
          </Typography>
          
        </AccordionDetails>
      </Accordion>


      <Accordion sx={{width:1000}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >Possible Career</Typography>
        </AccordionSummary>
        <AccordionDetails>
            
            <Typography   sx={{maxWidth:1000}}>
            Hello World
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
            nice to meet you
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
            nice to meet you
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
            nice to meet you
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
            nice to meet you
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
            nice to meet you
          </Typography>
          
        </AccordionDetails>
      </Accordion>
      <Typography></Typography>

      </Stack>

    </Grid>

    

  );
}
