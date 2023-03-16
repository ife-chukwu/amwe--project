import React from 'react'
import error from "../images/404-error.png";

const ErrorPage = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-full flex flex-col items-center justify-center ">
        <img src={error} alt="" className='w-[300px]  md:w-[300px] '/>
        <p className='text-2xl font-bold tracking-widest'>Oops, this page could not be found</p>
      </div>
    </div>
  );
}

export default ErrorPage