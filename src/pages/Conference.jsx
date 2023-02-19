import React, { useEffect } from "react";

import conference from "../images/conference/medical-meetings.jpeg";
import universal from "../images/conference/universal.png";
import malaria from "../images/conference/malaria_data.png";
import HIV from "../images/conference/HIV_DATA.png";

const Conference = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const universal_links =
    "https://aho.afro.who.int/trackers/af?tr=uhc&des=UNIVERSAL%20HEALTH%20COVERAGE";

  const hivData =
    "https://aho.afro.who.int/trackers/af?tr=hiv&des=HIV%20/%20AIDS";
  const malariaData = "https://aho.afro.who.int/trackers/af?tr=mal&des=MALARIA";
  return (
    <div className="md:p-10 md:py-10 relative md:mt-10  mt-32 md:w-2/3 m-auto">
      <div>
        <h1 className="mb-5 font-bold text-center text-3xl text-[#0F2F63] underline">
          CONGRESS
        </h1>
        <figure>
          <img
            src={conference}
            alt=""
            className="md:rounded-lg"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1000"
          />
        </figure>
      </div>
      <div className="px-5 md:px-0">
        <h1 className="mt-5 mb-2 font-bold md:text-2xl text-xl text-[#0F2F63]">
          Background
        </h1>
        <p>
          Access to quality Healthcare Services has been the priority of most
          countries of the world. This, pinpoints the vision of Universal Health
          Coverage <span className="font-bold">(UHC)</span> which is making all
          people and communities to have access to quality health services where
          and when they need them, without suffering financial hardship.
        </p>
        <p className="mt-2">
          Since this value proposition went public in 1984, it has achieved its
          aim in most of the developed countries. According to{" "}
          <span className="font-bold">UHC INDEX</span>
          ranking, most developed nations ranked between 70% to 90%. But most
          African nations ranked poorly denoting that the vast majority of
          Africans are yet to have access to quality healthcare.
        </p>
        <p className="mt-2">
          According to{" "}
          <span className="font-bold">WORLD HEALTH ORGANIZATION </span>report on
          Africa’s progress towards achieving Universal Health Coverage, only
          less than half of Africans have access to the healthcare they need.
        </p>
        <div className="mt-5 border-b-2">
          <div className="grid grid-rows-2 grid-flow-col gap-4">
            <figure className="row-span-4 col-span-8">
              <a href={universal_links} target="_blank">
                {" "}
                <img
                  src={universal}
                  alt=""
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                />
              </a>
            </figure>
            <figure className="col-span-4">
              <a href={malariaData} target="_blank">
                <img
                  src={malaria}
                  alt=""
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                />
              </a>
            </figure>
            <figure className="col-span-4">
              <a href={hivData} target="_blank">
                <img
                  src={HIV}
                  alt=""
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                />
              </a>
            </figure>
          </div>
          <i className="text-[10px] md:text-[12px]">
            Source: World Health Organization
          </i>
        </div>
        <p className="mt-2">
          It is on this ground that <span className="font-bold">AMWE</span> is
          initiated. Our major focus is on working together to continuously
          reveal the metrics for transforming healthcare system and delivery in
          every part of the world, particularly, the less developed nations of
          the World. Thus, our platform brings together the world finest
          healthcare service providers and the key speakers and stakeholders in
          the industry who are set to bring their proficiencies to the front
          burner.
        </p>
        <p className="mt-2">
          At the course of this event, the entire congress is designed to cover
          discussions on issues that bother on the vast majority of Africans not
          having access to quality healthcare and how these can be overcome.
        </p>
        <p className="mt-2">
          Based on the above, the 1ST edition of{" "}
          <span className="font-bold">
            AMWE, ALL AFRICA MEDICAL & WELLNESS EXPO
          </span>{" "}
          is dedicated to identifying the key challenges denying Africans access
          to quality healthcare and then proffering possible solutions to those
          challenges.
        </p>
        <p className="mt-2">
          One of such solutions as identified is{" "}
          <span className="font-bold">
            developing intra-bound and inbound medical Tourism
          </span>{" "}
          for Africa, starting from Nigeria. Hence, our Theme for 2023 is:{" "}
          <br />
          <span className="font-bold">
            DEVELOPING SUSTAINABLE MEDICAL TOURISM FOR NIGERIA
          </span>
          .
        </p>
      </div>
      <div className="px-5 md:px-0">
        <h1 className="mt-5 mb-2 font-bold md:text-2xl text-xl text-[#0F2F63]">
          PROGRAMS
        </h1>
        <div>
          <li>Congress</li>
          <li>Exhibition</li>
          <li>Medical Tourism Forum</li>
          <li>panel Discussion</li>
          <li>B2B Meeting</li>
        </div>
        <div>
          <h1 className="mt-5 font-bold md:text-xl text-xl text-[#0F2F63]">
            Congress Overview
          </h1>
          <div className="my-5 border p-5 hover:shadow-xl">
            <li className="font-bold">Conferences</li>
            <ol style={{ listStyleType: "upper-roman" }} className="ml-10 mt-2">
              <li>African Access to Quality Healthcare </li>
              <li>
                Identifying key challenges facing healthcare system in Nigeria
              </li>
              <li>Ethical and legal concern in medical Tourism in Africa</li>
              <li>
                How would medical tourism impact on Nigeria’s Healthcare System
              </li>
              <li>
                Robotic Surgery: role, structure and impacts in Nigeria’s
                healthcare
              </li>
              <li>
                Stem cell management & impacts on Nigeria Healthcare Services
              </li>
              <li>
                The role of international organization in Africa Healthcare
              </li>
              <li>
                Collaboration between Healthcare Service Providers and Medical
                Tourism Professionals.
              </li>
            </ol>
          </div>
          <div className="border p-5 hover:shadow-xl">
            <li className="font-bold">Panel Discussions</li>
            <ol style={{ listStyleType: "upper-roman" }} className="ml-10 mt-2">
              <li>
                The role of Medical Tourism in Strengthening Healthcare Services
                in Africa
              </li>
              <li>
                Legislations, laws & regulations on medical malpractices,
                negligence, medication errors and healthcare fraud{" "}
              </li>
              <li>
                Technology Advancement & Artificial Intelligence for Healthcare
                Services in Africa
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conference;
