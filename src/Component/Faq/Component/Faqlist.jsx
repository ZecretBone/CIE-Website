import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiGrid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import faqbanner from "./01headfaq.png";
import Box from "@mui/material/Box";

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

export default function Faqlist() {
  const content = (
    <div>
      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.`}
    </div>
  );

  const allfaqs = [
    {
      id: 0,
      q: "dasdHow can I apply for CIE?",
      a: "Unfortunately, our facalty does not available to apply for now. ",
    },
    {
      id: 1,
      q: "What is the difference between Computer Innovation Engineering and Computer Engineering?",
      a: "Computer Engineering (CE) is the roots of programming, so the program will focus more on computer languages, circuits and components of computers. However, Computer Innovation Engineering (CIE) studies both software and hardware, and all the courses are taught in english. CIE will not learn as deep as CE in terms of programming languages, since CIE will be based on implementing programming languages to adapt to innovative projects.",
    },
    {
      id: 2,
      q: "How will programming be useful in the future?",
      a: "Nowadays, the world is based on technology. This means that innovation and programming languages are very important to develop future innovative products, such as robots, automation machines, self-driving cars, and so on.",
    },
    {
      id: 3,
      q: "I want to be fluent in coding in a short period of time, how do I achieve that?",
      a: "Pay attention in class, try to do all the assignments and homework to understand coding better. If you really want to be fluent in programming languages, it is a good idea to practice the programming languages frequently.",
    },
    {
      id: 4,
      q: "How is the learning environment in KMITL?",
      a: "Studying at KMITL teaches you how to be responsive, because KMITL is based on practical studies. Other than that, there are many clubs and activities that students in KMITL can participate, such as basketball club, musical club, photography club, electronic club and so on. The study environment in KMITL is pretty interesting, because there are many facilities, such as fitness, football field, basketball court, badminton court, canteen, affordable food price for students, library, places where you can work quietly, and so on",
    },
  ];

  const tocontact = () => {
    window.location.href = "/contact-us";
  };

  return (
    <Box>
      <img style={{ maxHeight: "50%", maxWidth: "100%" }} src={faqbanner}></img>
      <Grid
        container
        alignItems="center"
        justifyContent="center "
        sx={{ pl: "10vw", pr: "10vw" }}
      >
        <Stack>
          {/* <Typography sx={{mt:3.5}} variant="h3">FREQUENTLY ASKED QUESTIONS</Typography> */}

          <Card elevation={0} sx={{ minWidth: 275 }}>
            <CardContent>
              <Grid container>
                <Grid item xs={4}>
                  <Typography variant="subtitle1" sx={{ fontWeight:400}}>
                    How can I apply for CIE?
                  </Typography>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs>
                  <Typography variant="p" sx={{ fontWeight:400}}>
                    Unfortunately, our faculty does not available to apply for
                    now.
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Divider variant="middle" />

          <Card elevation={0} sx={{ minWidth: 275 }}>
            <CardContent>
              <Grid container direction="row">
                <Grid item xs={4}>
                  <Typography variant="subtitle1" sx={{ fontWeight:400}}>
                    What is the difference between Computer Innovation
                    Engineering and Computer Engineering?
                  </Typography>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs>
                  <Typography variant="p">
                    Computer Engineering (CE) is the roots of programming, so
                    the program will focus more on computer languages, circuits
                    and components of computers. However, Computer Innovation
                    Engineering (CIE) studies both software and hardware, and
                    all the courses are taught in english. CIE will not learn as
                    deep as CE in terms of programming languages, since CIE will
                    be based on implementing programming languages to adapt to
                    innovative projects.
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Divider variant="middle" />

          <Card elevation={0} sx={{ minWidth: 275 }}>
            <CardContent>
              <Grid container direction="row">
                <Grid item xs={4}>
                  <Typography variant="subtitle1" sx={{ fontWeight:400}}>
                    How will programming be useful in the future?
                  </Typography>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs>
                  <Typography variant="p" sx={{ fontWeight:400}}>
                    Nowadays, the world is based on technology. This means that
                    innovation and programming languages are very important to
                    develop future innovative products, such as robots,
                    automation machines, self-driving cars, and so on.
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Divider variant="middle" />

          <Card elevation={0} sx={{ minWidth: 275 }}>
            <CardContent>
              <Grid container direction="row">
                <Grid item xs={4}>
                  <Typography variant="subtitle1" sx={{ fontWeight:400}}>
                  I want to be fluent in coding in a short period of time, how
                  do I achieve that?</Typography>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs>
                  <Typography variant="p" sx={{ fontWeight:400}}>
                  Pay attention in class, try to do all the assignments and
                  homework to understand coding better. If you really want to be
                  fluent in programming languages, it is a good idea to practice
                  the programming languages frequently.</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Divider variant="middle" />

          <Card elevation={0} sx={{ minWidth: 275 }}>
            <CardContent>
              <Grid container direction="row">
                <Grid item xs={4}>
                  <Typography variant="subtitle1" sx={{ fontWeight:400}}>How is the learning environment in KMITL?</Typography>
                </Grid>
                <Grid xs={1}></Grid>
                <Grid item xs>
                  <Typography variant="p" sx={{ fontWeight:400}}>
                  Studying at KMITL teaches you how to be responsive, because
                  KMITL is based on practical studies. Other than that, there
                  are many clubs and activities that students in KMITL can
                  participate, such as basketball club, musical club,
                  photography club, electronic club and so on. The study
                  environment in KMITL is pretty interesting, because there are
                  many facilities, such as fitness, football field, basketball
                  court, badminton court, canteen, affordable food price for
                  students, library, places where you can work quietly, and so
                  on</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Typography variant="subtitle1" sx={{ pb:"2rem", fontWeight:400 }}>
            Can't find what you are looking for?
            <Button onClick={tocontact}>Contact Us</Button>
          </Typography>
        </Stack>
      </Grid>
    </Box>

    // <Grid container>
    //   <Grid item xs>
    //     {content}
    //   </Grid>
    //   <Divider
    //   orientation="vertical"
    //   flexItem>
    //     VERTICAL
    //   </Divider>
    //   <Grid item xs>
    //     {content}
    //   </Grid>
    // </Grid>

    //  <List>
    //   {allfaqs.map((each) =>(
    //     <ListItem>
    //       <Card elevation={0} sx={{ minWidth: 275 }}>
    //       <CardContent>
    //       <Grid container>
    //       <Grid item xs>
    //         {each.q}
    //       </Grid>
    //       <Divider
    //       orientation="vertical"
    //       flexItem>

    //       </Divider>
    //       <Grid item xs>
    //         {each.a}
    //       </Grid>
    //     </Grid>
    //       </CardContent>

    //     </Card>

    //     </ListItem>

    //   ))}

    // </List>
  );
}
