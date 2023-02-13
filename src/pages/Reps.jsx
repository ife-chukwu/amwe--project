import React from 'react'
import { Link } from 'react-router-dom';

import repsData from '../components/RepsData'

const Reps = () => {
  return (
    <div className="relative mt-32 md:mt-0 w-full p-5 md:p-10 md:w-2/3 m-auto">
      <h1 className="font-bold md:text-center text-2xl text-[#0F2F63]">
        Our Global Representatives
      </h1>
      <p className="md:text-center text-[#0F2F63]">
        Click on the countries to see details
      </p>
      <div className="grid md:grid-cols-2 md:place-items-center m-auto gap-3 mt-10 border-t pt-5">
        {repsData.map((data) => (
          <div className="flex gap-5 items-center hover:underline transition-all duration-500 hover:scale-105" key={data.id}>
            <Link to={data.id} ><h1>{data.country}</h1></Link>
            <figure className="w-[50px]">
              <img src={data.country_flag} alt="" />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reps