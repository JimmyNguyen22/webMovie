import "./App.scss";
import Contents from "./components/Content/Contents";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <Contents></Contents>
    </div>
  );
}

export default App;
