import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

export default function Committee() {

    
  const allcom = [
    {
      name: "Dr. Orathai Sangpetch",
      pic: "https://uploads-ssl.webflow.com/5fcda2e002c79b4f3d519a46/602108b4a145a672f3b91aee_sangpetch-orathai.png",
      content: "Asst. Professor",
    },
    {
      name: "Dr. Akkarit Sangpetch",
      pic: "https://uploads-ssl.webflow.com/5fcda2e002c79b4f3d519a46/6021088450f1913affedd970_sangpetch-akkarit.png",
      content: "Asst. Professor",
    },
    {
      name: "Dr. Panarat Cherntanomwong",
      pic: "https://uploads-ssl.webflow.com/5fcda2e002c79b4f3d519a46/60336e5826975a156a054885_ple.jpg",
      content: "Asst. Professor",
    },
    {
      name: "Dr. Sutheera Puntheeranurak",
      pic: "https://uploads-ssl.webflow.com/5fcda2e002c79b4f3d519a46/60336ec0a475645245cc37ef_unnamed%20(1).jpg",
      content: "Asst. Professor",
    },
    {
      name: "Dr. Chutimet Srinilta",
      pic: "committee/aj_pu copy.png",
    // pic:"./IMG_0302.png",
      content: "Asst. Professor",
    },
  ];
  return (
    <Grid
      container
      columns={{ xs: 6, sm: 12, md: 12 }}
      direction="row"
      alignItems="flex-start"
      justifyContent="left "
      mt="2rem"
      px="15vw"
      mb="4rem"
    >
      {allcom.map((each) => (
        <Grid item xs={4}>
          <Card
            elevation={0}
            sx={{
              maxWidth: "80%",
              Height: "100%"
            }}
          >
            <CardMedia
              component="img"
              height="250rem"
              image={each.pic}
              sx={{ objectFit: "contain", objectPosition:"left" }}
            />
            <CardContent sx={{p:"0", pt:"1rem"}}>
              <Typography gutterBottom variant="h6" component="div" sx={{fontFamily:'"Mukta", sans-serif',fontWeight:600,color:'#3C3C3C', fontSize:"1vw"}}>
                {each.name}
              </Typography>
              <Typography variant="subtitle2" color="#F3791D" sx={{fontFamily:'"Mukta", sans-serif',fontWeight:600, fontSize:"0.8vw"}}>
                <i>{each.content}</i>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
