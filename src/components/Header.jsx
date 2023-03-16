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
    <div className="top-0 z-50 fixed md:relative w-full">
      <div className="flex justify-between shadow-md md:items-center md:w-full md:z-20 md:px-5 bg-slate-100">
        <figure
          className={`${
            showNavlinks ? "hidden" : "flex"
          } md:flex items-center md:w-auto w-full gap-2 md:h-100px m-5 md:mr-5 md:mt-2 md:ml-2 relative`}
        >
          <img
            src="favicon.png"
            alt="AMWE Official Logo"
            className="w-[22%] md:w-[20%] md:h-full shadow-lg"
          />
          <figcaption
            className="w-[250px] md:w-auto md:h-auto md:font-normal md:p-1  md:block text-base font-bold text-center leading-tight mt-1  text-[#0F2F63] rounded overflow-hidden"
            data-aos="flip-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            ALL AFRICA MEDICAL & <hr className="bg-red-500 h-1" />{" "}
            <i className="font-bold text-base">WELLNESS EXPO </i>
          </figcaption>
        </figure>

        <div className={`w-full relative flex items-center justify-center ${showNavlinks? 'h-screen' : 'h-auto'} md:h-auto`}>
          {!showNavlinks && (
            <figure className="md:hidden relative float-right">
              <GiHamburgerMenu
                size={30}
                className="text-[#0F2F63] text-2xl md:hidden border shadow-lg rounded"
                onClick={toggleNavlinks}
              />
            </figure>
          )}
          <nav
            className={`${
              showNavlinks ? "flex" : "hidden"
            } z-50 justify-between py-3 px-8 md:px-2 h-screen w-full md:h-12 md:rounded bg-[#0F2F63] md:flex absolute animate__animated
            animate__slideInRight
            animate__fadeIn`}
            onMouseLeave={toggleLinksFalse}
          >
            <div className="flex md:flex-row flex-col md:gap-5 gap-5 w-full mt-5 md:mt-0">
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
                    className="flex flex-col bg-gray-200 absolute p-2 mt-2 rounded-b text-gray-800 ml-20 md:-ml-3 "
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
                      to="vissionMission"
                      className="hover:border-b-2 transition-all duration-300 border-red-500 md:border-b-0 border-b pb-1"
                      onClick={toggleNavlinks}
                    >
                      Our Vision & Mission
                    </Link>
                    <Link
                      to="welcomeMessage"
                      className="hover:border-b-2 transition-all duration-300 py-1 border-red-500  md:border-b-0 border-b pb-1"
                      onClick={toggleNavlinks}
                    >
                      Welcome Message
                    </Link>
                    <Link
                      to="ourTeam"
                      className="hover:border-b-2 transition-all duration-300 py-1 border-red-500  md:border-b-0 border-b pb-1"
                      onClick={toggleNavlinks}
                    >
                      Our Team
                    </Link>
                    <Link
                      to="reps"
                      className="hover:border-b-2 transition-all duration-300 py-1 border-red-500  md:border-b-0 border-b pb-1"
                      onClick={toggleNavlinks}
                    >
                      Our Representative
                    </Link>
                    <Link
                      to="contactUs"
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
                      to="conference"
                      className="hover:border-b-2 transition-all duration-300 py-1 border-red-500  md:border-b-0 border-b pb-1"
                      onClick={toggleNavlinks}
                    >
                      Conference
                    </Link>
                    <Link
                      to="awards"
                      className="hover:border-b-2 transition-all duration-300 py-1 border-red-500  md:border-b-0 border-b pb-1"
                      onClick={toggleNavlinks}
                    >
                      Awards
                    </Link>
                    <Link
                      to="travel"
                      className="hover:border-b-2 transition-all duration-300 py-1 border-red-500  md:border-b-0 border-b pb-1"
                      onClick={toggleNavlinks}
                    >
                      Travels
                    </Link>
                    <Link
                      to="adverts"
                      className="hover:border-b-2 transition-all duration-300 py-1 border-red-500  md:border-b-0 border-b pb-1"
                      onClick={toggleNavlinks}
                    >
                      Adverts
                    </Link>
                    <Link
                      to="contactUs"
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
                <Link to="registration" onClick={toggleNavlinks}>
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

            <figure className="">
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
