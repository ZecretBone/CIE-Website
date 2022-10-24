import {Card, CardMedia, Typography, Box} from "@mui/material";

export default function Background(){
    return(
        <CardMedia component="img" image="contact/01homecontact.png" sx={{ position:"absolute", zIndex:-1 }}></CardMedia>
    );
}