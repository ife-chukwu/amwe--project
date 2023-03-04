import React, { Fragment, useContext , useEffect} from "react";
import { myContextApi } from "../../ContextApi";

export const PersonalInfo3 = () => {
  const {
    handleDefault,
    inputs,
    CheckOut1,
    CheckOut2,
    CheckOut3,
    CheckOut4,
    CheckOut5,
    CheckOut6,
    check2,
    subCheck,
    disposable,
    laboratory,
    imaging,
    it,
    infrastructure,
    equipment,
    Orthopaedic,
    valid17,
    subCheckBox3,
    disposableArray,
    disposableArray3,
    disposableArray2,
    subCheckBox4,
    laboratory1,
    laboratory2,
    laboratory3,
    laboratory4,
    laboratory5,
    laboratory6,
    laboratory7,
    equipmentArray1,
    equipmentArray2,
    equipmentArray3,
    equipmentArray4,
    equipmentArray5,
    equipmentArray6,
    equipmentArray7,
    equipmentArray8,
    equipmentArray9,
    imaging1,
    imaging2,
    orthopaedicArray1,
    orthopaedicArray2,
    itArray1,
    itArray2,
    itArray3,
    itArray4,
    itArray5,
    itArray6,
    itArray7,
    itArray8,
    itArray9,
    itArray10,
    itArray11,
    itArray12,
    itArray13,
    itArray14,
    itArray15,
    itArray16,
    itArray17,
    sixHandler,
    twoHandler,
    fiveHandler,
    radioChange,
    radioChange2,
    imagingChild,
    itChild,
    medicalChild,
    medicalChild2,
    medicalChild3,
    medicalChild4,
    medicalChild5,
    medicalChild6,
    medicalChild7,
    medicalChild8,
    medicalChild9,
    laboratoryChild1,
    laboratoryChild2,
    laboratoryChild3,
    laboratoryChild4,
    laboratoryChild5,
    laboratoryChild6,
    laboratoryChild7,
    orthopaedicChild1,
    orthopaedicChild2,
    healthChild,
    infrastructureChild,
    state3,
  } = useContext(myContextApi);

  useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },[state3]);

  return (
    <div className="w-4/4">
      <form onSubmit={handleDefault}>
        {" "}
        <div>
          <div className="flex justify-end  mr-5 md:mr-20 mt-10 mb-10">
            <p className="border-b-8 rounded-l-full border-gray-700 w-[90px] md:w-[180px]"></p>
            <p className="border-b-8 rounded-r-full border-gray-300 w-[60px]  md:w-[120px]"></p>
            <p className="hidden md:flex absolute mt-[-20px] font-extrabold text-[2rem] mr-80">
              {" "}
              60%
            </p>
          </div>
          <h1 className="w-3/4 md:w-auto font-bold  md:text-lg text-gray-600 ml-5 md:ml-20 mt-20">
            Personalize your Arab Health 2023 journey
          </h1>
          <p className="w-4/5 mt-4 text-[14px] md:w-[700px] font-normal ml-5 md:ml-20">
            Tell us a bit more about what you are interested in and what you are
            hoping to achieve at the event so we can tailor your experience
          </p>
          <p className=" mt-10 font-bold text-[15px] ml-5 md:ml-20">
            Reason for attending *
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[100px]  gap-y-5 ml-5 md:mx-20 mt-10">
            <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
              <input
                type="checkbox"
                name="one"
                value="Attend CME accredited conferences (paid)"
                className="w-5 h-5 md:w-4 md:h-4 "
                onChange={CheckOut1}
              />{" "}
              Attend CME accredited conferences (paid)
            </div>
            <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
              <input
                type="checkbox"
                name=" four"
                value="Purchase new products and services"
                onChange={CheckOut4}
                className="w-5 h-5 md:w-4 md:h-4"
              />{" "}
              Purchase new products and services
            </div>
            <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
              <input
                type="checkbox"
                name="  two"
                value="Keep up-to-date with new products/trends"
                onChange={CheckOut2}
                className="w-5 h-5 md:w-4 md:h-4"
              />{" "}
              Keep up-to-date with new products/trends
            </div>
            <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
              <input
                type="checkbox"
                name="three"
                value="  Attend workshops / training sessions"
                onChange={CheckOut3}
                className="w-5 h-5 md:w-4 md:h-4"
              />{" "}
              Attend workshops / training sessions
            </div>
            <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
              <input
                type="checkbox"
                name="five"
                value="Strengthen my relationship with my existing suppliers or partners"
                onChange={CheckOut5}
                className="w-5 h-5 md:w-4 md:h-4 p-0 "
              />{" "}
              <p className="md:absolute w-80  md:ml-8 mt-5 ">
                Strengthen my relationship with my existing suppliers or
                partners
              </p>
            </div>
            <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
              <input
                type="checkbox"
                name="six"
                value="Find new business partners and suppliers"
                onChange={CheckOut6}
                className="w-5 h-5 md:w-4 md:h-4 "
              />{" "}
              Find new business partners and suppliers
            </div>
          </div>
          <div className="w-4/5 md:w-2/4 ml-5 md:ml-[80px]">
            {inputs.four && (
              <div className="mt-[50px]">
                <p className="font-bold text-[14px] my-5">
                  When are you looking to purchase these products and services?
                  *
                </p>
                <div className=" grid grid-cols-1 md:grid-cols-2  gap-x-[100px] gap-y-5">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="During the event"
                      name="btn"
                      id="btn"
                      className="w-5 h-5 md:h-4 md:w-4"
                      onChange={radioChange}
                    />
                    <label htmlFor="btn" className="text-[13px] font-medium">
                      During the event
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="In the next 6 months"
                      name="btn"
                      id="btn2"
                      className="w-5 h-5 md:h-4 md:w-4"
                      onChange={radioChange}
                    />
                    <label for="btn2" className="text-[13px] font-medium">
                      In the next 6 months
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="In the next 3 months"
                      name="btn"
                      id="btn3"
                      className="w-5 h-5 md:h-4 md:w-4"
                      onChange={radioChange}
                    />
                    <label for="btn3" className="text-[13px] font-medium">
                      In the next 3 months
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="In the next 12 months"
                      name="btn"
                      id="btn3"
                      className="w-5 h-5 md:h-4 md:w-4"
                      onChange={radioChange}
                    />

                    <label for="btn3" className="text-[13px] font-medium">
                      In the next 12 months
                    </label>
                  </div>
                </div>
                <p className="font-bold w-4/4 md:w-auto text-[14px] mt-10 mb-5">
                  What is the value of the products / services you intend to
                  buy? *
                </p>
                <div className=" grid grid-cols-1 md:grid-cols-2  gap-x-[100px] gap-y-5">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="Less than $50,000"
                      name="btn2"
                      id="btn"
                      className="w-5 h-5 md:h-4 md:w-4"
                      onChange={radioChange2}
                    />
                    <label for="btn" className="text-[13px] font-medium">
                      Less than $50,000
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="$100,001 - 250,000"
                      name="btn2"
                      id="btn2"
                      onChange={radioChange2}
                      className="w-5 h-5 md:h-4 md:w-4"
                    />
                    <label for="btn2" className="text-[13px] font-medium">
                      $100,001 - 250,000
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="$50,001 - 100,000"
                      name="btn2"
                      id="btn3"
                      onChange={radioChange2}
                      className="w-5 h-5 md:h-4 md:w-4"
                    />
                    <label for="btn3" className="text-[13px] font-medium">
                      $50,001 - 100,000
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="$250,001 - 500,000"
                      name="btn2"
                      id="btn3"
                      onChange={radioChange2}
                      className="w-5 h-5 md:h-4 md:w-4"
                    />
                    <label for="btn3" className="text-[13px] font-medium">
                      $250,001 - 500,000
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
          {inputs.two && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 w-4/5 md:w-auto  md:ml-[80px] ">
                Which type of companies are you looking to meet at the show?
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-40 ml-5 mt-5 md:ml-[80px] gap-y-3">
                {subCheckBox3.map((department) => (
                  <Fragment key={department.id}>
                    <div className="flex  items-center gap-5">
                      <input
                        type="checkbox"
                        className="md:w-4 md:h-4 h-5 w-5"
                        value={department.name}
                        onChange={twoHandler}
                        name="companyChoice2"
                      />
                      <p className="font-medium text-[13px]">
                        {department.name}
                      </p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {inputs.six && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 w-4/5 md:w-auto  md:ml-[80px] ">
                Which type of companies are you looking to meet at the show?
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-40  ml-5 mt-5 md:ml-[80px] gap-y-3">
                {subCheckBox3.map((department) => (
                  <Fragment key={department.id}>
                    <div className="flex  items-center gap-5">
                      <input
                        type="checkbox"
                        className="md:w-4 md:h-4 h-5 w-5"
                        value={department.name}
                        onChange={sixHandler}
                        name="companyChoice"
                      />
                      <p className="font-medium text-[13px]">
                        {department.name}
                      </p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          <div>
            {inputs.five && (
              <Fragment>
                <p className="font-bold text-[14px] mt-[50px] ml-10 w-4/5 md:w-auto  md:ml-[80px] ">
                  Which type of companies are you looking to meet at the show?
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-40 ml-5 mt-5 md:ml-[80px] gap-y-3">
                  {subCheckBox3.map((department) => (
                    <Fragment key={department.id}>
                      <div className="flex  items-center gap-5">
                        <input
                          type="checkbox"
                          className="md:w-4 md:h-4 h-5 w-5"
                          value={department.name}
                          onChange={fiveHandler}
                          name="companyChoice3"
                        />
                        <p className="font-medium text-[13px]">
                          {department.name}
                        </p>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </Fragment>
            )}
            <p className=" ml-10 md:ml-[400px] mt-10 text-[red]">{valid17}</p>
          </div>
          <div className="mt-5 ml-10 md:ml-20">
            <h1 className="font-semibold text-[14px] text-gray-600 mt-20">
              What product sectors are you most interested in? Select as
              applicable *
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-[100px] ml-5  gap-y-5 md:mx-20 mt-10">
            <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
              <input
                type="checkbox"
                name="box1"
                value="Disposables"
                className="w-5 h-5 md:w-4 md:h-4"
                onChange={check2}
              />{" "}
              Disposables
            </div>

            <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
              <input
                type="checkbox"
                name="box2"
                value="Healthcare & General Services"
                onChange={check2}
                className="w-5 h-5 md:w-4 md:h-4 "
              />{" "}
              Healthcare & General Services
            </div>
            <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
              <input
                type="checkbox"
                name="box3"
                value="Imaging"
                onChange={check2}
                className="w-5 h-5 md:w-4 md:h-4 "
              />{" "}
              Imaging{" "}
            </div>
            <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
              <input
                type="checkbox"
                name="box5"
                value="Infrastructure"
                onChange={check2}
                className="w-5 h-5 md:w-4 md:h-4"
              />{" "}
              Infrastructure{" "}
            </div>

            <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
              <input
                type="checkbox"
                name="box6"
                value="IT"
                onChange={check2}
                className="w-5 h-5 md:w-4 md:h-4 p-0 "
              />{" "}
              <p>IT</p>
            </div>
            <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
              <input
                type="checkbox"
                name="box7"
                value="Laboratory"
                onChange={check2}
                className="w-5 h-5 md:w-4 md:h-4"
              />{" "}
              Laboratory{" "}
            </div>
            <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
              <input
                type="checkbox"
                name="box8"
                value="Medical Equipment "
                onChange={check2}
                className="w-5 h-5 md:w-4 md:h-4"
              />{" "}
              Medical Equipment{" "}
            </div>
            <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
              <input
                type="checkbox"
                name="box9"
                value="Orthopedic Devices"
                onChange={check2}
                className="w-5 h-5 md:w-4 md:h-4"
              />{" "}
              <p>Orthopedic Devices</p>
            </div>

            <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
              <input
                type="checkbox"
                name="box10"
                value="Physiotherapy/Rehabilitation/Mobility"
                onChange={check2}
                className="w-5 h-5 md:w-4 md:h-4"
              />{" "}
              Physiotherapy/Rehabilitation/Mobility{" "}
            </div>
          </div>
          {inputs.box1 && (
            <div>
              <p className="font-bold text-[14px] mt-10 ml-10 md:ml-[80px]">
                Disposables *
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-[100px]  gap-y-5 ml-10 md:mx-20 mt-3">
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="disposable1"
                    value="Disposables/Consumables"
                    onChange={disposable}
                    className="h-5 w-5 md:w-4 md:h-4 "
                  />{" "}
                  Disposables/Consumables{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="disposable2"
                    value="Disposables/Textiles"
                    onChange={disposable}
                    className="h-5 w-5 md:w-4 md:h-4 "
                  />{" "}
                  Disposables/Textiles{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="disposable3"
                    value="Disposables/Delivery and Access"
                    onChange={disposable}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  <p>Disposables/Delivery and Access</p>
                </div>

                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="disposable4"
                    value="Disposables/Wound Care"
                    onChange={disposable}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  Disposables/Wound Care{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="disposable5"
                    value="Disposables/Incontinence"
                    onChange={disposable}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  Disposables/Incontinence{" "}
                </div>
              </div>
            </div>
          )}
          {/* disposable  subCheckBoxes*/}
          {inputs.disposable1 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                Disposables/Consumables{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-10 md:ml-[80px] gap-y-3">
                {disposableArray.map((item) => (
                  <Fragment key={item.id}>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        className="h-5 w-5 md:w-4 md:h-4"
                        value={item.name}
                      />
                      <p className="font-medium text-[13px]">{item.name}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {inputs.disposable4 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                Disposables/Wound Care *
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-10 md:ml-[80px] gap-y-3">
                {disposableArray3.map((item) => (
                  <Fragment key={item.id}>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        className="h-5 w-5 md:w-4 md:h-4"
                        value={item.name}
                      />
                      <p className="font-medium text-[13px]">{item.name}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {inputs.disposable2 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                Disposables/Textiles *{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-10 md:ml-[80px] gap-y-3">
                {disposableArray2.map((item) => (
                  <Fragment key={item.id}>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        className="h-5 w-5 md:w-4 md:h-4"
                      />
                      <p className="font-medium text-[13px] w-4/5">
                        {item.name}
                      </p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {inputs.disposable3 && (
            <div>
              <p className="font-bold text-[14px] mt-10 ml-10 md:ml-[80px]">
                Disposables/Delivery and Access *
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[100px]  gap-y-5 ml-10 md:mx-20 mt-3">
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="subDisposable1"
                    value="  Cannulas, Syringes, Needles"
                    onChange={subCheck}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  Cannulas, Syringes, Needles
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="subDisposable2"
                    value=" Catheters, Tubes"
                    onChange={subCheck}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  Catheters, Tubes
                </div>
              </div>
            </div>
          )}
          {inputs.disposable5 && (
            <div>
              <p className="font-bold text-[14px] mt-10 ml-10 md:ml-[80px]">
                Disposables/Incontinence *
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[100px]  gap-y-5 ml-10 md:mx-20 mt-3">
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="subDisposable1"
                    value="Diapers, Underpads"
                    onChange={subCheck}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  Diapers, Underpads
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="subDisposable2"
                    value="Reusable Underwear"
                    onChange={subCheck}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  Reusable Underwear{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="subDisposable2"
                    value="Ostomy Aids"
                    onChange={subCheck}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  Ostomy Aids{" "}
                </div>
              </div>
            </div>
          )}
          {inputs.box2 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                Healthcare/General Services
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-10 md:ml-[80px] gap-y-3">
                {subCheckBox4.map((item) => (
                  <Fragment key={item.id}>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        name="HealthChild"
                        onChange={healthChild}
                        value={item.name}
                        className="w-5 h-5 md:w-4 md:h-4"
                      />
                      <p className="font-medium text-[13px] w-4/5">
                        {item.name}
                      </p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {inputs.box7 && (
            <div>
              <p className="font-bold text-[14px] mt-10 ml-10 md:ml-[80px]">
                Laboratory *
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[100px]  gap-y-5 ml-10 md:mx-20 mt-3">
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="laboratory1"
                    value="Laboratory/Devices"
                    onChange={laboratory}
                    className="h-5 w-5 md:w-4 md:h-4 "
                  />{" "}
                  Laboratory/Devices{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="laboratory2"
                    value="Laboratory/Reagents"
                    onChange={laboratory}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  Laboratory/Reagents{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="laboratory3"
                    value="Laboratory/Disposables"
                    onChange={laboratory}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  Laboratory/Disposables{" "}
                </div>

                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="laboratory4"
                    value="Laboratory/Sterilisation"
                    onChange={laboratory}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  Laboratory/Sterilisation{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="laboratory5"
                    value="Laboratory/Equipment"
                    onChange={laboratory}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  Laboratory/Equipment{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="laboratory6"
                    value="Laboratory/Tests"
                    onChange={laboratory}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  Laboratory/Tests{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="laboratory7"
                    value="Laboratory/Instruments"
                    onChange={laboratory}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  Laboratory/Instruments{" "}
                </div>
              </div>
            </div>
          )}
          {/* Laboratory subCheckBoxes */}
          {inputs.laboratory1 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                Laboratory/Device *{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-10 md:ml-[80px] gap-y-3">
                {laboratory1.map((item) => (
                  <Fragment>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        name="Laboratory1"
                        onChange={laboratoryChild1}
                        value={item.name}
                        className="h-5 w-5 md:w-4 md:h-4"
                      />
                      <p className="font-medium text-[13px]">{item.name}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}{" "}
          {inputs.laboratory3 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                Laboratory/Disposables *{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-10 md:ml-[80px] gap-y-3">
                {laboratory2.map((item) => (
                  <Fragment>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        name="Laboratory2"
                        onChange={laboratoryChild2}
                        value={item.name}
                        className="h-5 w-5 md:w-4 md:h-4"
                      />
                      <p className="font-medium text-[13px]">{item.name}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {inputs.laboratory5 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                Laboratory/Equipment *{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-10 md:ml-[80px] gap-y-3">
                {laboratory3.map((item) => (
                  <Fragment>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        name="Laboratory3"
                        onChange={laboratoryChild3}
                        value={item.name}
                        className="h-5 w-5 md:w-4 md:h-4"
                      />
                      <p className="font-medium text-[13px]">{item.name}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {inputs.laboratory7 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px]  ml-10 md:ml-[80px]">
                Laboratory/Instruments *{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10  ml-10 md:ml-[80px] gap-y-3">
                {laboratory4.map((item) => (
                  <Fragment>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        name="Laboratory4"
                        onChange={laboratoryChild4}
                        value={item.name}
                        className="h-5 w-5 md:w-4 md:h-4"
                      />
                      <p className="font-medium text-[13px]">{item.name}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {inputs.laboratory2 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                Laboratory/Reagents *{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-10 md:ml-[80px] gap-y-3">
                {laboratory5.map((item) => (
                  <Fragment>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        name="Laboratory5"
                        onChange={laboratoryChild5}
                        value={item.name}
                        className="h-5 w-5 md:w-4 md:h-4"
                      />
                      <p className="font-medium text-[13px]">{item.name}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {inputs.laboratory4 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                Laboratory/Sterilisation *{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-10 md:ml-[80px] gap-y-3">
                {laboratory6.map((item) => (
                  <Fragment>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        name="Laboratory6"
                        onChange={laboratoryChild6}
                        value={item.name}
                        className="h-5 w-5 md:w-4 md:h-4"
                      />
                      <p className="font-medium text-[13px]">{item.name}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {inputs.laboratory6 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                Laboratory/Tests *{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-10 md:ml-[80px] gap-y-3">
                {laboratory7.map((item) => (
                  <Fragment>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        name="Laboratory7"
                        onChange={laboratoryChild7}
                        value={item.name}
                        className="h-5 w-5 md:w-4 md:h-4"
                      />
                      <p className="font-medium text-[13px]">{item.name}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {/* Laboratory subCheckBoxes */}
          {inputs.box8 && (
            <div>
              <p className="font-bold text-[14px] mt-10 ml-10 md:ml-[80px]">
                Medical Equipment *
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[100px]  gap-y-5 ml-10 md:mx-20 mt-3">
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="equipment1"
                    value="Medical Equipment/Aesthetic"
                    onChange={equipment}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  Medical Equipment/Aesthetic{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="equipment2"
                    value="Medical Equipment/Dental"
                    onChange={equipment}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  Medical Equipment/Dental{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="equipment3"
                    value="Medical Equipment/Endoscopes"
                    onChange={equipment}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  Medical Equipment/Endoscopes{" "}
                </div>

                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="equipment4"
                    value="Medical Equipment/ENT"
                    onChange={equipment}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  Medical Equipment/ENT{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="equipment5"
                    value="Medical Equipment/Infant Care"
                    onChange={equipment}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  Medical Equipment/Infant Care{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="equipment6"
                    value="Medical Equipment/Life Support"
                    onChange={equipment}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  Medical Equipment/Life Support{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="equipment7"
                    value="Medical Equipment/Other"
                    onChange={equipment}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  Medical Equipment/Other{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="equipment8"
                    value="Medical Equipment/Patient Monitoring"
                    onChange={equipment}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  Medical Equipment/Patient Monitoring{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="equipment9"
                    value="Medical Equipment/Surgical Instruments"
                    onChange={equipment}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  Medical Equipment/Surgical Instruments{" "}
                </div>
              </div>
            </div>
          )}
          {/* Equipment subCheckBoxes */}
          {inputs.equipment1 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                Medical Equipment/Aesthetic *{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-10 md:ml-[80px] gap-y-3">
                {equipmentArray1.map((item) => (
                  <Fragment>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        onChange={medicalChild}
                        value={item.name}
                        name="MedicalChild"
                        className="h-5 w-5 md:w-4 md:h-4"
                      />
                      <p className="font-medium text-[13px]">{item.name}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {inputs.equipment2 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                Medical Equipment/Dental *{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-10 md:ml-[80px] gap-y-3">
                {equipmentArray2.map((item) => (
                  <Fragment>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        onChange={medicalChild2}
                        value={item.name}
                        name="MedicalChild2"
                        className="h-5 w-5 md:w-4 md:h-4"
                      />
                      <p className="font-medium text-[13px]">{item.name}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {inputs.equipment3 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                Medical Equipment/Endoscopes *{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-10 md:ml-[80px] gap-y-3">
                {equipmentArray3.map((item) => (
                  <Fragment>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        onChange={medicalChild3}
                        value={item.name}
                        name="MedicalChild3"
                        className="h-5 w-5 md:w-4 md:h-4"
                      />
                      <p className="font-medium text-[13px] w-4/5">
                        {item.name}
                      </p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {inputs.equipment4 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                Medical Equipment/ENT *{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-10 md:ml-[80px] gap-y-3">
                {equipmentArray4.map((item) => (
                  <Fragment>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        onChange={medicalChild4}
                        value={item.name}
                        name="MedicalChild4"
                        className="h-5 w-5 md:w-4 md:h-4"
                      />
                      <p className="font-medium text-[13px]">{item.name}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {inputs.equipment5 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                Medical Equipment/Infant Care *{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-10 md:ml-[80px] gap-y-3">
                {equipmentArray5.map((item) => (
                  <Fragment>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        onChange={medicalChild5}
                        value={item.name}
                        name="MedicalChild5"
                        className="h-5 w-5 md:w-4 md:h-4"
                      />
                      <p className="font-  text-[13px]">{item.name}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {inputs.equipment6 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                Medical Equipment/Life Support *{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-10 md:ml-[80px] gap-y-3">
                {equipmentArray6.map((item) => (
                  <Fragment>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        onChange={medicalChild6}
                        value={item.name}
                        name="MedicalChild6"
                        className="h-5 w-5 md:w-4 md:h-4"
                      />
                      <p className="font-medium text-[13px] w-4/5">
                        {item.name}
                      </p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {inputs.equipment7 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                Medical Equipment/Other *{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-10 md:ml-[80px] gap-y-3">
                {equipmentArray7.map((item) => (
                  <Fragment>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        onChange={medicalChild7}
                        value={item.name}
                        name="MedicalChild7"
                        className="h-5 w-5 md:w-4 md:h-4"
                      />
                      <p className="font-medium text-[13px]">{item.name}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {inputs.equipment8 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                Medical Equipment/Patient Monitoring *{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-10 md:ml-[80px] gap-y-3">
                {equipmentArray8.map((item) => (
                  <Fragment>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        onChange={medicalChild8}
                        value={item.name}
                        name="MedicalChild8"
                        className="h-5 w-5 md:w-4 md:h-4"
                      />
                      <p className="font-medium text-[13px]">{item.name}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {inputs.equipment9 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                Medical Equipment/Surgical Instruments *{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-10 md:ml-[80px] gap-y-3">
                {equipmentArray9.map((item) => (
                  <Fragment>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        onChange={medicalChild9}
                        value={item.name}
                        name="MedicalChild9"
                        className="h-5 w-5 md:w-4 md:h-4"
                      />
                      <p className="font-medium text-[13px]">{item.name}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {/* Equipment subCheckBoxes */}
          {inputs.box3 && (
            <div>
              <p className="font-bold text-[14px] mt-10 ml-10 md:ml-[80px] ">
                Imaging *
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[100px]  gap-y-5 ml-10 md:mx-20 mt-3">
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="image1"
                    value="Imaging/Diagnostic and Therapy"
                    onChange={imaging}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  Imaging/Diagnostic and Therapy{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="image2"
                    value="Imaging/Diagnostic and Therapy"
                    onChange={imaging}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  Imaging/Diagnostic and Therapy{" "}
                </div>
              </div>
            </div>
          )}
          {/* Imaging subCheckBoxes */}
          {inputs.image1 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                Imaging/Diagnostic and Therapy *{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-10 md:ml-[80px] gap-y-3">
                {imaging1.map((item) => (
                  <Fragment key={item.id}>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        name="ImagingChild"
                        value={item.name}
                        onChange={imagingChild}
                        className="h-5 w-5 md:w-4 md:h-4"
                      />
                      <p className="font-medium text-[13px] w-4/5">
                        {item.name}
                      </p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {inputs.image2 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                Imaging/Radiation *{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-10 md:ml-[80px] gap-y-3">
                {imaging2.map((item) => (
                  <Fragment>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        className="h-5 w-5 md:w-4 md:h-4"
                      />
                      <p className="font-medium text-[13px] w-4/5">
                        {item.name}
                      </p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {/* Imaging subCheckBoxes */}
          {inputs.box9 && (
            <div>
              <p className="font-bold text-[14px] mt-10 ml-10 md:ml-[80px]">
                Orthopaedic Devices *
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[100px]  gap-y-5 ml-10 md:mx-20 mt-3">
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="Orthopaedic1"
                    value="   Orthopaedic Devices/Compression"
                    onChange={Orthopaedic}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  Orthopaedic Devices/Compression{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="Orthopaedic2"
                    value=" Orthopaedic Devices/Equipment"
                    onChange={Orthopaedic}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  Orthopaedic Devices/Equipment{" "}
                </div>
              </div>
            </div>
          )}
          {/* Orthopaedic subCheckBoxes */}
          {inputs.Orthopaedic1 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                Orthopaedic Devices/Compression *{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-10 md:ml-[80px] gap-y-3">
                {orthopaedicArray1.map((item) => (
                  <Fragment key={item.id}>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        name="OrthopaedicChild1"
                        value={item.name}
                        onChange={orthopaedicChild1}
                        className="h-5 w-5 md:w-4 md:h-4"
                      />
                      <p className="font-medium text-[13px]">{item.name}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {inputs.Orthopaedic2 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                Orthopaedic Devices/Compression *{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-10 md:ml-[80px] gap-y-3">
                {orthopaedicArray2.map((item) => (
                  <Fragment key={item.id}>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        name="OrthopaedicChild2"
                        value={item.name}
                        onChange={orthopaedicChild2}
                        className="h-5 w-5 md:w-4 md:h-4"
                      />
                      <p className="font-medium text-[13px]">{item.name}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {/* Orthopaedic subCheckBoxes */}
          {inputs.box6 && (
            <div>
              <p className="font-bold text-[14px] mt-10 ml-10 md:ml-[80px]">
                IT *
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[100px]  gap-y-5 ml-10 md:mx-20 mt-3">
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="it1"
                    value="IT/Applications"
                    onChange={it}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  IT/Applications{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="it2"
                    value="IT/Hospital Information Systems"
                    onChange={it}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  IT/Hospital Information Systems{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="it3"
                    value="IT/Bar Coding Solutions"
                    onChange={it}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  IT/Bar Coding Solutions{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="it4"
                    value="IT/Laboratory Automation Systems"
                    onChange={it}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  IT/Laboratory Automation Systems{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="it5"
                    value="IT/Cloud Security"
                    onChange={it}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  IT/Cloud Security{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="it6"
                    value="IT/Laboratory Data Management/Analysis"
                    onChange={it}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  IT/Laboratory Data Management/Analysis{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="it7"
                    value="IT/Data Analytics"
                    onChange={it}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  IT/Data Analytics{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="it8"
                    value="IT/Software and Mobile Content"
                    onChange={it}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  IT/Software and Mobile Content{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="it9"
                    value="IT/Data Warehousing"
                    onChange={it}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  IT/Data Warehousing{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="it10"
                    value="IT/Telecom"
                    onChange={it}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  IT/Telecom{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="it11"
                    value="IT/Hardware"
                    onChange={it}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  IT/Hardware
                </div>
              </div>
            </div>
          )}
          {/* IT subCheckBoxes */}
          {inputs.it1 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                IT/Applications *{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-10 md:ml-[80px] gap-y-3">
                {itArray1.map((item) => (
                  <Fragment key={item.id}>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        onChange={itChild}
                        name="ItChild10"
                        value={item.name}
                        className="h-5 w-5 md:w-4 md:h-4"
                      />
                      <p className="font-medium text-[13px] w-4/5">
                        {item.name}
                      </p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {inputs.it3 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                IT/Bar Coding Solutions *{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-10 md:ml-[80px] gap-y-3">
                {itArray2.map((item) => (
                  <Fragment key={item.id}>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        name="itChild9"
                        onChange={itChild}
                        value={item.name}
                        className="h-5 w-5 md:w-4 md:h-4"
                      />
                      <p className="font-medium text-[13px] w-4/5">
                        {item.name}
                      </p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {inputs.it5 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                IT/Cloud Security *{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-10 md:ml-[80px] gap-y-3">
                {itArray3.map((item) => (
                  <Fragment key={item.id}>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        name="itChild8"
                        onChange={itChild}
                        value={item.name}
                        className="w-4 h-4"
                      />
                      <p className="font-medium text-[13px]">{item.name}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {inputs.it7 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                IT/Data Analytics *{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10  ml-10 md:ml-[80px] gap-y-3">
                {itArray4.map((item) => (
                  <Fragment key={item.id}>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        name="itChild7"
                        onChange={itChild}
                        value={item.name}
                        className="h-5 w-5 md:w-4 md:h-4"
                      />
                      <p className="font-medium text-[13px]">{item.name}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {inputs.it9 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                IT/Data Warehousing *{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-10 md:ml-[80px] gap-y-3">
                {itArray5.map((item) => (
                  <Fragment key={item.id}>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        name="itChild6"
                        onChange={itChild}
                        value={item.name}
                        className="h-5 w-5 md:w-4 md:h-4"
                      />
                      <p className="font-medium text-[13px]">{item.name}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {inputs.it11 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                IT/Hardware *{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-10 md:ml-[80px] gap-y-3">
                {itArray6.map((item) => (
                  <Fragment key={item.id}>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        name="itChild5"
                        onChange={itChild}
                        value={item.name}
                        className="h-5 w-5 md:w-4 md:h-4"
                      />
                      <p className="font-medium text-[13px]">{item.name}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {inputs.it2 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                IT/Hospital Information Systems *{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10  ml-10 md:ml-[80px] gap-y-3">
                {itArray7.map((item) => (
                  <Fragment key={item.id}>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        name="itChild4"
                        onChange={itChild}
                        value={item.name}
                        className="h-5 w-5 md:w-4 md:h-4"
                      />
                      <p className="font-medium text-[13px] w-4/5">
                        {item.name}
                      </p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {inputs.it4 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                IT/Laboratory Automation Systems *{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-10 md:ml-[80px] gap-y-3">
                {itArray8.map((item) => (
                  <Fragment key={item.id}>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        name="itChild3"
                        onChange={itChild}
                        value={item.name}
                        className="h-5 w-5 md:w-4 md:h-4"
                      />
                      <p className="font-medium text-[13px]">{item.name}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {inputs.it6 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                IT/Laboratory Data Management/ Analysis *{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-10 md:ml-[80px] gap-y-3">
                {itArray9.map((item) => (
                  <Fragment key={item.id}>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        name="itChild2"
                        onChange={itChild}
                        value={item.name}
                        className="h-5 w-5 md:w-4 md:h-4"
                      />
                      <p className="font-medium text-[13px]">{item.name}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {inputs.it8 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                IT/Software and Mobile Content *{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-10 md:ml-[80px] gap-y-3">
                {itArray10.map((item) => (
                  <Fragment key={item.id}>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        className="h-5 w-5 md:w-4 md:h-4"
                        name="itChild1"
                        onChange={itChild}
                        value={item.name}
                      />
                      <p className="font-medium text-[13px] w-4/5">
                        {item.name}
                      </p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {inputs.it10 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                IT/Telecom *{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-10 md:ml-[80px] gap-y-3">
                {itArray11.map((item) => (
                  <Fragment key={item.id}>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        className="h-5 w-5 md:w-4 md:h-4"
                      />
                      <p className="font-medium text-[13px] w-4/5">
                        {item.name}
                      </p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {/* IT subCheckBoxes */}
          {inputs.box5 && (
            <div>
              <p className="font-bold text-[14px] mt-10 ml-10 md:ml-[80px]">
                Infrastructure *
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[100px]  gap-y-5 ml-10 md:mx-20 mt-3">
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="infrastructure1"
                    value="Infrastructure/Construction and Design"
                    onChange={infrastructure}
                    className="w-5 h-5 md:w-4 md:h-4 "
                  />{" "}
                  Infrastructure/Construction and Design{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="infrastructure2"
                    value="Infrastructure/Kitchen"
                    onChange={infrastructure}
                    className="w-5 h-5 md:w-4 md:h-4 "
                  />{" "}
                  Infrastructure/Kitchen{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="infrastructure3"
                    value="Infrastructure/Hygiene"
                    onChange={infrastructure}
                    className="w-5 h-5 md:w-4 md:h-4 "
                  />{" "}
                  Infrastructure/Hygiene{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="infrastructure4"
                    value="Infrastructure/Supply and Waste"
                    onChange={infrastructure}
                    className="w-5 h-5 md:w-4 md:h-4 "
                  />{" "}
                  Infrastructure/Supply and Waste{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="infrastructure5"
                    value="Infrastructure/Interior and Furniture"
                    onChange={infrastructure}
                    className="w-5 h-5 md:w-4 md:h-4 "
                  />{" "}
                  Infrastructure/Interior and Furniture{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="infrastructure6"
                    value="Infrastructure/Transport"
                    onChange={infrastructure}
                    className="w-5 h-5 md:w-4 md:h-4 "
                  />{" "}
                  Infrastructure/Transport{" "}
                </div>
              </div>
            </div>
          )}
          {/* Infrastructure subCheckBoxes*/}
          {inputs.infrastructure1 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                Infrastructure/Construction and Design *{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-10 md:ml-[80px] gap-y-3">
                {itArray12.map((item) => (
                  <Fragment key={item.id}>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        onChange={infrastructureChild}
                        name="infrastructureChild6"
                        value={item.name}
                        className="w-5 h-5 md:w-4 md:h-4 "
                      />
                      <p className="font-medium text-[13px]">{item.name}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {inputs.infrastructure3 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                Infrastructure/Hygien *{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-10 md:ml-[80px] gap-y-3">
                {itArray13.map((item) => (
                  <Fragment key={item.id}>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        onChange={infrastructureChild}
                        name="infrastructureChild5"
                        value={item.name}
                        className="w-5 h-5 md:w-4 md:h-4 "
                      />
                      <p className="font-medium text-[13px] w-4/5">
                        {item.name}
                      </p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {inputs.infrastructure5 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                Infrastructure/Interior and Furniture *{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-10 md:ml-[80px] gap-y-3">
                {itArray14.map((item) => (
                  <Fragment key={item.id}>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        onChange={infrastructureChild}
                        name="infrastructureChild4"
                        value={item.name}
                        className="w-5 h-5 md:w-4 md:h-4 "
                      />
                      <p className="font-medium text-[13px]">{item.name}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {inputs.infrastructure2 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                Infrastructure/Kitchen *{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-10 md:ml-[80px] gap-y-3">
                {itArray15.map((item) => (
                  <Fragment key={item.id}>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        onChange={infrastructureChild}
                        name="infrastructureChild3"
                        value={item.name}
                        className="w-5 h-5 md:w-4 md:h-4 "
                      />
                      <p className="font-medium text-[13px]">{item.name}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {inputs.infrastructure4 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-10 md:ml-[80px] ">
                Infrastructure/Supply and Waste *{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10  ml-10 md:ml-[80px] gap-y-3">
                {itArray16.map((item) => (
                  <Fragment>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        className="w-5 h-5 md:w-4 md:h-4 "
                        onChange={infrastructureChild}
                        name="infrastructureChild1"
                        value={item.name}
                      />
                      <p className="font-medium text-[13px] w-3/4">
                        {item.name}
                      </p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {inputs.infrastructure6 && (
            <Fragment>
              <p className="font-bold text-[14px] mt-[50px] ml-[80px] ">
                Infrastructure/Transport *{" "}
              </p>
              <div className="grid grid-cols-2 mt-10  ml-[80px] gap-y-3">
                {itArray17.map((item) => (
                  <Fragment>
                    <div className="flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        onChange={infrastructureChild}
                        name="infrastructureChild2"
                        value={item.name}
                        className="w-4 h-4"
                      />
                      <p className="font-medium text-[13px] w-3/4">
                        {item.name}
                      </p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )}
          {/* Infrastructure subCheckBoxes*/}
          {inputs.box10 && (
            <div>
              <p className="font-bold text-[14px] mt-10 ml-10 md:ml-[80px]">
                Physiotherapy/Rehabilitation/Mobility *
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[100px]  gap-y-5 ml-10 md:mx-20 mt-3">
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="subBox1"
                    value="  Physiotherapy/Rehabilitation/Mobility"
                    onChange={subCheck}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  Physiotherapy/Rehabilitation/Mobility{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="subBox2"
                    value="Physiotherapeutic Massage Equipment"
                    onChange={subCheck}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  Physiotherapeutic Massage Equipment{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="subBox3"
                    value="Rehabilitation Equipment, Devices"
                    onChange={subCheck}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  Rehabilitation Equipment, Devices{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="subBox4"
                    value="Scooters, Rollators, Walkers, Wheelchairs"
                    onChange={subCheck}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  Scooters, Rollators, Walkers, Wheelchairs{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="subBox5"
                    value="Support Handles"
                    onChange={subCheck}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  Support Handles{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="subBox6"
                    value="ISupport Handles"
                    onChange={subCheck}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  Support Handles{" "}
                </div>
                <div className="gap-5 flex items-center text-[13px] font-medium tracking-wide">
                  <input
                    type="checkbox"
                    name="subBox7"
                    value="Transfer Rolls, Pivot Disks"
                    onChange={subCheck}
                    className="h-5 w-5 md:w-4 md:h-4"
                  />{" "}
                  Transfer Rolls, Pivot Disks
                </div>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
