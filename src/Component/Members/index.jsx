import Committee from "./Component/Committee";
import { Typography, Card, CardMedia } from "@mui/material";

export default function Members() {
  return (
    <div>
      <Card sx={{ maxWidth: "100%", pt:"10rem" }}>
        <CardMedia
          component="img"
          alt="CIEBanner"
          image="/homepage/04belowaboutus.png"
        />
      </Card>

      <div>
        <Typography
          variant="h5"
          alignItems="center"
          justifyContent="left"
          mt="2rem"
          px="10vw"
          sx={{fontWeight:700}}
        >
          MEET OUR FACULTY
        </Typography>
      </div>
      <Committee></Committee>
    </div>
  );
}
