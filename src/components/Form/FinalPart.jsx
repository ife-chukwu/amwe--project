import React, { useContext, useEffect } from "react";
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
              ? "flex flex-col absolute bg-white shadow-xl shadow-black/90 text-black/70 w-3/5  rounded-lg"
              : "hidden"
          } `}
        >
          <Link to="/">
            {" "}
            <AiOutlineClose
              onClick={closeMessage}
              className="flex justify-end w-full h-5 ml-[40%] md:ml-[45%] mt-5 md:h-7"
            />
          </Link>
          <h1 className="font-extrabold md:font-medium md:text-xl text-center mt-5 flex justify-center mx-3">
            Let your network know you are attending
          </h1>
          <p className="text-lg text-center md:text-sm font-medium mb-10 flex justify-center mx-3">
            #All Africa Medical & Wellness Expo 2023
          </p>
          <div className="flex w-full justify-center">
            <div className="flex-col-reverse flex md:grid md:grid-cols-2 md:gap-10 w-full">
              <div className="mx-5">
                <p className="text-center mt-10 font-extrabold text-xl text-black/70">
                  I am attending All Africa Medical & Wellness Expo 2023
                </p>

                <button className="text-white flex justify-center w-full shadow-black shadow rounded-lg py-2 md:rounded-sm mt-10  md:mt-10 bg-[#1515af] md:bg-[#0e0e6d] ">
                  Join Me
                </button>

                <p className="w-full flex mt-10 font-bold justify-center">
                  By Informer Markets
                </p>
                <p className="w-full flex mt-2 text-center font-bold justify-center">
                  Live in Person: 30th - 31th August
                </p>

                <p className="w-full flex mt-5 text-center font-medium text-md border-b justify-center">
                  Select Where to Share
                </p>
                <div className="w-full flex justify-center">
                  <div className="grid grid-cols-3 w-2/4 gap-5 md:gap-7 my-5">
                    <BsLinkedin className="text-2xl text-[#262696] cursor-pointer" />
                    <BsFacebook className="text-2xl text-[#262696] cursor-pointer" />
                    <BsWhatsapp className="text-2xl text-[#262696] cursor-pointer" />
                    <FaEnvelope className="text-2xl text-[#262696] cursor-pointer" />
                    <BsTwitter className="text-2xl text-[#262696] cursor-pointer" />
                    <AiFillInstagram className="text-2xl text-[#262696] cursor-pointer" />
                  </div>
                </div>
                <button className="flex w-full justify-center border rounded-lg mt-10">
                  Open in Mobile
                </button>
                <p className="mt-3 w-full flex text-center justify-center text-sm mb-5">
                  Powered by Ifechukwu | Privacy
                </p>
              </div>

              <div className="">
                {" "}
                <figure className="md:h-full h-[400px] w-full md:bg-black/60 bg-black/80 bg-blend-overlay">
                  <img
                    src="https://images.pexels.com/photos/7583382/pexels-photo-7583382.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="AMWE"
                    className="w-full h-full rounded-tl-lg mix-blend-overlay "
                  />
                </figure>
              </div>
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
            <h1 className=" font-bold text-lg text-gray-600 md:w-4/5">
              Thank you for registering with All Africa Medical & Wellness Expo
              2023
            </h1>
            <p className=" md:w-4/5 font-semibold text-[14px] mt-5">
              You are now confirmed to attend{" "}
              <strong>All Medical and Wellness Expo 2023.</strong>
            </p>{" "}
            <p className="mt-5 text-[14px]">
              YOUR REGISTRATION KEY IS: 2jhi50ewnwllb
            </p>
            <p className={`${submit ? "hidden" : "absolute"} mt-5 text-[14px]`}>
              How can you make the most of All Medical and Wellness Expo 2023?
            </p>
            <ul className="ml-10 w-3/4  md:w-4/5 md:ml-20 list-disc mt-[60px] gap-4 flex flex-col font-normal text-[14px]">
              <li>
                Look out for an email from our online platform from March
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
              <li className=" md:w-4/5">
                Your stay: In partnership with HotelMap, we've secured
                <a href="#" className="underline">
                  {" "}
                  discounted hotel rates{" "}
                </a>{" "}
                at a selection of hotels in Abuja, find your hotel today
              </li>
              <li className=" md:w-4/5">
                Share, attend and win: Let your network know you are attending
                #All Medical and Wellness Expo 2023 and get a chance to win a
                pass for 2 at the Museum of the Future.{" "}
                <a href="#" className="underline">
                  Click here{" "}
                </a>{" "}
                to start Any queries, please send an email to info@amwe.com.ng
              </li>
            </ul>
            <p className=" mt-10 text-[14px] font-medium">
              Any queries, please send an email to{" "}
              <a href="#" className="underline">
                info@amwe.com.ng{" "}
                </a>
            </p>
          </div>
        </div>
        <div className="flex justify-end mr-10 md:mr-20 my-10">
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
