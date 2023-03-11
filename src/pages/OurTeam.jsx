import React, { useEffect } from "react";

import Usman from "../images/theTeam/Usman-Isah.jpeg";
import Esther from "../images/theTeam/Esther-Lawrence.jpeg";
import Inyanda from "../images/theTeam/Inyanda-Emmanuel.jpeg";
import Joy from "../images/theTeam/Joy-Audu.jpeg";
import Prudence from "../images/theTeam/Prudence-Okonna.jpeg";
import Sampson from "../images/theTeam/Sampson-Yakubu.jpeg";
import Victor from "../images/theTeam/Victor-Audu.jpeg";
import Yakubu from "../images/theTeam/Yakubu-Ugbede.jpeg";
import Yunusa from "../images/theTeam/Yunusa-Abdulganiyu.jpeg";

const OurTeam = () => {
  const teamData = [
    {
      name: "Usman Isah",
      role: "Founder & CEO of All Africa Medical & Wellness Expo LTD",
      image: Usman,
    },
    {
      name: "Yakubu Ugbede",
      role: "Executive Director",
      image: Yakubu,
    },
    {
      name: "Dr. Joy O. Audu",
      role: "Event Co-ordinator",
      image: Joy,
    },
    {
      name: "COMR. Inyanda Emmanuel",
      role: "Supervisor & PRO",
      image: Inyanda,
    },
    {
      name: "Dr. Victor Amana Audu",
      role: "Event Manager",
      image: Victor,
    },
    {
      name: "Sampson Yakubu",
      role: "Account Manager",
      image: Sampson,
    },
    {
      name: "Prudence C. Okonna",
      role: "Marketing & Media Manager",
      image: Prudence,
    },
    {
      name: "Yunusa Abdulganiyu",
      role: "Treasurer",
      image: Yunusa,
    },
    {
      name: "Esther Lawrence",
      role: "Sales Representative",
      image: Esther,
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="relative mt-24 md:mt-0 w-full p-5 md:p-10 md:w-3/4 m-auto tracking-wider">
      <div>
        <h1 className="font-bold text-2xl text-center text-[#0F2F63]">
          MEET OUR TEAM
        </h1>
        <p>
          We are delighted to introduce you to the honourable members of our
          team who are working diligently to assure the success of this great
          event.
        </p>
      </div>
      <div className="md:grid grid-cols-2 gap-10 md:gap-5 mt-4">
        {teamData.map((members, index) => {
            return <div key={index} className="p-2 shadow-lg rounded-lg mt-4">
                <figure className="h-[300px] md:h-[350px]">
                    <img src={members.image} alt="" className="w-full h-full rounded-lg"/>
                </figure>
                <figcaption className="font-bold text-center text-lg">{members.name}</figcaption>
                <figcaption className="text-center text-sm">{ members.role}</figcaption>
          </div>;
        })}
      </div>
    </div>
  );
};

export default OurTeam;
