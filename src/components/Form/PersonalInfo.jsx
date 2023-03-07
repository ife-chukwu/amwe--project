import React, { useContext, Fragment, useEffect } from "react";
import { myContextApi } from "../../ContextApi";
import "animate.css";

export const PersonalInfo = () => {
  const {
    handleDefault,
    inputs,
    valid,
    disable,
    valid2,
    valid3,
    handleChange2,
    handleChange3,
    handleChange4,
    handleChange1,
    handleChange5,
    handleChange6,
    handleChange7,
    handleChange8,
    handleChange9,
    disable2,
    disable3,
    disable4,
    disable5,
    disable6,
    disable7,
    disable8,
    disable9,
    valid4,
    valid5,
    valid6,
    valid7,
    valid8,
    valid9,
    state,
    form,
    lname,
    fname,
    email,
    status,
    job,
    company,
    email2,
    position,
  } = useContext(myContextApi);

  // useEffect(() => {
  //   window.scrollTo({ top: 0, left: 0 , behavior: "smooth" });
  // }, [state]);

  const checkBox = [
    {
      id: "1",
      name: "CharityNon-Profit-OrganizationNGO",
    },
    {
      id: "2",
      name: "Clinics/Medical Practice",
    },
    {
      id: "3",
      name: "Community Health Services",
    },
    {
      id: "4",
      name: "Consultancy",
    },
    {
      id: "5",
      name: "Education",
    },
    {
      id: "6",
      name: "Finance/Banking",
    },
    {
      id: "7",
      name: "Government",
    },
    {
      id: "8",
      name: "Healthcare Agent/Dealer/Distributor",
    },
    {
      id: "9",
      name: "Healthcare/Medical Travel",
    },
    {
      id: "10",
      name: "CHealthcare Association",
    },
    {
      id: "11",
      name: "Hospital Laboratory",
    },
    {
      id: "12",
      name: "Hospital Military",
    },
    {
      id: "13",
      name: "Hospital Public",
    },
    {
      id: "14",
      name: "CHospital Private",
    },
    {
      id: "15",
      name: "Imaging and Radiology Centre",
    },
    {
      id: "16",
      name: "Independent Laboratory",
    },
    {
      id: "17",
      name: "Laboratory Agent/Dealer/Distributor",
    },
    {
      id: "18",
      name: "Law",
    },
    {
      id: "19",
      name: "Manufacturer",
    },
    {
      id: "20",
      name: "Media & Marketing",
    },
    {
      id: "21",
      name: "Professional Association",
    },
    {
      id: "22",
      name: "Project Management",
    },
    {
      id: "23",
      name: "Recruitment",
    },
    {
      id: "24",
      name: "Retailer/Pharmacy",
    },
    {
      id: "25",
      name: "Technology",
    },
    {
      id: "26",
      name: "Transport",
    },
    {
      id: "27",
      name: "Other",
    },
  ];

  return (
    <div className="w-full ">
      {" "}
      <div className="">
        <div className="  mb-10 w-full">
          <div className="flex justify-end mr-[30px] md:mr-[40px] mt-5 md:mt-10 ">
            <p className="border-b-8 rounded-l-full border-gray-700 w-[30px] md:w-[50px] "></p>{" "}
            <p className="border-b-8 rounded-r-full border-gray-300 w-[170px] md:w-[250px]"></p>
            <p className="hidden absolute mt-[-13px] md:flex  font-medium md:font-extrabold text-2xl md:text-[2rem] mr-[210px] md:mr-80">
              {" "}
              10%
            </p>
          </div>

          <h1 className="md:ml-[80px] ml-10 text-gray-600 font-bold mt-20 text-xl">
            Personal details
          </h1>
          <h3 className=" md:ml-[80px] ml-10 mt-10  text-gray-600 font-bold md:w-auto">
            Personalize your AMWE journey from the beginning.
          </h3>
          <p className="mt-5 md:ml-[80px] ml-10 text-gray-600  md:font-medium font-bold w-4/5  md:w-4/5 mx-5">
            We encourage you to respond to the below questions accurately so we
            can provide you an experience that is better suited to your needs
            and objectives.
          </p>
        </div>
        <form
          ref={form}
          onSubmit={handleDefault}
          className="text-gray-600 gap-5 px-10 md:px-0 "
        >
          <div className="md:flex md:flex-col ">
            <div className=" md:flex md:flex-row flex flex-col md:justify-center md:ml-[8%] lg:ml-[5%] items-center md:gap-3 ">
              <label className="hidden font-semibold text-[14px] md:flex">
                Title *
              </label>{" "}
              <select
                className="w-full border  border-gray-400  rounded-lg  md:w-[350px] h-10   outline-none mb-5"
                name="status"
                placeholder="Title"
                onChange={handleChange1}
                ref={disable}
                value={status}
              >
                <option selected>Select Title</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="ms">Ms</option>
                <option value="Engr">Engr</option>
                <option value="Dr">Dr</option>
                <option value="sheikh">Sheikh</option>
                <option value="sheikha">sheikha</option>
                <option value="capt">Capt</option>
                <option value="Chef">Chef</option>
                <option value="col">Col</option>
                <option value="H.E">H.E</option>
                <option value="Hon">Hon</option>
                <option value="H.R.H">H.R.H</option>
                <option value="lt">LT</option>
                <option value="maj">Maj</option>
                <option value="prof">Prof</option>
                <option value="Sir">Sir</option>
                <option value="brig">Brig</option>
                <option value="Gen">Gen</option>
                <option value="Adm">Adm</option>
                <option value="Amb">Amb</option>
                <option value="Brig gen">Brig Gen</option>
                <option value="other">Other</option>
              </select>
            </div>
            <p className="flex justify-center w-full  text-center md:ml-[5%] mb-2 text-[red]">
              {valid}
            </p>

            <div className="">
              <div className="md:flex md:flex-row flex flex-col md:gap-4  md:justify-center items-center mb-5">
                <label className=" font-semibold hidden md:flex">
                  First Name *
                </label>
                <input
                  type="text"
                  name="fname"
                  onChange={handleChange2}
                  placeholder="First Name"
                  value={fname}
                  ref={disable2}
                  className="w-full md:w-[350px] border-gray-400 border rounded-lg py-[10px] px-5 outline-none"
                />
              </div>
              <p className="flex justify-center md:ml-[11%]   text-[red]">
                {valid2}
              </p>

              <div className="md:flex md:flex-row flex flex-col md:gap-5 md:justify-center items-center mb-5">
                <label className=" font-semibold hidden md:flex">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                  onChange={handleChange3}
                  value={lname}
                  ref={disable3}
                  className="w-full md:w-[350px] border-gray-400 border rounded-lg py-[10px] px-5 outline-none"
                />
              </div>
              <p className="flex justify-center md:ml-[11%]  text-[red]">
                {valid3}
              </p>
              <div className="md:flex md:flex-row flex flex-col md:gap-7 md:justify-center items-center mb-5">
                <label className=" font-semibold hidden md:flex">
                  Job Title *
                </label>
                <input
                  type="text"
                  name="job"
                  placeholder="Job Title"
                  onChange={handleChange4}
                  ref={disable4}
                  value={job}
                  className="w-full md:w-[350px] border-gray-400 border rounded-lg py-[10px] px-5 outline-none"
                />
              </div>
              <p className="flex justify-center md:ml-[11%]  text-[red]">
                {valid4}
              </p>
              <div className="md:flex md:flex-row flex flex-col md:gap-6 md:justify-center items-center mb-5">
                <label className=" font-semibold hidden md:flex">
                  Company *
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  onChange={handleChange5}
                  value={company}
                  ref={disable5}
                  className="w-full md:w-[350px] border-gray-400 border rounded-lg py-[10px] px-5 outline-none"
                />
              </div>
              <p className="flex justify-center md:ml-[11%]  text-[red]">
                {valid5}
              </p>
              <div className="py-5 w-full md:mt-10  md:flex md:justify-center">
                <p className=" md:mb-10 text-center w-full md:w-4/5  font-medium md:text-[15px] md:font-medium ">
                  Please ensure you have entered your correct email address.
                  This is the email address we will use to send your digital
                  badge that gives you access to the online platform and
                  in-person event.
                </p>
              </div>
              <div className="md:flex md:flex-row flex flex-col  md:gap-10 md:ml-8 md:justify-center items-center mb-5">
                <label className="font-semibold hidden md:flex">Email *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={handleChange6}
                  value={email}
                  ref={disable6}
                  className="w-full md:w-[350px] border-gray-400 border rounded-lg py-[10px] px-5 outline-none "
                />
              </div>
              <p className="flex justify-center md:ml-[11%]  text-[red]">
                {valid6}
              </p>
              <div className="md:flex md:flex-row flex flex-col md:gap-5   md:justify-center items-center">
                <label className=" font-semibold hidden md:flex">
                  Confirm Email *
                </label>
                <input
                  type="email"
                  name="email2"
                  placeholder="Confirm Email"
                  onChange={handleChange7}
                  value={email2}
                  ref={disable7}
                  className="w-full md:w-[350px] border-gray-400 border rounded-lg py-[10px] px-5 outline-none"
                />{" "}
              </div>
              <p className="flex justify-center md:ml-[11%]  mt-2 md:mt-0 text-[red]">
                {valid7} <br />
                {valid9}
              </p>
              <div className="md:flex md:flex-row flex flex-col mt-[30px] md:mt-0 md:gap-5  md:justify-center items-center md:mr-[7%] lg:mr-[11%]">
                <span className="font-semibold md:text-[14px] w-full  mb-5 md:mb-0 md:w-1/4 ">
                  Please indicate primary industry your business operates in: *
                </span>{" "}
                <select
                  className="border  border-gray-400 rounded-lg px-5 w-full  md:w-[350px]  h-10 outline-none mb-5 md:ml-[-2px]"
                  name="position"
                  onChange={handleChange8}
                  value={position}
                  ref={disable8}
                >
                  <option selected></option>
                  <option value="status">Primary Industry</option>
                  <option value="Charity/Non-Profit-Organization/NGO">
                    Charity/Non-Profit-Organization/NGO
                  </option>
                  <option value="Clinic/Medical practice">
                    Clinic/Medical practice
                  </option>
                  <option value="Community health service">
                    Community health service
                  </option>
                  <option value="Consultancy">Consultancy</option>
                  <option value="Education">Education</option>
                  <option value="Finance Banking">Finance Banking</option>
                  <option value="Government">Government</option>
                  <option value="Health Regulator">Health Regulator</option>
                  <option value="Healthcare/Medical travel ">
                    Healthcare/Medical travel{" "}
                  </option>
                  <option value="Healthcare Agent/dealer/distributor">
                    Healthcare Agent/dealer/distributor
                  </option>
                  <option value="Healthcare association">
                    Healthcare association
                  </option>
                  <option value="Hospital Laboratory">
                    Hospital Laboratory
                  </option>
                  <option value="hospital private">Hospital private</option>
                  <option value="Hospital public">Hospital public</option>
                  <option value="Independent Laboratory">
                    Independent Laboratory
                  </option>
                  <option value="Insurance">Insurance</option>
                  <option value="Investor">Investor</option>
                  <option value="Laboratory agent/dealer/distributor">
                    Laboratory agent/dealer/distributor
                  </option>
                  <option value="Law">Law </option>
                  <option value="Manufacturer">Manufacturer</option>
                  <option value="Media marketing">Media marketing</option>
                  <option value="Professional association">
                    Professional association
                  </option>
                  <option value="Project management">Project management</option>
                  <option value="Recruitment">Recruitment</option>
                  <option value="Retail/Pharmacy">Retail/Pharmacy</option>
                  <option value="Technology">Technology</option>
                  <option value="Transport">Transport</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <p className="flex justify-center md:ml-[11%]  text-[red]">
              {valid8}
            </p>
            <div className="">
              <div className="md:flex md:justify-center ">
                <p className=" font-semibold  w-[350px] md:w-3/5 mt-[70px]">
                  {" "}
                  Please indicate other industries your business operates in:
                  Select all that apply *
                </p>
              </div>

              <div className="md:flex md:justify-center">
                <div className="grid mt-10 grid-cols-1  md:mb-5 md:grid-cols-2 md:gap-x-20 lg:gap-x-40 md:mx-5">
                  {checkBox.map((box) => (
                    <Fragment key={box.id}>
                      <div className=" mb-5  ">
                        {" "}
                        <div className="flex items-center  gap-5">
                          <input
                            type="checkbox"
                            name="industries"
                            onChange={handleChange9}
                            value={box.name}
                            ref={disable9}
                            className="border-black border-5 md:w-5 md:h-5 h-6 w-6 md:mr-[10%]"
                          />
                          <p className="w-3/5">{box.name}</p>
                        </div>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
              <p className="flex justify-center md:ml-[11%] text-[red]">
                {valid8}
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
