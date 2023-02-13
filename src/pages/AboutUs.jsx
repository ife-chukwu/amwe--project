import React, { useEffect } from 'react'

import {
  AiOutlineArrowRight,
  AiOutlineMail,
  AiFillFacebook,
  AiFillYoutube,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineCalendar,
} from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();


const AboutUs = () => {

   useEffect(() => {
     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
   }, []);
  
  
  return (
    <div className="md:p-10 py-10 px-5 relative md:mt-10  mt-32 md:w-2/3 m-auto">
      <h1 className="md:text-2xl mb-5 font-bold text-center text-xl text-[#0F2F63]">
        ABOUT ALL-AFRICA MEDICAL AND WELLNESS EXPO (AMWE)
      </h1>
      <p>
        <span className="font-bold">AMWE</span>; All-Africa Medical and Wellness
        Expo is a platform that brings together a large network of the world's
        finest healthcare service providers, Hospital & clinics, medical tourism
        agencies, NGOs, health Insurance companies, phamaceutical companies,
        medical equipment manufacturing companies, medical institutions, CEOs of
        companies, government agencies, trade professionals and a host of
        others, to collaborate towards developing a healthier and more
        sustainable healthcare for every part of the world. In the process, It
        is intended to create a good number of opportunities for turning the
        spotlight on participats' products, services and abilities.
      </p>
      <p className="mt-5">
        Our major focus is on working together to continuously reveal the
        metrics for transforming healthcare system and delivery in every part of
        the world. Thus, our platform brings together the world's finest
        healthcare service providers and their key speakers, and stakeholders in
        the industry who are set to bring their proficiencies to to the front
        burner.
      </p>
      <p className="mt-5">
        <span className="font-bold">AMWE</span> is a unique event which is also
        intended to establish the right connection of investors, target markets
        and people from all works of life. The event shall be hosted by
        different African countries on a yearly basis.
      </p>
      <div className="flex md:flex-row flex-col md:justify-around md:gap-10 items-center">
        <button className="bg-[#0F2F63] md:w-1/2 w-full flex items-center justify-center gap-5 py-3 md:py-4 text-gray-200 hover:bg-[#0a182f] hover:text-white hover:translate-x-1 transition-all duration-500 rounded-lg md:my-5 mt-10 font-bold">
          Book a stand
          <AiOutlineArrowRight className="mt-1 font-bold" />
        </button>
        <button className="text-gray-200 flex items-center justify-center  gap-5 py-3 md:py-4 w-full md:w-1/2 bg-[#0F2F63] hover:bg-[#0a182f] hover:translate-x-1 transition-all duration-500 rounded-lg md:my-5 my-2 font-bold">
          <Link to="#"> Register your interest </Link>
          <AiOutlineArrowRight className="mt-1 font-bold" />
        </button>
      </div>
      <div
        className="text-sm flex flex-col text-gray-200 items-center md:text-lg font-bold bg-red-500 w-full relative m-auto border-2 border-gray-200"
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
            <a href="mailto:amwe2023@gmail.com">
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
      <section className="py-10">
        <h1 className="text-lg">Powered By:</h1>
      </section>
    </div>
  );
}

export default AboutUs