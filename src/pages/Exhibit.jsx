import React, {useEffect} from "react";

import exhibit1 from "../images/UNDER EXHIBIT/putyourproficiency.jpg";
import explore from "../images/UNDER EXHIBIT/explorethebiggestmarket.jpg";
import network from "../images/UNDER EXHIBIT/networkwithyourtarget.jpg";
import increase from "../images/UNDER EXHIBIT/increaseyourintlpresence.jpg";
import discover from "../images/UNDER EXHIBIT/discovernewinnovations.jpg";
import buildRelationship from "../images/UNDER EXHIBIT/buildanengagingrelationship.jpg";
import exchange from "../images/UNDER EXHIBIT/sharingviewsandideas.jpg";
import insight from "../images/UNDER EXHIBIT/insightsintoafricamarket.jpg";

import {
  AiOutlineMail,
  AiFillFacebook,
  AiFillYoutube,
  AiFillInstagram,
  AiOutlineCalendar,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci"
import {FaArrowsAltH} from "react-icons/fa"








const Exhibit = () => {
   useEffect(() => {
     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
   }, []);
  return (
    <div className="md:p-10 py-10 px-5 relative md:mt-48  mt-32">
      <section>
        <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-around items-center">
          <figure
            className="md:w-2/5 w-[80%] hover:scale-105 transition-all duration-500"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <img
              src={exhibit1}
              alt=""
              className="md:w-full md:h-full rounded-lg"
            />
          </figure>
          <div className="w-full md:w-1/3 pl-2 ">
            <h1 className="md:text-2xl mb-5 font-bold text-center md:text-start text-xl text-[#0F2F63]">
              PUT YOUR PROFICIENCY UNDER THE SPOTLIGHT
            </h1>
            <p>
              <span className="font-bold">AMWE</span> gives you the greatest
              opportunity to put your abilities, good qualities, products and
              services under the spotlight. It is an opportunity to meet and
              interact with the movers and shakers of the health industry,
              establish the right connection with your target market and move
              your business to the desired level.
            </p>
            <button className="bg-[#0F2F63] p-2 text-gray-200 hover:bg-red-800 hover:text-white hover:translate-x-1 transition-all duration-500 rounded-lg my-5">
              Book a stand
            </button>
          </div>
        </div>
        <div
          className="text-sm flex flex-col text-gray-200 items-center md:text-lg font-bold bg-red-500 md:w-[70%] w-full relative m-auto border-2 border-gray-200"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <p className="text-xl my-2">Live in-person:</p>
          <AiOutlineCalendar className="scale-150 my-2" />
          <p>
            <i>Date</i>: 30<sup>th</sup> - 31<sup>th</sup> August
          </p>
          <CiLocationOn className="scale-150 my-2" />
          <p className="text-center font-bold px-2">
            <i>Venue</i>: Abuja Continental Hotel, popularly known as Sheraton,
            Abuja, Nigeria.
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
      </section>
      <section className="my-20">
        <h1 className="text-2xl md:text-3xl font-semibold font-serif text-center text-[#0F2F63]">
          WHY EXHIBIT WITH US?
        </h1>
        <div className="mt-16 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-around items-center border-b-2 border-[#0F2F63]  pb-5">
            <div className="w-full md:w-1/3 pl-2 ">
              <h1 className="md:text-2xl mb-5 font-bold text-center md:text-start text-xl text-[#0F2F63]">
                EXPLORE THE BIGGEST MARKET ON THE GLOBE
              </h1>
              <p>
                <span className="font-bold">Africa</span> is a virgin land and a
                huge emerging market. Discover more to harness your professions,
                fulfill your purpose and achieve huge return on investment.
              </p>
              <button className="bg-[#0F2F63] p-2 text-gray-200 hover:bg-red-800 hover:text-white hover:translate-x-1 transition-all duration-500 rounded-lg my-5">
                Book a stand
              </button>
            </div>
            <figure
              className="md:w-2/5 w-full transition-all duration-500 "
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <img
                src={explore}
                alt=""
                className="md:w-full md:h-full rounded-lg "
              />
            </figure>
          </div>
          <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-around items-center border-b-2 border-[#0F2F63]  pb-5">
            <div className="w-full md:w-1/3 pl-2 ">
              <h1 className="md:text-2xl mb-5 font-bold text-center md:text-start text-xl text-[#0F2F63]">
                NETWORK WITH YOUR TARGET MARKET{" "}
              </h1>
              <p>
                <span className="font-bold">AMWE</span> provides you a rare
                opportunity to connect with the world and network with your
                target audience and potential clients.
              </p>
              <button className="bg-[#0F2F63] p-2 text-gray-200 hover:bg-red-800 hover:text-white hover:translate-x-1 transition-all duration-500 rounded-lg my-5">
                Book a stand
              </button>
            </div>
            <figure
              className="md:w-2/5 w-full transition-all duration-500 "
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <img
                src={network}
                alt=""
                className="md:w-full md:h-full rounded-lg "
              />
            </figure>
          </div>
          <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-around items-center border-b-2 border-[#0F2F63]  pb-5">
            <div className="w-full md:w-1/3 pl-2 ">
              <h1 className="md:text-2xl mb-5 font-bold text-center md:text-start text-xl text-[#0F2F63]">
                INCREASE YOUR INTERNATIONAL PRESENCE
              </h1>
              <p>
                <span className="font-bold">AMWE</span> affords you a great
                platform to meet with experts both locally and internationally.
                Therefore, you get to grow on a global scale, the status of your
                business/businesses.
              </p>
              <button className="bg-[#0F2F63] p-2 text-gray-200 hover:bg-red-800 hover:text-white hover:translate-x-1 transition-all duration-500 rounded-lg my-5">
                Book a stand
              </button>
            </div>
            <figure
              className="md:w-2/5 w-full transition-all duration-500"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <img
                src={increase}
                alt=""
                className="md:w-full md:h-full rounded-lg"
              />
            </figure>
          </div>
          <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-around items-center border-b-2 border-[#0F2F63]  pb-5">
            <div className="w-full md:w-1/3 pl-2 ">
              <h1 className="md:text-2xl mb-5 font-bold text-center md:text-start text-xl text-[#0F2F63]">
                DISCOVER NEW INNOVATIONS
              </h1>
              <p>
                Keep abreast with new innovations and the latest technologies.
                During the course of the program, different and latest
                technologies will be on display to help keep you informed and
                updated with latest practices globally.
              </p>
              <button className="bg-[#0F2F63] p-2 text-gray-200 hover:bg-red-800 hover:text-white hover:translate-x-1 transition-all duration-500 rounded-lg my-5">
                Book a stand
              </button>
            </div>
            <figure
              className="md:w-2/5 w-full transition-all duration-500"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <img
                src={discover}
                alt=""
                className="md:w-full md:h-full rounded-lg"
              />
            </figure>
          </div>
          <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-around items-center border-b-2 border-[#0F2F63]  pb-5">
            <div className="w-full md:w-1/3 pl-2 ">
              <h1 className="md:text-2xl mb-5 font-bold text-center md:text-start text-xl text-[#0F2F63]">
                BUILD AN ENGAGING RELATIONSHIP
              </h1>
              <p>
                <span className="font-bold">AMWE</span> provides the opportunity
                to explore, build strong and lasting relationship for high
                engagement with brands.
              </p>
              <button className="bg-[#0F2F63] p-2 text-gray-200 hover:bg-red-800 hover:text-white hover:translate-x-1 transition-all duration-500 rounded-lg my-5">
                Book a stand
              </button>
            </div>
            <figure
              className="md:w-2/5 w-full transition-all duration-500"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <img
                src={buildRelationship}
                alt=""
                className="md:w-full md:h-full rounded-lg"
              />
            </figure>
          </div>
          <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-around items-center border-b-2 border-[#0F2F63]  pb-5">
            <div className="w-full md:w-1/3 pl-2 ">
              <h1 className="md:text-2xl mb-5 font-bold text-center md:text-start text-xl text-[#0F2F63]">
                EXCHANGE VIEWS AND IDEAS
              </h1>
              <p>
                Assured opportunies to share views, exchange knowledge, earn new
                things, and proffer exceptionality, effective and sustainable
                healthcare solution.
              </p>
              <button className="bg-[#0F2F63] p-2 text-gray-200 hover:bg-red-800 hover:text-white hover:translate-x-1 transition-all duration-500 rounded-lg my-5">
                Book a stand
              </button>
            </div>
            <figure
              className="md:w-2/5 w-full transition-all duration-500"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <img
                src={exchange}
                alt=""
                className="md:w-full md:h-full rounded-lg"
              />
            </figure>
          </div>
          <div className="flex flex-col gap-5 justify-around items-center border-b-2 border-[#0F2F63]  pb-5">
            <div className="w-full md:w-2/3 pl-2 ">
              <h1 className="md:text-2xl mb-5 font-bold text-center text-xl text-[#0F2F63]">
                AN INSIGHT INTO THE AFRICAN MARKET
              </h1>
              <p>
                <span className="font-bold">Africa</span> is one of the fastest
                and ever growing consumer market in the world. Household
                consumption of goods and services in all facets has witnessed
                massive growth rate faster than its GDP in the recent time.
              </p>
              <p>
                Based on the rapid growth in population, urbanization rates and
                rapid spread of access to the internet and mobile phones on the
                conntient, Africa's emerging economies present exciting
                opportunities for expansion in retail and distribution.
              </p>
            </div>
            <figure
              className="md:w-2/3 w-full md:h-[450px] transition-all duration-500 "
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <img
                src={insight}
                alt=""
                className="md:w-full md:h-full rounded-lg"
              />
            </figure>

            <div className="md:w-2/3">
              <p>
                Over the years, the consumer expenditure on the continent has
                witnessed tremendous growth at a compound annual rate of 3.9%
                since 2010, and reached a $1.4 trillion in 2015. This figure is
                expected to reach $2.1 trillion by 2025.
              </p>
              <p>
                Currently, the largest consumer markets on the continent include
                Nigeria, Egypt and South Africa. Also, lucrative opportunities
                are expected to be high in Algeria, Angola, Ethiopia, Ghana,
                Kenya, Morrocco, Sudan, Tunisia and Tanzania.
              </p>
              <p>
                Narrowing down to the{" "}
                <span className="font-semibold">Health Sector</span>, Africa
                spends over $1 billion to outbound medical tourism annually
                while Nigeria alone spends $1 billion. Harnessing these figures
                together, we feel the need to develop a sustainable medical
                tourism tie between Africa and the rest of the world.
              </p>
            </div>
            <button className="bg-[#0F2F63] w-full md:w-2/3 p-2 text-gray-200 hover:bg-red-800 hover:text-white hover:translate-x-1 transition-all duration-500 rounded-lg my-5">
              Book a stand
            </button>
          </div>
        </div>
      </section>
      <div className="md:w-2/3 relative m-auto">
        <h1 className="text-2xl font-bold text-[#0F2F63] text-center my-10">
          WHO TO EXHIBIT TO?
        </h1>
        <div className="flex flex-col items-center w-full">
          <p className="font-bold tracking-wider border-t-4 border-red-500 bg-[#0F2F63] p-10 text-gray-200 rounded-t-full">
            AMWE 2023
          </p>
          <div className="flex">
            <div className="w-1 h-20 bg-[#0F2F63] md:rotate-45 "></div>
            <div className="w-1 h-20 bg-[#0F2F63] md:-rotate-45 hidden md:block "></div>
          </div>
          <div className="flex md:flex-row flex-col items-center gap-2">
            <p className="w-[150px] h-[80px] text-center text-sm grid border-t-4 bg-[#0F2F63] rounded-t-full place-items-center border-red-500 text-gray-200 px-3">
              Phamarceutical Companies
            </p>
            <FaArrowsAltH className="text-bold text-[#0F2F63] rotate-90 md:rotate-0 scale-150" />
            <p className="w-[150px] h-[80px] text-center text-sm grid rounded-t-full place-items-center border-t-4 border-red-500 bg-[#0F2F63] text-gray-200 px-3">
              Medical Associations
            </p>
            <FaArrowsAltH className="text-bold text-[#0F2F63] rotate-90 md:rotate-0 scale-150" />
            <p className="w-[150px] h-[80px] text-center text-sm grid rounded-t-full place-items-center border-t-4 bg-[#0F2F63] border-red-500 text-gray-200 px-3">
              Government Agencies
            </p>
            <FaArrowsAltH className="text-bold text-[#0F2F63] rotate-90 md:rotate-0 scale-150" />
            <p className="w-[150px] h-[80px] text-center text-sm grid rounded-t-full place-items-center border-t-4  border-red-500 bg-[#0F2F63] text-gray-200 px-3">
              Hospitals & Clinics
            </p>
          </div>
        </div>
        <div className="my-10">
          <p>
            Based on the network we have been able to build over time, there are
            almost inexhuastible list of reliable partners and organizations
            that our sponsors can exhibit to. Asides the ones highlighted above,
            the lists are endless but we will do well to list a few in no
            particular order:{" "}
          </p>
          <div className="mt-5">
            <li>Medical Equipment Manufacturers</li>
            <li>Medical Cosmetic and Healthcare Products Manufacturers</li>
            <li>Health Insurance Companies</li>
            <li>Travel Insurance Companies</li>
            <li>Medical Tourism Companies</li>
            <li>Healthcare Professionals</li>
            <li>Schools of Medicine</li>
            <li>Colleges and Institutions</li>
            <li>Emergency Services</li>
            <li>Physiotherapists</li>
            <li>Blood Bank Centers</li>
            <li>Rehabilitation Centers</li>
            <li>Alternative Medical Centers</li>
            <li>SPA and Wellness Centers</li>
            <li>Land, Air and Sea Ambulance Service Companies</li>
            <li>Health Tourism and Publication</li>
            <li>Paramedical Colleges</li>
            <li>Hospital Management App and Software</li>
            <li>Travel Agencies</li>
            <li>Airports and Airlines</li>
            <li>Hotels</li>
            <li>Car Rental Companies</li>
            <li>Restaurants</li>
            <li>Catering and Event Management Companies</li>
            <li>Media Houses</li>
            <li>Bloggers</li>
            <li>Embassies</li>
            <li>Fitness Centers</li>
          </div>
        </div>
      </div>
      <section className="my-10 md:w-2/3 relative m-auto">
        <h1 className="text-2xl font-bold text-[#0F2F63] my-5">
          SPONSORSHIP OPPORTUNITIES
        </h1>
        <p>
          Our sponsorship opportunities will turn the searchlight on your brand,
          attract new clients, allows you to build new network and improve
          business ties with potential customers.
        </p>
        <p>
          As an AMWE sponsor, you will earn the recognition of the world for
          your commitment to healthcare advancement. Giving the enormous
          advantages of sponsoring our event, you can go through the following
          types of sponsors:
        </p>
        <div className="flex flex-col gap-5 my-5">
          <ul className="list-disc">
            <h1 className="underline">FINANCIAL SPONSORS</h1>
            <li className="ml-5">
              Provide direct financial support to the event
            </li>
            <li className="ml-5">
              Bring a combination of capital markets expertise, various
              important contacts, strategies for operational improvement
            </li>
          </ul>
          <ul className="list-disc">
            <h1 className="underline">IN-KIND SPONSORS</h1>
            <li className="ml-5">
              Provide goods or/and services (value-in-kind) instead of cash as
              part of the sponsorship agreement
            </li>
          </ul>
          <ul className="list-disc">
            <h1 className="underline">MEDIA SPONSORS</h1>
            <li className="ml-5">Secure advertising for the event</li>
            <li className="ml-5">
              Make publications about the event and share them on social media
              channels, or post any other type of content depending on agreement
            </li>
          </ul>
          <ul className="list-disc">
            <h1 className="underline">PROMOTIONAL SPONSORS</h1>
            <li className="ml-5">
              Influencers with huge online following and ability to influence
              opinions
            </li>
          </ul>
          <ul className="list-disc">
            <h1 className="underline">VIRTUAL EVENT SPONSORS</h1>
            <li className="ml-5">
              This refers to companies or organizations outside our event who
              can come in to support with funds
            </li>
          </ul>
        </div>
        <div
          className="text-sm flex flex-col text-gray-200 items-center md:text-lg font-bold bg-red-500 md:w-[70%] w-full relative m-auto border-2 border-gray-200"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <p className="text-xl my-2">Live in-person:</p>
          <AiOutlineCalendar className="scale-150 my-2" />
          <p>
            <i>Date</i>: 30<sup>th</sup> - 31<sup>th</sup> August
          </p>
          <CiLocationOn className="scale-150 my-2" />
          <p className="text-center font-bold px-2">
            <i>Venue</i>: Abuja Continental Hotel, popularly known as Sheraton,
            Abuja, Nigeria.
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
        <div className="flex flex-col md:flex-row gap-16 my-10 md:my-10 md:gap-5 md:px-5 md:py-16 p-5 tracking-wider font-bold cursor-pointer w-full">
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
      </section>
      <section className="md:p-10">
        <h1 className="text-lg">Powered By:</h1>
      </section>
    </div>
  );
};

export default Exhibit;
