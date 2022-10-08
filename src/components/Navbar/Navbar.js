import React from "react";
import loGo from "../../assets/img/logo-full.png";
import { FiSearch } from "react-icons/fi";

export default function Navbar(props) {
  return (
    <div
      className="w-full h-20 sm:h-28 fixed top-0"
      style={{ transition: "all 1s ease-in" }}
    >
      <div className="navContainer bg-zinc-800 flex items-center flex-row justify-start h-full sm:flex-col	">
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
            style={{ transition: "width 0.5s" }}
            className="text-base outline-none border-2 p-2.5 opacity-0	bg-zinc-800 cursor-pointer	
            focus:pl-7 focus:w-80 focus:cursor-text	focus:opacity-100 focus:rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
