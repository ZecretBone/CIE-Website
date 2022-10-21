
import { Typography } from '@mui/material';
import {Headbar, Guidelist} from '../../Component'


function Progguide() {

  return (
    <div >
        <Headbar/>
        <Typography>Hello this is prog guide</Typography>
        <img
        src={`https://cdn-proxy.slickplan.com/imgs/artwork/sample-eventdriven-process-chain.svg`}
      />
      <Guidelist/>


        
      
    </div>
  );
}

export default Progguide;