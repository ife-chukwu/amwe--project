import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import slide1 from "../images/Rotating-picture/slide1.jpeg";
import slide2 from "../images/Rotating-picture/slide2.jpg";
import slide3 from "../images/Rotating-picture/slide3.jpg";
import slide4 from "../images/Rotating-picture/slide4.jpg";
import slide5 from "../images/Rotating-picture/slide5.jpg";
import slide6 from "../images/Rotating-picture/slide6.jpg";
import whyexhibit from "../images/whyexhibit.jpg";

import Sliders from "../components/Sliders";

import {
  AiFillCaretLeft,
  AiFillCaretRight,
  AiOutlineMail,
  AiFillFacebook,
  AiFillYoutube,
  AiFillInstagram,
  AiOutlineArrowRight,
  AiOutlineCalendar,
  AiFillLinkedin,
  AiOutlineTwitter,
  
} from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci"
import {BsArrowRight} from "react-icons/bs"

import AOS from "aos";
import "aos/dist/aos.css"; 
AOS.init();

const Home = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const email_password = 'Mr.UsmanAmwe2023';

  return (
    <div className="relative mt-32 md:mt-0 w-full">
      <Sliders />
      <section className="">
        <div className="my-5 border-2 shadow-lg outline outline-offset-2  md:p-5 p-3 leading-tight text-gray-900 tracking-widest">
          <h1
            className="md:mb-4 mb-2 pb-4 md:pb-2 md:text-5xl text-3xl font-bold text-[#0F2F63] border-b-2 border-gray-200 relative w-full md:w-[80%] tracking-widest"
            data-aos="flip-up"
            data-aos-duration="1000"
          >
            <span className="text-4xl md:text-5xl">Welcome </span>to All Africa
            & Wellness Expo (AMWE 2023), Save the date!
          </h1>
          <p className="text-xl font-semibold md:text-3xl my-4">
            You are highly welcome to All Africa & Wellness Expo (AMWE 2023)
          </p>
          <p className="text-xl font-semibold md:text-3xl my-4">
            The African biggest event of the year{" "}
          </p>
          <p className="text-xl font-semibold md:text-3xl my-4">
            Where the world decides the future of Healthcare
          </p>
          <button className="text-[#0F2F63] flex items-center gap-2 py-3 px-4 bg-gray-200 hover:bg-red-800 hover:text-white hover:translate-x-1 transition-all duration-500 rounded-lg my-5 font-bold">
            <Link to="#"> Book a stand</Link>{" "}
            <AiOutlineArrowRight className="mt-1 font-bold" />
          </button>
          <Link to="registration">
            <button className="text-gray-200 flex items-center gap-2 py-4 px-6 bg-[#0F2F63] hover:bg-gray-200 hover:text-red-500 hover:translate-x-1 transition-all duration-500 rounded-lg my-5 font-bold">
              Register your interest
              <AiOutlineArrowRight className="mt-1 font-bold" />
            </button>
          </Link>
          <div
            className="text-sm flex flex-col text-gray-200 items-center md:text-lg font-bold bg-red-500 md:w-[70%] w-full relative m-auto border-2 border-gray-200"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <p className="text-xl my-2">Live in-person:</p>
            <AiOutlineCalendar className="scale-150 my-2" />
            <p>
              <i>Date</i>: 30<sup>th</sup> - 31<sup>th</sup> August, 2023
            </p>
            <CiLocationOn className="scale-150 my-2" />
            <p className="text-center font-bold px-2">
              <i>Venue</i>: Nicon Luxury Hotel, Abuja, Nigeria
            </p>
            <div className="flex gap-10 items-center justify-center mb-5 mt-10 w-full text-gray-200">
              <div>
                <a href="mailto:info@amwe.com.ng">
                  <AiOutlineMail className="scale-150 w-5 h-5 hover:translate-y-1 transition-all duration-500" />
                </a>
              </div>
              <div>
                <a href="https://web.facebook.com/amweevent">
                  <AiFillFacebook className="scale-150 w-5 h-5 hover:translate-y-1 transition-all duration-500" />
                </a>
              </div>
              <div>
                <a href="#">
                  <AiFillYoutube className="scale-150 w-5 h-5 hover:translate-y-1 transition-all duration-500" />
                </a>
              </div>
              <div>
                <a href="#">
                  <AiFillInstagram className="scale-150 w-5 h-5 hover:translate-y-1 transition-all duration-500" />
                </a>
              </div>
              <div>
                <a href="#">
                  <AiFillLinkedin className="scale-150 w-5 h-5 hover:translate-y-1 transition-all duration-500" />
                </a>
              </div>
              <div>
                <a href="#">
                  <AiOutlineTwitter className="scale-150 w-5 h-5 hover:translate-y-1 transition-all duration-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-16 my-10 md:my-10 md:gap-0 md:px-10 md:py-16 p-5 justify-around tracking-wider font-bold cursor-pointer">
          <div
            className="flex flex-col items-center"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <p className="text-[#0F2F63] md:text-red-500 md:bg-transparent md:h-auto flex items-center justify-center md:p-0 md:text-4xl  text-3xl md:hover:translate-y-1 transition-all duration-300">
              4000
            </p>
            <p className="text-lg">Exhibitors</p>
          </div>
          <div
            className="flex flex-col items-center"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <p className="text-[#0F2F63] md:text-red-500 md:bg-transparent md:h-auto flex items-center justify-center md:p-0 md:text-4xl  text-3xl md:hover:translate-y-1 transition-all duration-300">
              85
            </p>
            <p className="text-lg">Exhibiting Countries</p>
          </div>
          <div
            className="flex flex-col items-center"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <p className="text-[#0F2F63] md:text-red-500 md:bg-transparent md:h-auto flex items-center justify-center md:p-0 md:text-4xl  text-3xl md:hover:translate-y-1 transition-all duration-300">
              60,000
            </p>
            <p className="text-lg">Live Visitors</p>
          </div>
          <div
            className="flex flex-col items-center"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <p className="text-[#0F2F63] md:text-red-500 md:bg-transparent md:h-auto flex items-center justify-center md:p-0 md:text-4xl  text-3xl md:hover:translate-y-1 transition-all duration-300">
              10
            </p>
            <p className="text-lg">Conferences</p>
          </div>
        </div>
        <div className="md:px-10 md:py-16 py-5 flex flex-col items-center w-full bg-[#0F2F63]">
          <h1 className="text-center text-2xl md:text-4xl font-bold text-red-500">
            Why Visit?
          </h1>
          <div className="flex md:flex-row flex-col items-center justify-around gap-10 w-full mt-10">
            <div className="flex flex-col items-center  md:w-1/4">
              <figure
                className="bg-gray-200 p-3 w-28 h-28 rounded-full"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img src="travel.svg" alt="" className="w-full h-full" />
              </figure>
              <p className="text-gray-200 text-center  mt-5">
                To explore the biggest market and services around the world
              </p>
            </div>
            <div className="flex flex-col items-center md:w-1/4">
              <figure
                className="bg-gray-200 p-3 w-28 h-28 rounded-full"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img src="network.svg" alt="" className="w-full h-full" />
              </figure>
              <p className="text-gray-200 text-center mt-5">
                To network with your target market audience
              </p>
            </div>
            <div className="flex flex-col items-center md:w-1/4">
              <figure
                className="bg-gray-200 p-3 w-28 h-28 rounded-full"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img src="display.svg" alt="" className="w-full h-full" />
              </figure>
              <p className="text-gray-200 text-center mt-5">
                To display your abilities and products
              </p>
            </div>
            <div className="flex flex-col items-center md:w-1/4">
              <figure
                className="bg-gray-200 p-3 w-28 h-28 rounded-full"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img src="increase.svg" alt="" className="w-full h-full" />
              </figure>
              <p className="text-gray-200 text-center mt-5">
                To increase your international presence
              </p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-between  items-center my-20 gap-10 w-[90%] md:w-full">
            <figure className="md:w-2/4 ">
              <img
                src={whyexhibit}
                alt="Exhibition Event"
                className="shadow-lg rounded hover:scale-105 transition-all duration-400"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
              />
            </figure>
            <div className="md:w-1/3 text-gray-200 text-justify tracking-wider border-l-2 border-red-500 pl-3">
              <p>
                There are many opportunies for everyone coming for this life
                changing event. Among many things, you get to discover new
                innovations, you get to build an engaging relationship and
                exchange ideas with experts, and above all, you get to be well
                informed about new trends and technology in the health industry.
              </p>
            </div>
          </div>
          <Link to="exhibit">
            <button className="flex gap-2 items-center text-xl bg-red-500 hover:bg-red-400 hover:translate-x-1 transition-all duration-300 text-gray-200 md:mt-10 p-2 rounded-xl">
              Learn More
              <BsArrowRight className="mt-2 font-bold hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </section>
      <section className="my-20 mx-10 md:mx-20">
        <div className="flex md:flex-row flex-col gap-5 md:gap-0 justify-around">
          <div className="md:w-1/3 flex flex-col items-center">
            <figure className="md:w-full md:h-[250px] shadow-lg rounded-tl-2xl rounded-br-2xl md:hover:scale-105 transition-all duration-300">
              <img
                src="https://marketplace.canva.com/EAFMpe1T88Q/1/0/1600w/canva-blue-modern-dental-clinic-trifold-brochure-O5muq1jXx60.jpg"
                alt=""
                className="w-full h-full rounded-tl-2xl rounded-br-2xl "
              />
            </figure>
            <h1 className="md:text-xl font-semibold mt-4">
              Conference Brochure
            </h1>
            <p className="text-center">
              This brochure gives you details about the general overview of AMWE
              2023, our sponsors and benefits.
            </p>
            <button className="py-2 px-4 bg-red-500 text-gray-200 rounded-md mt-2 hover:bg-red-400 transition-all duration-300">
              Download
            </button>
          </div>
          <div className="md:w-1/3 flex flex-col items-center">
            <figure className="md:w-full md:h-[250px] shadow-lg rounded-tr-2xl rounded-bl-2xl md:hover:scale-105 transition-all duration-300">
              <img
                src="https://marketplace.canva.com/EAE8-qdHVmo/2/0/1600w/canva-blue-clean-medical-promotion-service-trifold-brochure-5lqWs8Yqnr8.jpg"
                alt=""
                className="rounded-tr-2xl rounded-bl-2xl w-full h-full"
              />
            </figure>
            <h1 className="md:text-xl font-semibold mt-4">
              Sponsorship Brochure
            </h1>
            <p className="text-center">
              This brochure is an avenue for advertizing our partners and
              sponsors.
            </p>
            <button className="py-2 px-4 bg-red-500 text-gray-200 rounded-md mt-2 hover:bg-red-400 transition-all duration-300">
              Download
            </button>
          </div>
        </div>
      </section>
      <section className="p-10">
        <h1 className="text-lg">Powered By:</h1>
      </section>
    </div>
  );
};

export default Home;
