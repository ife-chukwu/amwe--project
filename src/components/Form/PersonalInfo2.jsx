import React, { Fragment, useState, useEffect } from "react";
import { useContext } from "react";
import { myContextApi } from "../../ContextApi";

export const PersonalInfo2 = () => {
  const {
    handleDefault,
    inputs,
    handleChange10,
    handleChange11,
    handleChange12,
    handleChange13,
    handleChange14,
    handleChange15,
    handleChange16,
    valid8,
    valid9,
    valid10,
    valid11,
    valid12,
    valid13,
    valid14,
    disable8,
    disable9,
    disable10,
    disable11,
    disable12,
    disable13,
    disable14,
    state1,
    address,
    State,
    city,
    country2,
    mobile,
    phone,
    country,
  } = useContext(myContextApi);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [state1]);

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div data-aos="fade-up">
      <form onSubmit={handleDefault}>
        <div>
          <div className=" mb-5 md:mb-20">
            <div className="flex justify-end mr-[10px] md:mr-10 mt-10 mb-10">
              <p className="border-b-8 rounded-l-full border-gray-700 w-[30px] md:w-[80px]"></p>
              <p className="border-b-8 rounded-r-full border-gray-300 w-[170px] md:w-[220px]"></p>
              <p className="absolute hidden mt-[-10px] md:mt-[-15px] md:font-extrabold md:text-[2rem] md:flex text-2xl mr-[300px] font-medium">
                {" "}
                25%
              </p>
            </div>
            <h1 className="ml-10 pt-10 md:mt-0 md:ml-[100px] font-semibold md:text-[18px] tracking-wide text-gray-600 mb-5 ">
              Personal Details Continued
            </h1>
          </div>
          <div className=" flex justify-center  md:justify-center  gap-y-[50px]">
            <div className="md:flex md:flex-col gap-4 hidden">
              <label className=" mt-4 ">Address *</label>{" "}
              <label className=" mt-6">City *</label>{" "}
              <label className="mt-6">State/Province *</label>
              <label className="mt-4">Country/Region *</label>{" "}
              <label className="mt-6">Nationality *</label>{" "}
              <label className="mt-6">Mobile *</label>{" "}
              <label className="mt-10">Phone *</label>{" "}
            </div>
            <div className="ml-5 flex flex-col gap-y-3">
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={address}
                ref={disable8}
                onChange={handleChange10}
                className="w-[280px] md:w-[350px]  border-gray-400 border rounded-lg py-2 md:py-[10px] px-5 outline-none"
              />
              <p className="flex w-[280px] justify-center md:mt-[-10px] text-[12px] md:text-[16px]  text-[red]">
                {valid8}
              </p>

              <input
                type="text"
                name="city"
                placeholder="City"
                value={city}
                ref={disable9}
                onChange={handleChange11}
                className="w-[280px] md:w-[350px] border-gray-400 border rounded-lg py-2 md:py-[10px] px-5 outline-none "
              />
              <p className="flex w-[280px] justify-center  md:mt-[-10px] text-[12px] md:text-[16px] text-[red]">
                {valid9}
              </p>

              <input
                type="text"
                name="state"
                placeholder="State/Region"
                value={State}
                ref={disable10}
                onChange={handleChange12}
                className=" w-[280px] md:w-[350px] border-gray-400 border rounded-lg py-2 md:py-[10px] px-5 outline-none "
              />
              <p className="flex  w-[280px] justify-center md:mt-[-10px] text-[12px] md:text-[16px] text-[red]">
                {valid10}
              </p>

              <select
                className="border  border-gray-400 rounded-lg px-5 w-[280px] md:w-[350px] h-10 md:h-[50px]  outline-none "
                name="country"
                placeholder="Nationality"
                value={country}
                ref={disable11}
                onChange={handleChange13}
              >
                <option value="country" selected></option>
                {countries.map((item, index) => (
                  <Fragment key={index}>
                    <option value={item.name} className="cursor-pointer ">
                      {item.name}
                    </option>
                  </Fragment>
                ))}
              </select>
              <p className="flex w-[280px] justify-center md:mt-[-10px] text-[12px] md:text-[16px] text-[red]">
                {valid11}
              </p>

              <select
                className="border  border-gray-400 rounded-lg px-5 w-[280px] md:w-[350px] h-10 md:h-[50px]  outline-none "
                name="country2"
                value={country2}
                ref={disable12}
                onChange={handleChange14}
              >
                <option value="country" selected></option>
                {countries.map((item, index) => (
                  <Fragment key={index}>
                    <option value={item.name} className="cursor-pointer">
                      {item.name}
                    </option>
                  </Fragment>
                ))}
              </select>
              <p className="flex w-[280px] justify-center md:mt-[-10px] text-[12px] md:text-[16px]  text-[red]">
                {valid12}
              </p>

              <input
                type="number"
                placeholder="+971"
                name="mobile"
                value={mobile}
                ref={disable13}
                onChange={handleChange15}
                className=" w-[280px] md:w-[350px] border-gray-400 border rounded-lg py-2 md:py-[10px] px-5 outline-none "
              />
              <p className="flex w-[280px] justify-center md:mt-[-10px] text-[12px] md:text-[16px] text-[red]">
                {valid13}
              </p>

              <p className=" text-[10px] font-light text-gray-500">
                e.g. +31 23 1234567
              </p>
              <input
                type="number"
                placeholder="+971"
                name="phone"
                ref={disable14}
                value={phone}
                onChange={handleChange16}
                className=" w-[280px] md:w-[350px] border-gray-400 border rounded-lg py-2 md:py-[10px] px-5 outline-none "
              />
              <p className="flex  w-[280px] justify-center md:mt-[-10px] text-[12px] md:text-[16px] text-[red]">
                {valid14}
              </p>

              <p className="text-[10px] font-light text-gray-500">
                e.g. +31 23 1234567
              </p>
            </div>
          </div>{" "}
        </div>
      </form>
    </div>
  );
};
