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
            Engineering Quality
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
          Our graduates will apply computer engineering practice, combined with innovative process, to identify and solve significant problems across a broad range of applications.
          </Typography>
          <Typography variant='h6'  sx={{maxWidth:1000}}>
          Innovation
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
          Our graduates will adapt the process by which technological ideas are generated, developed and transformed into new business products, processes, services and/or solutions.
          </Typography>
          <Typography variant='h6'  sx={{maxWidth:1000}}>
          Leadership
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
          Our graduates will apply their technical and innovative leadership to establish successful careers in their business, profession and community.
          </Typography>
          <Typography variant='h6'  sx={{maxWidth:1000}}>
          Economic Impact
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
          Our graduates will apply their technical expertise, leadership and innovative mindset to support and strengthen the society’s economic well-being.
          </Typography>
          <Typography variant='h6'  sx={{maxWidth:1000}}>
          Lifelong Learning
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
          Our graduates will learn new technologies, methodologies and tools and adapt them to respond to the challenges of a changing environment.
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
            The program has the following outcomes which adhere to ABET student outcomes for the engineering program.
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
          (a) an ability to apply knowledge of mathematics, science, and engineering
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
          (b) an ability to design and conduct experiments, as well as to analyze and interpret data
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
          (c) an ability to design an innovative system, component, or process to meet desired needs within realistic constraints such as economic, environmental, social, political, ethical, health and safety, manufacturability, and sustainability
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
          (d) an ability to function on multidisciplinary teams
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
          (e) an ability to identify, formulate, and solve engineering problems
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
          (f) an understanding of professional and ethical responsibility
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
          (g) an ability to communicate effectively
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
          (h) the broad education necessary to understand the impact of engineering solutions in a global, economic, environmental, and societal context
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
          (i) a recognition of the need for, and an ability to engage in life-long learning
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
          (j) a knowledge of contemporary issues
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
          (k) an ability to use the techniques, skills, and modern engineering tools necessary for engineering practice.
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
            After completing the program, the graduates can pursue any of the following careers:
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
          1. Innovation Engineer
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
          2. Startup Entrepreneurs
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
          3. Cloud Engineer
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
          4. Innovation Software Engineer
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
          5. IT Innovation & Developer
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
          6. Enterprise Data Engineer
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
          7. Innovation Application Developer
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
          8. Product Designer
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
          9. Embedded System Engineer
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
          10. Security Analyst
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
          11. Software Architect
          </Typography>
          <Typography  sx={{maxWidth:1000}}>
          12. Solution Engineer
          </Typography>
          
        </AccordionDetails>
      </Accordion>
      <Typography></Typography>

      </Stack>

    </Grid>

    

  );
}
