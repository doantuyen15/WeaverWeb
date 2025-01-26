/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import '../assets/styles/index.css';

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px bg-1">
        <div className="container mx-auto flex flex-wrap">
          <div className="flex w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="flex flex-col items-center pt-2 sm:pt-0 relative w-full">
              <img
                alt="..."
                src={require("assets/img/banner-head.png")}
                className="z-2 absolute lg:h-[50vh] md:h-[50vh] h-[30vh] lg:-top-10 md:-top-10 -top-[80px]"
              />
              <div className="banner-1 md:w-[35vw] w-[80vw] lg:top-[345px] md:top-[345px] top-[142px]"></div>
            </div>
          </div>
          <div className="flex w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-2 sm:pt-0 relative top-[100px] sm:top-0">
              {/* <div className="bg-2"></div> */}
              <img
                alt="..."
                src={require("assets/img/BG-2.png")}
                className="flex relative "
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-3 overflow-hidden min-h-max sm:h-[1168.6px] pb-4 flex justify-center flex-col">
        <div class="text-center py-10">
          <h1 class="font-extrabold text-4xl text-white">LỘ TRÌNH BAO GỒM 1 KHÓA HỌC</h1>
          <h1 class="text-3xl text-white">CHINH PHỤC TIẾNG ANH DÀNH CHO NGƯỜI MỚI BẮT ĐẦU</h1>
        </div>
        <div id="Projects"
          class="bg-3 w-fit mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-10 mt-10 mb-5">

          <div class="md:w-[25rem] max-h-max sm:w-[20rem] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <div class="px-4 py-3 md:w-[25rem] sm:w-[20rem]">
                <p class="text-lg font-bold text-black truncate block capitalize">PRONUNCIATION MASTER</p>
                <div class="flex items-center flex-col">
                  <p class="text-lg font-semibold text-black cursor-auto my-3">Khóa phát âm Tiếng Anh cơ bản</p>
                  <p class="text-lg font-semibold text-black cursor-auto my-3">Khóa phát âm Tiếng Anh cơ bản</p>
                  <p class="text-lg font-semibold text-black cursor-auto my-3">Khóa phát âm Tiếng Anh cơ bản</p>
                  <p class="text-lg font-semibold text-black cursor-auto my-3">Khóa phát âm Tiếng Anh cơ bản</p>
                </div>
              </div>
            </a>
          </div>

          <div class="md:w-[25rem] max-h-max sm:w-[20rem] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <div class="px-4 py-3 md:w-[25rem] sm:w-[20rem]">
                <p class="text-lg font-bold text-black truncate block capitalize">PRONUNCIATION MASTER</p>
                <div class="flex items-center flex-col">
                  <p class="text-lg font-semibold text-black cursor-auto my-3">Khóa phát âm Tiếng Anh cơ bản</p>
                  <p class="text-lg font-semibold text-black cursor-auto my-3">Khóa phát âm Tiếng Anh cơ bản</p>
                  <p class="text-lg font-semibold text-black cursor-auto my-3">Khóa phát âm Tiếng Anh cơ bản</p>
                  <p class="text-lg font-semibold text-black cursor-auto my-3">Khóa phát âm Tiếng Anh cơ bản</p>
                </div>
              </div>
            </a>
          </div>
          <div class="md:w-[25rem] max-h-max sm:w-[20rem] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <div class="px-4 py-3 md:w-[25rem] sm:w-[20rem]">
                <p class="text-lg font-bold text-black truncate block capitalize">PRONUNCIATION MASTER</p>
                <div class="flex items-center flex-col">
                  <p class="text-lg font-semibold text-black cursor-auto my-3">Khóa phát âm Tiếng Anh cơ bản</p>
                  <p class="text-lg font-semibold text-black cursor-auto my-3">Khóa phát âm Tiếng Anh cơ bản</p>
                  <p class="text-lg font-semibold text-black cursor-auto my-3">Khóa phát âm Tiếng Anh cơ bản</p>
                  <p class="text-lg font-semibold text-black cursor-auto my-3">Khóa phát âm Tiếng Anh cơ bản</p>
                </div>
              </div>
            </a>
          </div>
          <div class="md:w-[25rem] max-h-max sm:w-[20rem] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <div class="px-4 py-3 md:w-[25rem] sm:w-[20rem]">
                <p class="text-lg font-bold text-black truncate block capitalize">PRONUNCIATION MASTER</p>
                <div class="flex items-center flex-col">
                  <p class="text-lg font-semibold text-black cursor-auto my-3">Khóa phát âm Tiếng Anh cơ bản</p>
                  <p class="text-lg font-semibold text-black cursor-auto my-3">Khóa phát âm Tiếng Anh cơ bản</p>
                  <p class="text-lg font-semibold text-black cursor-auto my-3">Khóa phát âm Tiếng Anh cơ bản</p>
                  <p class="text-lg font-semibold text-black cursor-auto my-3">Khóa phát âm Tiếng Anh cơ bản</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* <section className="block relative z-1 bg-blueGray-600">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Login Page
                  </h5>
                  <Link to="/auth/login">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/login.jpg").default}
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Profile Page
                  </h5>
                  <Link to="/profile">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/profile.jpg").default}
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Landing Page
                  </h5>
                  <Link to="/landing">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/landing.jpg").default}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="overflow-hidden bg-4">
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-code-branch text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                Open Source
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                Since{" "}
                <a
                  href="https://tailwindcss.com/?ref=creativetim"
                  className="text-blueGray-300"
                  target="_blank"
                >
                  Tailwind CSS
                </a>{" "}
                is an open source project we wanted to continue this movement
                too. You can give this version a try to feel the design and also
                test the quality of the code!
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
                Get it free on Github and please help us spread the news with a
                Star!
              </p>
              <a
                href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
                target="_blank"
                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
              >
                Github Star
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              <i className="fab fa-github text-blueGray-700 absolute -top-150-px -right-100 left-auto opacity-80 text-55"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="font-semibold text-3xl">
                Do you love this Starter Kit?
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                Cause if you do, it can be yours now. Hit the buttons below to
                navigate to get the Free version for your next project. Build a
                new web app or give an old project a new look!
              </p>
              <div className="sm:block flex flex-col mt-10">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get started
                </a>
                <a
                  href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
                  target="_blank"
                  className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  <i className="fab fa-github text-lg mr-1"></i>
                  <span>Help With a Star</span>
                </a>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
