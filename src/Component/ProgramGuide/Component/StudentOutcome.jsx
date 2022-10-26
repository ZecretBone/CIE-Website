import { Typography } from "@mui/material";
export default function StudentOutcome() {
  return (
    <Typography
      sx={{ backgroundColor: "#FFB03F", mt: "1rem", py: "6rem", px: "10vw" }}
    >
      <Typography variant="h3" sx={{ color: "#3C3C3C", pb:"3rem" ,fontWeight:700
              ,fontFamily:'"Mukta", sans-serif', fontSize:"2vw"}}>
        <strong>Student Outcomes</strong>
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#3C3C3C",fontWeight:600
              ,fontFamily:'"Mukta", sans-serif', fontSize:"1vw" }}>
        <div>
          The program has the following outcomes which adhere to ABET student
          outcomes for the engineering program.
        </div>
        <div>
          (a) an ability to apply knowledge of mathematics, science, and
          engineering{" "}
        </div>
        <div>
          (b) an ability to design and conduct experiments, as well as to
          analyze and interpret data{" "}
        </div>
        <div>
          (c) an ability to design an innovative system, component, or process
          to meet desired needs within realistic constraints such as economic,
          environmental, social, political, ethical, health and safety,
          manufacturability, and sustainability{" "}
        </div>
        <div>(d) an ability to function on multidisciplinary teams </div>
        <div>
          (e) an ability to identify, formulate, and solve engineering problems
        </div>{" "}
        <div>
          (f) an understanding of professional and ethical responsibility
        </div>{" "}
        <div>(g) an ability to communicate effectively</div>{" "}
        <div>
          (h) the broad education necessary to understand the impact of
          engineering solutions in a global, economic, environmental, and
          societal context
        </div>
        <div>
          (i) a recognition of the need for, and an ability to engage in
          life-long learning
        </div>{" "}
        <div>(j) a knowledge of contemporary issues</div>
        <div>
          (k) an ability to use the techniques, skills, and modern engineering
          tools necessary for engineering practice.
        </div>
      </Typography>
    </Typography>
  );
}
