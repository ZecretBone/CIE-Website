import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

export default function Committee() {
    const allcom = [
        {
            name:'Dr. Orathai Sangpetch',
            pic:'https://uploads-ssl.webflow.com/5fcda2e002c79b4f3d519a46/602108b4a145a672f3b91aee_sangpetch-orathai.png',
            content:'Asst. Professor'
        },
        {
            name:'Dr. Akkarit Sangpetch',
            pic:'https://uploads-ssl.webflow.com/5fcda2e002c79b4f3d519a46/6021088450f1913affedd970_sangpetch-akkarit.png',
            content:'Asst. Professor'
        },
        {
            name:'Dr. Panarat Cherntanomwong',
            pic:'https://uploads-ssl.webflow.com/5fcda2e002c79b4f3d519a46/60336e5826975a156a054885_ple.jpg',
            content:'Asst. Professor'
        },
        {
            name:'Dr. Sutheera Puntheeranurak',
            pic:'https://uploads-ssl.webflow.com/5fcda2e002c79b4f3d519a46/60336ec0a475645245cc37ef_unnamed%20(1).jpg',
            content:'Asst. Professor'
        },
        {
            name:'Dr. Chutimet Srinilta',
            pic:'https://uploads-ssl.webflow.com/5fcda2e002c79b4f3d519a46/60336e78ccc97512c5fc523a_timeline_20201115_215130.jpg',
            content:'Asst. Professor'
        },
    ]
  return (

    

    // <Card sx={{ maxWidth: 345 }}>
    //   <CardMedia
    //     component="img"
    //     height="200"
    //     image="https://upload.wikimedia.org/wikipedia/en/d/d5/Professor_%28Money_Heist%29.jpg"
    //     alt="green iguana"
    //   />
    //   <CardContent>
    //     <Typography gutterBottom variant="h5" component="div">
    //       Akkarit
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //       Professor
    //     </Typography>
    //   </CardContent>
      
    // </Card>

    <Grid
      container
      spacing={3}
      columns={{ xs: 6, sm:30, md:30 }}
      direction="row"
      alignItems="center"
      justifyContent="left "
      mt = "2rem"
      px = "15vw"
      
    >
      {allcom.map((each) => (
        <Grid  xs={6} >
          <Card sx={{ maxWidth: 200 }}>
      <CardMedia
        component="img"
        height="200"
        image={each.pic}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {each.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {each.content}
        </Typography>
      </CardContent>
      
    </Card>
        </Grid>
      ))}
    </Grid>




    
//         <List direction="row">
//         {allcom.map((each) =>(

// <ListItem direction="row"  key={each}>

// <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         height="200"
//         image={each.pic}
//         alt="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {each.name}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {each.content}
//         </Typography>
//       </CardContent>
      
//     </Card>
    

// </ListItem>

// ))}

//     </List>
        
    
    
    
  );
}