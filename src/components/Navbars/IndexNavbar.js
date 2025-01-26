/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-orange-500   shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-around">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <img
              alt="Weaver English"
              src={require("assets/img/WE-BLACK.png")}
              className="h-12 align-middle border-none"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center flex-col md:flex-row" onClick={() => setNavbarOpen(!navbarOpen)}>
                {/* <IndexDropdown /> */}
                <a
                  className="md:hover:text-blueGray-500 hover:cursor-pointer text-orange-500 md:text-white px-3 py-4 lg:py-2 flex items-center text-base uppercase font-extrabold"
                >
                  Lộ trình
                </a>
                <a
                  className="md:hover:text-blueGray-500 hover:cursor-pointer text-orange-500 md:text-white px-3 py-4 lg:py-2 flex items-center text-base uppercase font-extrabold"
                >
                  Ưu đãi
                </a>
                <a
                  className="md:hover:text-blueGray-500 hover:cursor-pointer text-orange-500 md:text-white px-3 py-4 lg:py-2 flex items-center text-base uppercase font-extrabold"
                >
                  Các khoá học
                </a>
                <a
                  className="md:hover:text-blueGray-500 hover:cursor-pointer text-orange-500 md:text-white px-3 py-4 lg:py-2 flex items-center text-base uppercase font-extrabold"
                >
                  Giảng viên
                </a>
              </li>
              {/* <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F"
                  target="_blank"
                >
                  <i className="text-blueGray-400 fab fa-facebook text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </a>
              </li> */}

              <li className="flex items-center">
                <button
                  className="bg-white text-orange-500 active:bg-lightBlue-600 text-xs font-extrabold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  Liên hệ ngay
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
