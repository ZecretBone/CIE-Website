
import { Typography } from '@mui/material';
import {Headbar,FeatureCourses} from '../../Component'


function Courses() {

  return (
    <div >
        <Headbar/>
        <Typography variant="h3">Featured Courses</Typography>
        <Typography variant="h5">Credit Notation: (L – E – S)</Typography>
        <Typography variant="h6">L = Lecture / Learning hours, R = Recitation hours, E = Laboratory hours, S = Self-study hours</Typography>
        <FeatureCourses></FeatureCourses>

        
      


        
      
    </div>
  );
}

export default Courses;