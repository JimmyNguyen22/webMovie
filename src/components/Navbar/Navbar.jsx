import React from "react";
import loGo from "../../assets/img/logo-full.png";
import { FiSearch } from "react-icons/fi";
import "./navbar.scss";
import useScrollY from "../hooks/useScrollY";

export default function Navbar(props) {
  const [scrollY] = useScrollY();

  return (
    <div
      className="w-full h-20 sm:h-28 fixed z-10 top-0 navbar"
      style={
        scrollY < 500
          ? { backgroundColor: "transparent" }
          : { backgroundColor: " rgb(17, 17, 17)" }
      }
    >
      <div className="navContainer bg-transparent flex items-center w-full flex-row justify-start h-full pl-8 sm:flex-col	">
        <div className="logo w-32 cursor-pointer">
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
          />
        </div>
        <ul className="navList flex ml-9 ">
          <li className="navItem">
            <a href="#">Home</a>
          </li>
          <li className="navItem">
            <a href="#">Movies</a>
          </li>
          <li className="navItem">
            <a href="#">TV Shows</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
