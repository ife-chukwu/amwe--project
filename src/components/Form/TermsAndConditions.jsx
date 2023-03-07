import React, { useContext , useEffect} from "react";
import { myContextApi } from "../../ContextApi";

export const TermsAndConditions = () => {
  const { handleDefault, handleTermsChange, state4 } = useContext(myContextApi);
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [state4]);
  return (
    <div className="overflow-hidden">
      <form onSubmit={handleDefault}>
        <div>
          <div className="flex justify-end  mr-[30px] md:mr-10 mt-10 mb-10">
            <p className="border-b-8 rounded-l-full border-gray-700 w-[125px] md:w-[250px]"></p>
            <p className="border-b-8 rounded-r-full border-gray-300 w-[25px] md:w-[50px]"></p>
            <p className="absolute mt-[-20px] font-extrabold text-[2rem] mr-80 hidden md:flex">
              {" "}
              80%
            </p>
          </div>
          <div className="w-4/5  ml-10 md:w-auto mx-5">
            <h1 className="  md:ml-auto font-semibold md:text-lg mb-3">
              Attendee Terms & Conditions *
            </h1>{" "}
            <div className="items-center flex gap-4 md:text-lg font-medium">
              <input
                type="checkbox"
                onChange={handleTermsChange}
                name="attendee"
                value="I have read and accept the attendee terms & conditions"
                className=" w-5 h-5 md:w-5 md:h-5"
              />{" "}
              <p className="w-4/5">
                I have read and accept the{" "}
                <a href="#" className="underline px-1">
                  attendee terms & conditions
                </a>
              </p>
            </div>
            <p className="font-semibold text-[14px] my-5 md:ml-0 md:text-lg">
              Privacy Terms
            </p>
            <p className="md:w-4/5 ml-5 md:ml-0  font-normal md:text-lg">
              By continuing to register, you accept that Arab Health 2023, may
              contact you with updates, relevant promotions and information
              about future events provided by Informa Markets. Your details may
              be shared with the event sponsors, who may contact you about their
              products and services. *
            </p>
            <div className="flex items-center gap-4 my-5 md:text-lg font-medium">
              <input
                type="checkbox"
                onChange={handleTermsChange}
                name="privacy"
                value="I have accept the attendee terms & conditions and the Privacy Terms"
                className="w-5 h-5 md:w-5 md:h-5"
              />{" "}
              <p className="w-4/5 md:ml-0">
                I have accept the{" "}
                <a href="#" className="underline px-1">
                  attendee terms & conditions
                </a>{" "}
                and the{" "}
                <a href="#" className="underline px-1">
                  Privacy Terms{" "}
                </a>
              </p>
            </div>
            <p className=" font-medium md:text-lg">Privacy Notice</p>
            <p className="ml-5 md:ml-0 md:w-4/5 my-5 font-normal md:text-lg">
              When attending our live/in-person events, by scanning a sponsored
              QR code or by allowing your badge to be scanned by an exhibitor or
              sponsor, or by allowing your badge to be scanned during a
              sponsored session, you are providing the exhibitor or sponsor with
              your personal information and in doing so agree to the exhibitor
              or sponsor contacting you in the future about their products or
              services. You understand that you can opt-out of this contact at
              any time by contacting the exhibitor or sponsor. Badges cannot be
              read remotely and must be scanned before any details are shared
              with exhibitors and sponsors. You have the right to refuse badge
              scanning except when entering Arab Health 2023.{" "}
            </p>
            <p className="ml-5 md:ml-0  md:w-4/5  my-5  font-normal md:text-lg">
              When attending our online events, if you accept a
              connection/meeting request or exchange messages in the chat, your
              personal information will be shared with the exhibitor to allow
              them to engage with you both during and after the event. If you
              attend a sponsored session in the online platform then your full
              contact details will be shared directly with the sponsor or
              exhibitor and they may follow-up in line with your indication of
              interest in their products.
            </p>
            <div className="items-center flex gap-4 my-5">
              <input
                type="checkbox"
                onChange={handleTermsChange}
                name="notice"
                value="I have read and understood the Event Data Sharing Privacy Notice"
                className="w-5 h-5 md:w-5 md:h-5"
              />{" "}
              <p className="w-4/5 md:text-lg font-medium">
                I have read and understood the Event Data Sharing Privacy Notice
              </p>
            </div>
            <p className="ml-5 md:ml-0 md:w-4/5   italic font-normal md:text-lg">
              You can opt out of hearing from us at any time by clicking the
              unsubscribe link in our emails or contacting us. To understand how
              we use your data, please see our{" "}
              <a href="#" className="underline">
                {" "}
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
