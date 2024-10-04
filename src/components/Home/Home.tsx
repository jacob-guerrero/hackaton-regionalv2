import Advantages from "../Advantages/Advantages";
import FinalAction from "../FinalAction/FinalAction";
import Intro from "../Intro/Intro";
import Monetize from "../Monetize/Monetize";
import Remark from "../Remark/Remark";

function Home() {
  return (
    <>
      <Intro></Intro>
      <Remark></Remark>
      <Advantages></Advantages>
      <Monetize></Monetize>
      <FinalAction></FinalAction>
    </>
  );
}

export default Home;
