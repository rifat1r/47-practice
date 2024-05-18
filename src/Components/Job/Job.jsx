import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import React from 'react';
import { Link } from "react-router-dom";

const Job = ({job}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary} = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img src={logo} /></figure>
        <div className="card-body">
          <h2  className="card-title">{job_title}</h2>
          <p className="flex items-start">{company_name}</p>
          <div className="flex items-start">
            <button className='border border-[#7E90FE] px-5 py-2 rounded-lg text-[#7E90FE] font-bold mr-4'>{remote_or_onsite}</button>
            <button className='border border-[#7E90FE] px-5 py-2 rounded-lg text-[#7E90FE] font-bold'>{job_type}</button>
          </div>
          <div className='flex mt-4'>
            <h2 className="flex mr-2 items-center"> <IoLocationOutline className="text-2xl"></IoLocationOutline>{location}</h2>
            <h2 className="flex items-center"> <HiOutlineCurrencyDollar className="text-2xl"></HiOutlineCurrencyDollar>{salary}</h2>
          </div>
          <div className="card-actions">
            <Link to={`/job/${id}`}>
            <button className="btn btn-primary">View Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Job;