
import { Typography } from '@mui/material';
import {Headbar, Guidelist} from '../../Component'


function Progguide() {

  return (
    <div >
        <Headbar/>
        <Typography>The B.Eng. in Computer Innovation Engineering (CIE) program is a four-year full-time international undergraduate program. In order to graduate, the students must complete at least 128 credits and satisfy the graduation requirements given in the following section. The program is designed to drive innovations and entrepreneurship in computing and information technology-related areas. Each semester will include a project-based theme which helps students practice and design innovative solutions in the respective areas.</Typography>
        <img
        src={`https://cdn-proxy.slickplan.com/imgs/artwork/sample-eventdriven-process-chain.svg`}
      />
      <Guidelist/>


        
      
    </div>
  );
}

export default Progguide;