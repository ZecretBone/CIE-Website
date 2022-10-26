import { Typography, Card, CardMedia } from "@mui/material";
export default function Head() {
  return (
    <div>
      <Card>
        <CardMedia
          component="img"
          alt="head"
          image="/programguide/01head.png"
        />
      </Card>
      <Typography  sx={{ px:"10vw", py:"4rem",fontFamily:'"Mukta", sans-serif', color:'#3C3C3C',fontWeight:600, fontSize:"1vw"}}>
        The B.Eng. in Computer Innovation Engineering (CIE) program is a
        four-year full-time international undergraduate program. In order to
        graduate, the students must complete at least 128 credits and satisfy
        the graduation requirements given in the following section. The program
        is designed to drive innovations and entrepreneurship in computing and
        information technology-related areas. Each semester will include a
        project-based theme which helps students practice and design innovative
        solutions in the respective areas.
      </Typography>
      <Card sx={{ mx:"10vw", mb:"10rem" }}>
        <CardMedia
          component="img"
          alt="head"
          image="/programguide/02diagram.png"
        />
      </Card>

    </div>
  );
}
