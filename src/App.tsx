import "./App.css";
import Advantages from "./components/Advantages/Advantages";
import FinalAction from "./components/FinalAction/FinalAction";
import Header from "./components/Head/Head";
import Intro from "./components/Intro/Intro";
import Monetize from "./components/Monetize/Monetize";
import Remark from "./components/Remark/Remark";

function App() {
  return (
    <>
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background md:px-6 bg-primary-100/20 dark:bg-primary-900/10">
      <Header></Header>
      </header>

      <Intro></Intro>
      <Remark></Remark>
      <Advantages></Advantages>
      <Monetize></Monetize>
      <FinalAction></FinalAction>
    </>
  );
}

export default App;
