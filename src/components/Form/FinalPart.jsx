import React, { useContext , useEffect} from "react";
import { myContextApi } from "../../ContextApi";
import { BsLinkedin, BsFacebook, BsWhatsapp } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export const FinalPart = () => {
  const { handleDefault, submit, submitHandle, closeMessage, state5 } =
    useContext(myContextApi);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [state5]);
  return (
    <div className="w-full h-full overflow-hidden">
      <div className="flex justify-center ">
        <div
          className={` ${
            submit
              ? "flex flex-col w-4/5 bg-white shadow-xl shadow-black/90 text-black/70 absolute  md:w-2/4 rounded-lg"
              : "hidden"
          } `}
        >
          <Link to="/">
            {" "}
            <AiOutlineClose
              onClick={closeMessage}
              className="flex md:text-2xl text-xl mt-2 justify-end ml-[140px] md:ml-[340px] w-full"
            />
          </Link>
          <div className="flex justify-center text-center">
            <div>
              <h1 className="font-extrabold md:font-medium md:text-xl mt-5">
                Let your network know you are attending
              </h1>
              <p className="text-[12px] md:text-sm font-medium">
                #All Africa Medical & Wellness Expo 2023
              </p>
            </div>
          </div>
          <div className="flex justify-center md:gap-[50px] md:flex-row flex-col-reverse mt-10">
            <div className="w-4/4 h-4/4 mt-20 font-bold text-[17px]   md:ml-10">
              <div className="z-40 absolute mt-[-700px] md:mt-0 md:relative">
                <div className="flex justify-center w-4/4">
                  <div className="flex flex-col">
                    <p className="text-center md:w-3/5  text-xl  uppercase sm:text-shadow1 md:font-extrabold  text-white md:text-black/60">
                      I am attending All Africa Medical & Wellness Expo 2023
                    </p>

                    <div className="flex justify-center w-4/4 md:w-2/4">
                      <button className="md:py-2 py-2 w-[200px] shadow-black shadow rounded-lg md:px-8 md:rounded-sm mt-10  md:ml-[65px]    md:mt-10 bg-[#1515af] md:bg-[#0e0e6d] text-sm font-medium md:font-bold text-white">
                        Join Me
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="z-40 absolute md:relative  mt-[-500px] md:mt-0 md:mt-7">
                <p className="font-bold text-xl md:-ml-[40px] uppercase sm:text-shadow1 md:text-black/70 md:4/5 text-white ml-8 text-center text-[14px] w-3/4">
                  {" "}
                  All Africa Medical & Wellness Expo 2023
                </p>
                <p className="text-xl md:-ml-[200px] uppercase sm:text-shadow1 text-center text-white md:text-[#08084b] text-[12px]">
                  By Informer Markets
                </p>
                <p className="text-xl md:-ml-[200px] leading-3  font-normal sm:text-shadow1 text-center text-white text-[12px] md:text-[#08084b] ">
                  Live in Person: 30th - 31th August
                  <br />
                  Dubai world trade center.
                </p>
              </div>
            </div>
            <div className="mb-5 mt-10 md:mt-20 md:-ml-[400px]">
              <p className="w-4/4 flex justify-center md:-ml-[170px] md:mt-[300px] text-[13px] md:text-[16px] text-black/80">
                Select Where to Share
              </p>
              <div className="flex justify-center mt-10 md:mt-[50px] md:-ml-[170px]">
                <div className="grid grid-cols-3 w-2/4 gap-5 md:gap-7 my-5">
                  <BsLinkedin className="text-2xl text-[#262696] cursor-pointer" />
                  <BsFacebook className="text-2xl text-[#262696] cursor-pointer" />
                  <BsWhatsapp className="text-2xl text-[#262696] cursor-pointer" />
                  <FaEnvelope className="text-2xl text-[#262696] cursor-pointer" />
                  <BsTwitter className="text-2xl text-[#262696] cursor-pointer" />
                  <AiFillInstagram className="text-2xl text-[#262696] cursor-pointer" />
                </div>
              </div>
              <div className=" flex flex-row md:flex-col justify-center ">
                <div className="flex flex-col">
                  <button className="text-[11px] md:-ml-[140px] md:w-[200px]  mt-5 border border-black/30 rounded-lg  py-1">
                    {" "}
                    Open in Mobile
                  </button>
                  <div className="">
                    <p className="text-[11px] md:-ml-[130px]   text-center mt-3 font-normal">
                      Powered by Ifechukwu | Privacy
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-4/4  flex justify-center md:w-2/4  relative">
              <figure className="md:w-auto md:h-auto md:bg-black/60 bg-black/80 bg-blend-overlay">
                <img
                  src="https://images.pexels.com/photos/7583382/pexels-photo-7583382.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="AMWE"
                  className="w-full h-full md:rounded-tl-4xl mix-blend-overlay "
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={handleDefault}>
        {" "}
        <div>
          <div className="flex justify-end  mr-[30px] md:mr-[79px] mt-10 mb-10">
            <p className="border-b-8 rounded-full border-gray-700 w-[150px] md:w-[300px]"></p>
            <p className="border-b-8 rounded-full border-gray-300 w-[0]"></p>
            <p
              className={`${
                submit ? "hidden" : "absolute"
              } mt-[-20px] font-extrabold text-[2rem] mr-80 hidden md:flex`}
            >
              {" "}
              100%
            </p>
          </div>{" "}
          <div className=" ml-5 md:ml-20 mt-20">
            <h1 className=" font-bold text-lg text-gray-600 md:w-[500px]">
              Thank you for registering with All Africa Medical & Wellness Expo
              2023
            </h1>
            <p className=" md:w-[700px] font-semibold text-[14px] mt-5">
              You are now confirmed to attend <strong>Arab Health 2023.</strong>
            </p>{" "}
            <p className="mt-5 text-[14px]">
              YOUR REGISTRATION KEY IS: 2jhi50ewnwllb
            </p>
            <p className={`${submit ? "hidden" : "absolute"} mt-5 text-[14px]`}>
              How can you make the most of Arab Health?
            </p>
            <ul className="ml-10 w-3/4 md:w-auto md:ml-20 list-disc mt-[60px] gap-4 flex flex-col font-normal text-[14px]">
              <li>
                Look out for an email from our online platform from 9 January
                2023
                <ul className="ml-10 list-decimal mt-2 font-normal">
                  <li>
                    Begin connecting with exhibitors before the live event
                  </li>
                  <li>
                    Book your meetings in advance with exhibitors and arrange to
                    pre-meet them at the live, in-person event
                  </li>
                </ul>
              </li>
              <li className="md:w-[600px]">
                Your stay: In partnership with HotelMap, we've secured
                <a href="#" className="underline">
                  {" "}
                  discounted hotel rates{" "}
                </a>{" "}
                at a selection of hotels in Dubai, find your hotel today
              </li>
              <li className="md:w-[600px]">
                Share, attend and win: Let your network know you are attending
                #ArabHealth23 and get a chance to win a pass for 2 at the Museum
                of the Future.{" "}
                <a href="#" className="underline">
                  Click here{" "}
                </a>{" "}
                to start Any queries, please send an email to ahmarketing@in
              </li>
            </ul>
            <p className=" mt-10 text-[14px] font-medium">
              Any queries, please send an email to{" "}
              <a href="#" className="underline">
                ahmarketing@informa.com.
              </a>
            </p>
          </div>
        </div>
        <div className="flex justify-end mr-10 md:mr-20 mt-10">
          <button
            onClick={submitHandle}
            className={`${
              submit ? "hidden" : ""
            } py-1 md:py-2 px-7 rounded-lg bg-[#08084b] font-bold text-white `}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
