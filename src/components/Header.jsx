import React, { useContext} from "react";
import { Link } from "react-router-dom";

import { myContextApi } from "../ContextApi";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Header = () => {
  const {
    toggleNavlinks,
    showNavlinks,
    hoverLinks,
    toggleAboutTrue,
    toggleExhibitTrue,
    toggleRegTrue,
    toggleActTrue,
    toggleLinksFalse,
  } = useContext(myContextApi);
  return (
    <div className="top-0 z-50 fixed w-full">
      <div className="flex justify-between shadow-md md:flex md:items-center  md:justify-between md:w-full md:z-20 md:px-5 bg-slate-100">
        <figure
          className={`${
            showNavlinks ? "hidden" : "flex"
          } md:flex md:flex-col items-center md:w-[20%] w-full gap-5 md:gap-1 md:h-100px m-5 md:mr-5 md:mt-2 md:ml-2 relative`}
        >
          <img
            src="favicon.png"
            alt="AMWE Official Logo"
            className="w-[30%] md:w-[50%] md:h-full shadow-lg"
          />
          <figcaption
            className="w-[250px]  h-11 p-1 md:h-auto md:text-sm md:font-normal md:p-1  md:block md:outline md:outline-offset-2 text-[10px] text-center leading-tight mt-1 bg-red-500 text-gray-200 rounded overflow-hidden"
            data-aos="flip-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            All Africa Medical & Wellness Expo <hr />{" "}
            <i className="text-[8px] md:text-[10px]">
              Where the world decides the future of healthcare
            </i>
          </figcaption>
        </figure>

        <div className="w-full md:w-[70%] relative">
          {!showNavlinks && (
            <figure className="md:hidden relative float-right mr-5 mt-12  ">
              <GiHamburgerMenu
                className="text-[#0F2F63] text-2xl md:hidden border shadow-lg rounded scale-150"
                onClick={toggleNavlinks}
              />
            </figure>
          )}
          <nav
            className={`${
              showNavlinks ? "flex" : "hidden"
            } z-50 justify-between py-3 px-8 md:px-2 h-screen md:w-full md:h-12 md:rounded bg-[#0F2F63] md:flex absolute animate__animated
            animate__slideInRight
            animate__fadeIn`}
            onMouseLeave={toggleLinksFalse}
          >
            <div className="flex md:flex-row flex-col md:gap-5 gap-5  md:w-full w-[330px] mt-5 md:mt-0">
              <div
                className="md:w-1/5 w-[80%] pb-1 md:pb-0 text-gray-200 md:text-center border-b border-red-500 md:border-none"
                onMouseEnter={toggleLinksFalse}
              >
                <Link to="/" onClick={toggleNavlinks}>
                  Home
                </Link>
              </div>
              <div
                className="md:w-1/5 w-[80%] pb-1 md:pb-0 text-gray-200 md:text-center border-b border-red-500 md:border-none flex md:block"
                onMouseEnter={toggleAboutTrue}
              >
                <button>About</button>
                {hoverLinks.hoverAbout && (
                  <div
                    className="flex flex-col bg-gray-200 absolute p-2 mt-2 rounded-b text-gray-800 ml-20 md:-ml-3"
                    data-aos="fade-down"
                  >
                    <Link
                      to="aboutUs"
                      className="hover:border-b-2 transition-all duration-300 border-red-500 md:border-b-0 border-b pb-1"
                      onClick={toggleNavlinks}
                    >
                      About Us
                    </Link>
                    <Link
                      to="welcomeMessage"
                      className="hover:border-b-2 transition-all duration-300 py-1 border-red-500  md:border-b-0 border-b pb-1"
                      onClick={toggleNavlinks}
                    >
                      Welcome Message
                    </Link>
                    <Link
                      to="#"
                      className="hover:border-b-2 transition-all duration-300 py-1 border-red-500  md:border-b-0 border-b pb-1"
                      onClick={toggleNavlinks}
                    >
                      Our Team
                    </Link>
                    <Link
                      to="#"
                      className="hover:border-b-2 transition-all duration-300 py-1 border-red-500  md:border-b-0 border-b pb-1"
                      onClick={toggleNavlinks}
                    >
                      Our Representative
                    </Link>
                    <Link
                      to="#"
                      className="hover:border-b-2 transition-all duration-300 py-1 border-red-500"
                      onClick={toggleNavlinks}
                    >
                      Our Contact
                    </Link>
                  </div>
                )}
              </div>
              <div
                className="md:w-1/5 w-[80%] pb-1 md:pb-0 text-gray-200 md:text-center border-b border-red-500 md:border-none flex md:block"
                onMouseEnter={toggleActTrue}
              >
                <button>Activities</button>
                {hoverLinks.hoverAct && (
                  <div
                    className="flex flex-col bg-gray-200 absolute mt-2 p-2 rounded-b text-gray-800 md:w-1/5 ml-20 md:-ml-3"
                    data-aos="fade-down"
                  >
                    <Link
                      to="#"
                      className="hover:border-b-2 transition-all duration-300 py-1 border-red-500  md:border-b-0 border-b pb-1"
                      onClick={toggleNavlinks}
                    >
                      Conference
                    </Link>
                    <Link
                      to="#"
                      className="hover:border-b-2 transition-all duration-300 py-1 border-red-500  md:border-b-0 border-b pb-1"
                      onClick={toggleNavlinks}
                    >
                      Awards
                    </Link>
                    <Link
                      to="#"
                      className="hover:border-b-2 transition-all duration-300 py-1 border-red-500  md:border-b-0 border-b pb-1"
                      onClick={toggleNavlinks}
                    >
                      Travels
                    </Link>
                    <Link
                      to="#"
                      className="hover:border-b-2 transition-all duration-300 py-1 border-red-500  md:border-b-0 border-b pb-1"
                      onClick={toggleNavlinks}
                    >
                      Adverts
                    </Link>
                    <Link
                      to="#"
                      className="hover:border-b-2 transition-all duration-300 py-1 border-red-500  md:border-b-0 border-b pb-1"
                      onClick={toggleNavlinks}
                    >
                      Our Contact
                    </Link>
                  </div>
                )}
              </div>
              <div
                className="md:w-1/5 w-[80%] pb-1 md:pb-0 text-gray-200 md:text-center border-b border-red-500 md:border-none flex md:block"
                onMouseEnter={toggleExhibitTrue}
              >
                <Link to="exhibit">
                  <button onClick={toggleNavlinks}>Exhibit</button>
                </Link>
                {/* {hoverLinks.hoverExhibit && (
                  <div
                    className="flex flex-col bg-gray-200 absolute mt-2 p-2 rounded-b text-gray-800 ml-20 md:-ml-3"
                    data-aos="fade-down"
                  >
                    <Link
                      to="#"
                      className="hover:border-b-2 transition-all duration-300 py-1 border-red-500" onClick={toggleNavlinks}
                    >
                      About Us
                    </Link>
                    <Link
                      to="#"
                      className="hover:border-b-2 transition-all duration-300 py-1 border-red-500" onClick={toggleNavlinks}
                    >
                      Welcome Message
                    </Link>
                    <Link
                      to="#"
                      className="hover:border-b-2 transition-all duration-300 py-1 border-red-500" onClick={toggleNavlinks}
                    >
                      Our Team
                    </Link>
                    <Link
                      to="#"
                      className="hover:border-b-2 transition-all duration-300 py-1 border-red-500" onClick={toggleNavlinks}
                    >
                      Our Representative
                    </Link>
                    <Link
                      to="#"
                      className="hover:border-b-2 transition-all duration-300 py-1 border-red-500" onClick={toggleNavlinks}
                    >
                      Our Contact
                    </Link>
                  </div>
                )} */}
              </div>
              <div
                className="md:w-1/5 w-[80%] pb-1 md:pb-0 text-gray-200 md:text-center border-b border-red-500 md:border-none flex md:block"
                onMouseEnter={toggleRegTrue}
              >
                <Link to="registration">
                  <button>Registration</button>
                </Link>
                {/* {hoverLinks.hoverReg && (
                  <div
                    className="flex flex-col bg-gray-200 absolute mt-2 p-2 rounded-b text-gray-800 ml-20 md:-ml-3"
                    data-aos="fade-down"
                  >
                    <Link
                      to="#"
                      className="hover:border-b-2 transition-all duration-300 py-1 border-red-500"
                      onClick={toggleNavlinks}
                    >
                      About Us
                    </Link>
                    <Link
                      to="#"
                      className="hover:border-b-2 transition-all duration-300 py-1 border-red-500"
                      onClick={toggleNavlinks}
                    >
                      Welcome Message
                    </Link>
                    <Link
                      to="#"
                      className="hover:border-b-2 transition-all duration-300 py-1 border-red-500"
                      onClick={toggleNavlinks}
                    >
                      Our Team
                    </Link>
                    <Link
                      to="#"
                      className="hover:border-b-2 transition-all duration-300 py-1 border-red-500"
                      onClick={toggleNavlinks}
                    >
                      Our Representative
                    </Link>
                    <Link
                      to="#"
                      className="hover:border-b-2 transition-all duration-300 py-1 border-red-500"
                      onClick={toggleNavlinks}
                    >
                      Our Contact
                    </Link>
                  </div>
                )} */}
              </div>
            </div>

            <figure>
              <AiOutlineClose
                className="text-gray-200 text-2xl md:hidden mt-5"
                onClick={toggleNavlinks}
              />
            </figure>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
