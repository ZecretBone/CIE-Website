import Committee from './Component/Committee'
import Typography from '@mui/material/Typography';

export default function Members(){
    return(
        <div>
        <div>
      <Typography
        variant="h5"
        alignItems="center"
        justifyContent="left"
        mt="2rem"
        px="10vw"
      >
        <strong>MEET OUR FACULTY</strong>
      </Typography>
    </div>
        <Committee>

        </Committee>
        </div>

    )
}