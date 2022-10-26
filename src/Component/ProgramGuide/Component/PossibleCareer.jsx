import { Typography, Grid } from "@mui/material";
export default function PossibleCareer() {
  return (
    <div>
      <Grid container direction="row" justify="center" sx={{ mt: "1rem" }}>
        <Grid
          item
          xs={6}
          display="flex"
          sx={{
            alignItems: "center",
            justifyContent: "left",
            backgroundColor: "#F3791D",
            pl: "10vw",
          }}
        >
          <Typography variant="h3" sx={{ color: "#3C3C3C", fontSize:"2vw"}}>
            <strong>Possible Career</strong>
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ backgroundColor: "#FF8F3A", py: "6rem", px: "4rem" }}
        >
          <Typography
            variant="subtitle1"
            color="white"
            sx={{ alignItems: "center", justifyContent: "left" ,fontWeight:500
            ,fontFamily:'"Mukta", sans-serif', fontSize:"1.25vw"}}
          >
            After completing the program, the graduates can pursue any of the
            following careers:
            <div>1. Innovation Engineer</div>
            <div>2. Startup Entrepreneurs</div>
            <div>3. Cloud Engineer</div>
            <div>4. Innovation Software Engineer</div>
            <div>5. IT Innovation & Developer</div>
            <div>6. Enterprise Data Engineer</div>
            <div>7. Innovation Application Developer</div>
            <div>8. Product Designer</div>
            <div>9. Embedded System Engineer</div>
            <div>10. Security Analyst</div>
            <div>11. Software Architect</div>
            <div>12. Solution Engineer</div>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
