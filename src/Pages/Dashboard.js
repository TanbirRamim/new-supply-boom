import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div>
      <div className="drawer drawer-mobile lg:mt-36">
        <input id="dashboard-bar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col  ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-bar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-48 bg-base-200 text-base-content">
            <li>
              <Link to="/dashBoard"> My Orders</Link>
            </li>
            <li>
              <Link to="/dashBoard/addReview"> Add review</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
