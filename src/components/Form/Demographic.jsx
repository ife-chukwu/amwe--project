import React, { useContext, useEffect } from "react";
import { myContextApi } from "../../ContextApi";
export const Demographic = () => {
  const {
    handleDefault,
    inputs,
    valid14,
    valid15,
    handleChange17,
    handleChange18,
    handleChange20,
    disable14,
    disable15,
    state2,
    companySize,
    Function,
    seniority,
  } = useContext(myContextApi);

  useEffect(() => {
      window.scrollTo({ top: 0, left: 0 });
    },[state2]);
  return (
    <div className="overflow-hidden">
      <form onSubmit={handleDefault}>
        <div className="">
          <div className="flex justify-end  mt-10 mr-10 md:mr-10 mb-10">
            <p className="border-b-8 rounded-l-full border-gray-700 w-[65px] md:w-[130px]"></p>
            <p className="border-b-8 rounded-r-full border-gray-300 w-[85px] md:w-[170px]"></p>
            <p className="absolute mt-[-20px] font-extrabold text-[2rem] md:flex hidden mr-[300px]">
              {" "}
              40%
            </p>
          </div>
          <h1 className="ml-10  font-bold text-xl">Demographic information</h1>
          <p className=" ml-10  w-4/5 md:w-4/5  text-lg mt-5 md:mt-10  md:mb-10 font-normal">
            Responding to the below questions as accurately as possible allows
            us to match you to the right content, products, companies and
            potential business contacts.
          </p>
          <div className="mt-10">
            <div className="flex flex-col md:flex md:flex-row md:gap-10 gap-2 md:justify-center md:mx-5  items-center mb-5 ">
              <label className=" text-[17px] md:text-[17px] font-semibold md:font-bold">
                What is your company size? *
              </label>{" "}
              <select
                className="border  border-gray-400 rounded-lg px-5 w-[280px] mb-5 md:mb-0 md:w-[350px] h-10  outline-none "
                name="companySize"
                ref={disable14}
                onChange={handleChange17}
                value={companySize}
              >
                <option value="status" selected></option>
                <option value="1 - 50">1 - 50</option>
                <option value="50 - 100">50 - 100</option>
                <option value="100 - 500">100 - 500</option>
                <option value="500 - 1,000">500 - 1,000</option>
                <option value="1,000 - 5,000">1,000 - 5,000</option>
                <option value="More than 5,000">More than 5,000</option>
              </select>
            </div>

            <p className="flex justify-center w-[280px] ml-10 mb-5 mt-[-10px] md:ml-[300px]  text-[red]">
              {valid14}
            </p>
            <div className="flex flex-col md:flex md:flex-row md:gap-10 gap-2 ml-2 md:justify-center md:mx-5   items-center mb-5 ">
              <label className=" text-[17px] font-semibold md:font-bold">
                What is your job function? *
              </label>{" "}
              <select
                className="border  border-gray-400 rounded-lg px-5 w-[280px] md:w-[350px] mb-5 md:mb-0 h-10   outline-none"
                name="Function"
                ref={disable15}
                onChange={handleChange18}
                value={Function}
              >
                <option value="status" selected></option>
                <option value="C-level president chairman">Academic </option>
                <option value=" Director/Head of Department, General Manager">
                  Clinician/Healthcare Professional
                </option>
                <option value="Executive Secretary/Company Secretary">
                  Engineering{" "}
                </option>
                <option value="Junior Manager/Executive">
                  Finance/Accounting{" "}
                </option>
                <option value="Managing Director/Vice President">
                  General Management/Administration{" "}
                </option>
                <option value="Owner/Board Director">Human Resources </option>
                <option value="Senior Government Official">
                  Information Technology/Management Information{" "}
                </option>
                <option value="Senior Manager/Manager" className="">
                  Laboratory Professional
                </option>
                <option value="Senior Manager/Manager" className="">
                  Legal{" "}
                </option>
                <option value="Senior Manager/Manager" className="">
                  Marketing/Public Relations{" "}
                </option>
                <option value="Senior Manager/Manager" className="">
                  Operations{" "}
                </option>
                <option value="Senior Manager/Manager" className="">
                  Production/ Manufacturing{" "}
                </option>
                <option value="Senior Manager/Manager" className="">
                  Purchasing/Procurement{" "}
                </option>
                <option value="Senior Manager/Manager" className="">
                  Research/Development{" "}
                </option>
                <option value="Senior Manager/Manager" className="">
                  Sales/Business Development{" "}
                </option>
                <option value="Senior Manager/Manager" className="">
                  Senior Management (Director / C level)
                </option>
                <option value="Senior Manager/Manager" className="">
                  Supply Chains/Logistics{" "}
                </option>
                <option value="Senior Manager/Manager" className="">
                  Training/Education{" "}
                </option>
                <option value="Senior Manager/Manager" className="">
                  Other{" "}
                </option>
              </select>
            </div>

            <p className="flex justify-center md:ml-[-100px] ml-5 mb-5 md:mt-[-10px]  mt-[-10px] text-[red]">
              {valid15}
            </p>
            <div className="flex flex-col md:flex md:flex-row md:gap-10 gap-2 md:justify-center md:mx-5 items-center mb-5 ">
              <label className="text-[17px]  font-semibold md:font-bold">
                What is you level seniority? *
              </label>{" "}
              <select
                className="border  border-gray-400 rounded-lg px-5 w-[280px] md:w-[350px]  h-10  outline-none mb-5"
                name="seniority"
                onChange={handleChange20}
                value={seniority}
              >
                <option value="status" selected></option>
                <option value="C-level president chairman">
                  C-level president chairman
                </option>
                <option
                  value=" Director/Head of Department, General Manager"
                  className="h-20 leading-40"
                >
                  Director/Head of Department, General Manager
                </option>
                <option value="Executive Secretary/Company Secretary">
                  Executive Secretary/Company Secretary
                </option>
                <option value="Junior Manager/Executive">
                  Junior Manager/Executive
                </option>
                <option value="Managing Director/Vice President">
                  Managing Director/Vice President
                </option>
                <option value="Owner/Board Director">
                  Owner/Board Director
                </option>
                <option value="Senior Government Official">
                  Senior Government Official
                </option>
                <option value="Senior Manager/Manager">
                  Senior Manager/Manager
                </option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
