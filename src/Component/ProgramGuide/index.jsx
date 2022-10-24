import Head from "./Component/Head";
import Objective from "./Component/Objective";
import StudentOutcome from "./Component/StudentOutcome";
import PossibleCareer from "./Component/PossibleCareer";
import ProgramDetails from "./Component/ProgramDetails";


export default function Progguide() {
  return (
    <div>
      <Head/>
      <Objective/>
      <StudentOutcome/>
      <PossibleCareer/>
      <ProgramDetails/>
    </div>
  );
}
