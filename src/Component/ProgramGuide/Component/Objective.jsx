import { Typography, Grid, Card, CardMedia } from "@mui/material";
export default function Objective() {
  return (
    <div>
      <Card>
        <CardMedia
          component="img"
          alt="head"
          image="/programguide/03objective.png"
        />
      </Card>
      <Grid container direction="row" justify="center">
        <Grid
          item
          xs={6}
          display="flex"
          sx={{
            alignItems: "center",
            justifyContent: "left",
            backgroundColor: "#F3791D",
            pl: "10vw"
          }}
        >
          <Typography   variant="h3" sx={{ color:"#3C3C3C" }}><strong>Program Educational Objectives</strong></Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ backgroundColor: "#FF8F3A", py: "3rem", px: "4rem" }}
        >
          <Typography
            variant="subtitle1"
            display="flex"
            sx={{
              alignItems: "center",
              justifyContent: "left",
              color: "#3C3C3C",
              fontWeight:700
              ,fontFamily:'"Mukta", sans-serif'
            }}

            
          >
            
              <u>Engineering Quality</u>
            
          </Typography>
          <Typography
            variant="subtitle1"
            display="flex"
            color="white"
            sx={{ alignItems: "center", justifyContent: "left",fontWeight:500
            ,fontFamily:'"Mukta", sans-serif' }}
          >
            Our graduates will apply computer engineering practice, combined
            with innovative process, to identify and solve significant problems
            across a broad range of applications.
          </Typography>

          <Typography
            variant="subtitle1"
            display="flex"
            sx={{
              alignItems: "center",
              justifyContent: "left",
              color: "#3C3C3C",fontWeight:700
              ,fontFamily:'"Mukta", sans-serif'
            }}
          >
          
              <u>Innovation</u>
          
          </Typography>
          <Typography
            variant="subtitle1"
            display="flex"
            color="white"
            sx={{ alignItems: "center", justifyContent: "left" ,fontWeight:500
            ,fontFamily:'"Mukta", sans-serif'}}
          >
            Our graduates will adapt the process by which technological ideas
            are generated, developed and transformed into new business products,
            processes, services and/or solutions.
          </Typography>

          <Typography
            variant="subtitle1"
            display="flex"
            sx={{
              alignItems: "center",
              justifyContent: "left",
              color: "#3C3C3C",fontWeight:700
              ,fontFamily:'"Mukta", sans-serif'
            }}
          >
           
              <u>Leadership</u>
        
          </Typography>
          <Typography
            variant="subtitle1"
            display="flex"
            color="white"
            sx={{ alignItems: "center", justifyContent: "left",fontWeight:500
            ,fontFamily:'"Mukta", sans-serif' }}
          >
            Our graduates will apply their technical and innovative leadership
            to establish successful careers in their business, profession and
            community.
          </Typography>

          <Typography
            variant="subtitle1"
            display="flex"
            sx={{
              alignItems: "center",
              justifyContent: "left",
              color: "#3C3C3C",fontWeight:700
              ,fontFamily:'"Mukta", sans-serif'
            }}
          >
          
              <u>Economic Impact</u>
           
          </Typography>
          <Typography
            variant="subtitle1"
            display="flex"
            color="white"
            sx={{ alignItems: "center", justifyContent: "left" ,fontWeight:500
            ,fontFamily:'"Mukta", sans-serif'}}
          >
            Our graduates will apply their technical expertise, leadership and
            innovative mindset to support and strengthen the society’s economic
            well-being.
          </Typography>
          <Typography
            variant="subtitle1"
            display="flex"
            sx={{
              alignItems: "center",
              justifyContent: "left",
              color: "#3C3C3C",fontWeight:700
              ,fontFamily:'"Mukta", sans-serif'
            }}
          >
            
              <u>Lifelong Learning</u>
            
          </Typography>
          <Typography
            variant="subtitle1"
            display="flex"
            color="white"
            sx={{ alignItems: "center", justifyContent: "left" ,fontWeight:500
            ,fontFamily:'"Mukta", sans-serif'}}
          >
            Our graduates will learn new technologies, methodologies and tools
            and adapt them to respond to the challenges of a changing
            environment.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
