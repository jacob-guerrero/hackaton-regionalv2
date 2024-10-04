import "./App.css";
import Advantages from "./components/Advantages/Advantages";
import FinalAction from "./components/FinalAction/FinalAction";
import Header from "./components/Head/Head";
import Intro from "./components/Intro/Intro";
import Login from "./components/Login/Login";
import Monetize from "./components/Monetize/Monetize";
import Remark from "./components/Remark/Remark";

function App() {
  return (
    <>
      <Header></Header>

      <Intro></Intro>
      <Remark></Remark>
      <Advantages></Advantages>
      <Monetize></Monetize>
      <FinalAction></FinalAction>
      <Login></Login>
    </>
  );
}

export default App;
