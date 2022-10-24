
import { Typography } from '@mui/material';
import {Headbar,Contact,Footer} from '../../Component'


function Courses() {

  return (
    <div >
        <Headbar/>
        {/* <Typography sx={{mt:3.5}} variant="h3">Contact Us</Typography> */}
        <Contact></Contact>

        <Footer sx={{mt:20}}/>
      


        
      
    </div>
  );
}

export default Courses;