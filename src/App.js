import "./App.scss";
import Content from "./components/Content/Content";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <Content></Content>
    </div>
  );
}

export default App;
