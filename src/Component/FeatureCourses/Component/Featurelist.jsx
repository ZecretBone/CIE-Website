import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {courses} from './allcourses.js'
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';



export default function Featurelist() {
    const allcourses = courses;
    console.log(allcourses)

  return (
    // <Card sx={{ maxWidth: 500 }}>
    //   <CardHeader
        
        
    //     title="Shrimp and Chorizo Paella"
    //     subheader="September 14, 2016"
    //   />
      
    //   <CardContent>
    //     <Typography variant="body2" color="text.secondary">
    //       This impressive paella is a perfect party dish and a fun meal to cook
    //       together with your guests. Add 1 cup of frozen peas along with the mussels,
    //       if you like.
    //     </Typography>
    //   </CardContent>
      
      
    // </Card>

    <List>
        {allcourses.map((each) =>(

            <ListItem  key={each}>
                <Card  sx={{ maxWidth: 1000 }}>
      <CardHeader


        
        sx={{fontWeight:800}}
        title={each.id +' '+each.name}
        subheader={'Credits: '+each.credits}
      />
      
      <CardContent>
        <Typography sx={{fontWeight:600}} variant="body2" 
        // color="text.secondary"
        >
          {each.description}
        </Typography>
      </CardContent>
      
      
      
    </Card>
            
            </ListItem>

        ))}
    </List>

  );
}