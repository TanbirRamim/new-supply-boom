import React from "react";
import CountUp from "react-countup";
import { FcBusinessman } from "react-icons/fc";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
const BusinessSumarry = () => {
  return (
    <div className="container">
      <hr />
      <div className="d-flex align-items-center justify-evenly ">
        <div className="fs-1 ">
          <FcBusinessman className="mx-auto"></FcBusinessman>
          <small>
            <i>SUPPLIER</i>
          </small>
          <br />
          <div className="d-flex align-items-center">
            {" "}
            <CountUp className="mx-auto " end={100} duration={5}></CountUp>
            <AiOutlinePlus></AiOutlinePlus>
          </div>
        </div>
        <div className="fs-1">
          <MdProductionQuantityLimits className="mx-auto"></MdProductionQuantityLimits>
          <small>
            <i>Items</i>
          </small>
          <br />
          <div className="d-flex align-items-center">
            {" "}
            <CountUp className="mx-auto" end={6100} duration={6}></CountUp>
            <AiOutlinePlus></AiOutlinePlus>
          </div>
        </div>
        <div className="fs-1">
          <FaUsers className="mx-auto"></FaUsers>
          <small>
            <i>USERS</i>
          </small>
          <br />
          <div className="d-flex align-items-center">
            {" "}
            <CountUp className="mx-auto" end={2000} duration={4}></CountUp>
            <AiOutlinePlus></AiOutlinePlus>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default BusinessSumarry;
