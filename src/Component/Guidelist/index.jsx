import Objective from "./Component/objective"
import Typography from '@mui/material/Typography';
import Programdetail from "./Component/programdetail";
import Button from '@mui/material/Button';

export default function Guidelist(){
    return(
        <div>
        <Typography>Objectives & Outcomes</Typography>
        <Objective>

        </Objective>
        <Typography>Program Details</Typography>
        <Programdetail>

        </Programdetail>
        
        </div>
       
    )
}