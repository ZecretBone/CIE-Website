import Cardlist from "./Component/Cardlist";
import { Typography } from "@mui/material";
import NewGallery from './Component/NewGallery'

export default function Gallery() {
  return (
    <div>
      <Typography
        variant="h2"
        alignItems="center"
        justifyContent="left"
        mt="2rem"
        px="15vw"
      >
        {/* <medium>CIE's Gallery</medium> */}
      </Typography>
      {/* <Cardlist></Cardlist> */}
      <NewGallery></NewGallery>
    </div>
  );
}
