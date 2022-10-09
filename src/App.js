import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Pages/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/search" element={<Search></Search>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
