
import { Typography } from "@mui/material";
import Featurelist from './Component/Featurelist'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

export default function FeatureCourses() {
  return (
    <div>
        <Grid 
        container
      
        alignItems="center"
        justifyContent="center "
        >
            <Stack spacing={1}>
            <Typography sx={{mt:3.5,fontWeight:700}} variant="h5">FEATURED COURSES</Typography>
        <Typography variant="h7">Credit Notation: (L – E – S)</Typography>
        <Typography variant="h7">L = Lecture / Learning hours, R = Recitation hours, E = Laboratory hours, S = Self-study hours</Typography>
        <Featurelist>

</Featurelist>

            </Stack>
            

        </Grid>
      
      
   
    </div>
  );
}
