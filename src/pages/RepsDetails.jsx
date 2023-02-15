import React, {useEffect} from "react";
import { Link, useParams } from "react-router-dom";

import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";

import repsData from "../components/RepsData";

const RepsDetails = () => {
  const { repsDetails } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  
  return (
    <div className="mt-32 md:mt-10 md:w-2/3 md:border relative m-auto shadow-2xl">
      {repsData
        .filter((data) => data.name === repsDetails)
        .map((data) => {
          return (
            <div
              className="flex flex-col md:flex-row justify-between items-center md:gap-10"
              key={data.id}
            >
              <figure className="w-full h-auto md:w-1/2 md:h-[400px] px-5 md:px-0">
                <img
                  src={data.image}
                  alt={`${data.country} representative `}
                  className="w-full h-full rounded-lg md:rounded-none"
                />
              </figure>
              <aside className="md:w-1/2  flex flex-col gap-4 px-5 pb-5">
                <h1 className="text-2xl font-bold">{data.name}</h1>
                <p className="-mt-3">{data.title}</p>
                <p>{data.profession}</p>
                <div className="flex items-center gap-2">
                  <AiOutlineMail
                    size={20}
                    className="font-bold w-[10%] text-[#0F2F63]"
                  />{" "}
                  <p className="text-sm mb-1 hover:underline w-[90%]">
                    <a
                      href="mailto:info@amwe.com.ng"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      {data.email}
                    </a>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <GoLocation
                    size={20}
                    className="font-bold w-[10%] text-[#0F2F63]"
                  />{" "}
                  <p className="text-sm w-[90%]">{data.address}</p>
                </div>

                <div className="flex items-center gap-2">
                  <img
                    src={data.country_flag}
                    alt=""
                    className="w-[10%] h-[30px]"
                  />
                  <p className="w-[90%]">{data.country}</p>
                </div>
                <Link to="/reps">
                  <button className="bg-[#0F2F63] hover:bg-[#334158] text-gray-200 p-1 rounded-lg font-bold w-full">
                    Back
                  </button>
                </Link>
              </aside>
            </div>
          );
        })}
    </div>
  );
};

export default RepsDetails;
