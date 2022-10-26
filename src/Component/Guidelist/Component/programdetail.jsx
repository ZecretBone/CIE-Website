import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';

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
    <Grid
      container
      alignItems="center"
      justifyContent="center "
    >
       <Stack spacing={1.5}>
       <Typography>Program Details</Typography>
  <Accordion sx={{width:1000}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >Transferred Credits and Placement Program</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{maxWidth:1000}}>
          Transferred Credits
          </Typography>
          <Typography sx={{maxWidth:1000}}>
          Any course considered for transfer credit must be relevant to program’s objective. The decision to award transfer credit is determined by the program committee. Elective credit may be awarded for courses with no CIE equivalent if deemed relevant to the program. Courses are taken at regionally or internationally accredited institutions that are comparable to courses offered will be reviewed for course content and level by the program committee. Only those courses in which the transfer student received a grade of C or better will be evaluated for possible transfer credit.
          </Typography>
          <Typography sx={{maxWidth:1000}}>
          The program committee reserves the right to determine the eligibility of the transfer; including the contents of the transferred courses and a number of credits awarded, which could differ from the number of credits offered in the program. The program committee may appoint an appropriate faculty member to make decisions regarding transfer credit. Staff members make no transfer credit decisions.
          </Typography>
          <Typography sx={{maxWidth:1000}}>
          Placement Credits
          </Typography>
          <Typography sx={{maxWidth:1000}}>
          New students are granted course credits for Advanced Placement (AP), International Baccalaureate (IB) or Cambridge International/Edexcel Advanced Level (A-level) credits dependent upon the score received. The policy and criteria for accepting these placement credits will be announced by the program committee prior to the student’s initial enrollment.The transfer and placement credits could be used to satisfy the program requirements for mathematical and science, general education, introductory and free elective courses. However, a student must complete courses at the institution for a minimum of four semesters, or at least 64 credits.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{width:1000}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >Program Structure</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{maxWidth:1000}}>
            14556
          </Typography>
          <Typography sx={{maxWidth:1000}}>
            14556
          </Typography>
          <Typography sx={{maxWidth:1000}}>
            14556
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
    </Grid>

   


  );
}
