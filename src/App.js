import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Pages/Search";
import Movies from "./components/Pages/Movies";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/search" element={<Search></Search>}></Route>
          <Route path="/movies" element={<Movies></Movies>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
