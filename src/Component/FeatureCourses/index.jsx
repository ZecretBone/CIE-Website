
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
            <Stack spacing={3.5}>
            <Typography sx={{mt:3.5}} variant="h3">Featured Courses</Typography>
        <Typography variant="h5">Credit Notation: (L – E – S)</Typography>
        <Typography variant="h6">L = Lecture / Learning hours, R = Recitation hours, E = Laboratory hours, S = Self-study hours</Typography>
        <Featurelist>

</Featurelist>

            </Stack>
            

        </Grid>
      
      
   
    </div>
  );
}
