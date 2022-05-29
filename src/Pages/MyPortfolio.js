import React from "react";
import Tanbir from "../Images/Tanbir.jpg";
const MyPortfolio = () => {
  return (
    <div className="mt-18">
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col  ">
          <img
            style={{ height: "400px", width: "400px", borderRadius: "50%" }}
            src={Tanbir}
            class="max-w-sm  shadow-2xl"
          />
          <div className="flex flex-col items-center content-center">
            <h1 class="text-5xl font-bold">Tanbir Hossain Ramim</h1>
            <p class="py-6">
              Hello, Everyone. I'm a junior front end developer, trying to
              become a full stack one. My goal is to do something very
              significant within 2022. The developing journey I started in 31
              December, 2021.. I want to make this decision very special. My
              mentor is Jhankar Mahbub, His works inspire me all the time. I
              have done some projects related to my environment. Anyone with a
              github account can access my works, except some confidential
              projects. Do pray for me, I will make you proud one day!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
