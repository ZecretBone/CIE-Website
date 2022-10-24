import { Typography, Card, CardMedia } from "@mui/material";
export default function Head() {
  return (
    <div>
      <Card>
        <CardMedia
          component="img"
          alt="head"
          image="/programguide/04programdetail.png"
          sx={{ mt: "1rem" }}
        />
      </Card>
      <Typography
        variant="h5"
        color="white"
        sx={{ backgroundColor: "#F3791D", px: "10vw", py: "1.5rem" }}
      >
        <strong>Transferred Credits and Placement Program</strong>
      </Typography>
      <Typography variant="subtitle2" sx={{ px: "10vw", mt: "2rem" }}>
        <Typography sx={{ mb: "0.5rem" }}>
          <strong>Transferred Credits</strong>
        </Typography>
        <Typography>
          Any course considered for transfer credit must be relevant to
          program’s objective. The decision to award transfer credit is
          determined by the program committee. Elective credit may be awarded
          for courses with no CIE equivalent if deemed relevant to the program.
          Courses are taken at regionally or internationally accredited
          institutions that are comparable to courses offered will be reviewed
          for course content and level by the program committee. Only those
          courses in which the transfer student received a grade of C or better
          will be evaluated for possible transfer credit. The program committee
          reserves the right to determine the eligibility of the transfer;
          including the contents of the transferred courses and a number of
          credits awarded, which could differ from the number of credits offered
          in the program. The program committee may appoint an appropriate
          faculty member to make decisions regarding transfer credit. Staff
          members make no transfer credit decisions.
        </Typography>
      </Typography>
      <Typography variant="subtitle2" sx={{ px: "10vw", mt: "2rem" }}>
        <Typography sx={{ mb: "0.5rem" }}>
          <strong>Placement Credits</strong>
        </Typography>
        <Typography sx={{ pb: "4rem" }}>
          New students are granted course credits for Advanced Placement (AP),
          International Baccalaureate (IB) or Cambridge International/Edexcel
          Advanced Level (A-level) credits dependent upon the score received.
          The policy and criteria for accepting these placement credits will be
          announced by the program committee prior to the student’s initial
          enrollment.The transfer and placement credits could be used to satisfy
          the program requirements for mathematical and science, general
          education, introductory and free elective courses.{" "}
          <Typography display="inline" sx={{ color: "#F3791D" }}>
            However, a student must complete courses at the institution for a
            minimum of four semesters, or at least 64 credits.
          </Typography>
        </Typography>
      </Typography>
      <Typography
        variant="h5"
        color="white"
        sx={{ backgroundColor: "#F3791D", px: "10vw", py: "1.5rem" }}
      >
        <strong>Transferred Credits and Placement Program</strong>
      </Typography>
      <Typography variant="subtitle2" sx={{ px: "10vw", mt: "2rem" }}>
        <Typography sx={{ mb: "0.5rem" }}>
          <strong>Program Structure</strong>
        </Typography>
        <Typography>
          Students must complete at least 128 credits to graduate with at least
          30 credits from general education courses; at least 92 credits from
          Computer Innovation Engineering concentration and at least 7 credits
          from free electives. Students must also complete the innovation
          internship requirement during their courses of study.
        </Typography>
      </Typography>
    </div>
  );
}
