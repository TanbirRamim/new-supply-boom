import React from "react";
import CountUp from "react-countup";
import { FcBusinessman } from "react-icons/fc";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
const BusinessSumarry = () => {
  return (
    <div className="mt-2 ">
      <hr />
      <div className="flex items-evenly justify-evenly ">
        <div className=" ">
          <FcBusinessman className="mx-auto text-6xl"></FcBusinessman>
          <small>
            <i className="text-2xl">COUNTRIES</i>
          </small>
          <br />
          <div className="flex items-center">
            <CountUp className="mx-auto " end={40} duration={6}></CountUp>
            <AiOutlinePlus></AiOutlinePlus>
          </div>
        </div>
        <div className="">
          <MdProductionQuantityLimits className="mx-auto text-6xl"></MdProductionQuantityLimits>
          <small>
            <i className="text-2xl">Items</i>
          </small>
          <br />
          <div className="flex items-center">
            <CountUp className="mx-auto" end={6100} duration={6}></CountUp>
            <AiOutlinePlus></AiOutlinePlus>
          </div>
        </div>
        <div className="">
          <FaUsers className="mx-auto text-6xl"></FaUsers>
          <small>
            <i className=" text-2xl">CUSTOMERS</i>
          </small>
          <br />
          <div className="flex justify-center items-center">
            <CountUp className="mx-auto" end={20000} duration={6}></CountUp>
            <AiOutlinePlus></AiOutlinePlus>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default BusinessSumarry;
