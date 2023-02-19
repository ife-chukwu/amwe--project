import React, {useEffect} from "react";

import vision from "../images/mission&vision/vision.jpeg";
import mission from "../images/mission&vision/our_mission.jpeg";


const VisionMission = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="md:mt-10 mt-32 md:w-2/3 relative m-auto">
      <div className="">
                <figure className="w-full md:h-[200px]">

        <img src={vision} alt="" className="w-full h-full z-0" />
        </figure>
        <div className="px-5 md:px-0">
          <p className="mt-2">
            Our <span className="font-bold text-xl">Vision</span>; 
            working together with the world of healthcare, key stakeholders and
            governments towards building a healthy healthcare system for all
            Africans.
          </p>
        </div>
      </div>

      <div className="mt-5">
        <figure className="w-full md:h-[200px]">
          {" "}
          <img src={mission} alt="" className="w-full h-full"/>
        </figure>
        <div className="mt-2 px-5 md:px-0">
          <li>
            To make Africa one of the leading healthcare destinations globally.
          </li>
          <li>
            To develop a sustainable medical & wellness tourism for Nigeria and
            Africa at large through the introduction of Intra-bound (domestic)
            and inbound medical & wellness tourism.
          </li>
          <li>
            to create healthy competition for our healthcare service providers
            through conferences, workshops, webinar, seminars, symposia, CPD,
            OPD, CME, sharing of views and exchange of ideas and knowledge.
          </li>
          <li>
            To impact our local doctors by bringing together the world finest
            healthcare service providers for collaboration.{" "}
          </li>
          <li>
            To create access to technological advancement in healthcare for all
            African countries via training and retraining of medical personnel.
          </li>
          <li>
            to create opportunity for our hospitals, clinics and other
            healthcare service providers to put their abilities, products and
            services under the spotlight.
          </li>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
