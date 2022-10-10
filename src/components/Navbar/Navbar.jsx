import React, { useState } from "react";
import loGo from "../../assets/img/logo-full.png";
import { FiSearch } from "react-icons/fi";
import "./navbar.scss";
import { useScrollY } from "../hooks/useScrollY";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar(props) {
  const [scrollY] = useScrollY();
  const [keywords, setKeywords] = useState("");
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    let keywords = e.target.value;
    setKeywords(keywords);
    keywords.length > 0
      ? navigate(`/search?keywords=${keywords.trim()}`)
      : navigate("/");
  };

  const goHome = () => {
    navigate("/");
    setKeywords("");
  };

  return (
    <div
      className="w-full h-20 sm:h-28 fixed z-10 top-0 navbar"
      style={
        scrollY < 360
          ? { backgroundColor: "transparent" }
          : { backgroundColor: " rgb(17, 17, 17)" }
      }
    >
      <div className="navContainer bg-transparent flex items-center w-full flex-row justify-start h-full pl-8 sm:flex-col	">
        <div className="logo md:w-45 cursor-pointer" onClick={goHome}>
          <img src={loGo} alt="logo" className="w-full" />
        </div>
        <div
          className="navSearch pr-5 flex justify-end "
          style={{ color: "var(--color-white)" }}
        >
          <FiSearch className="iconSearch cursor-pointer w-5 h-5 translate-x-6 translate-y-3 hover:text-white text-gray-300	"></FiSearch>
          <input
            type="text"
            placeholder="Search"
            className="text-base outline-none border-2 p-2.5 opacity-0	bg-zinc-800 cursor-pointer	
            focus:pl-7 focus:w-80 focus:cursor-text	focus:opacity-100 focus:rounded-md"
            onChange={handleChangeInput}
          />
        </div>
        <ul className="navList flex ml-9 ">
          <li className="navItem">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="navItem">
            <NavLink to="/movies">Movies</NavLink>
          </li>
          <li className="navItem">
            <NavLink to="/tvshow">TV Shows</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
