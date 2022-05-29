import React from "react";
import Tanbir from "../Images/Tanbir.jpg";
const MyPortfolio = () => {
  return (
    <div className="mt-36 ">
      <div class="hero min-h-screen ">
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
            <h1 className="text-2xl">
              <span className="text-blue-400">Email:</span>{" "}
              Tanbirramim@gmail.com
            </h1>
            <h1 className="text-2xl">
              <span className="text-blue-400">address:</span> Brooklyn house,
              NYC
            </h1>
            <h1 className="text-2xl">
              <span className="text-blue-400">Educational Background:</span> Bsc
              in Cse
            </h1>
            <h1 className="text-2xl text-blue-400">list of technologies:</h1>
            <ul>
              <li>html</li>
              <li>css</li>
              <li>bootstrap</li>
              <li>tailwind</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Node</li>
              <li>Mongo</li>
              <li>Express</li>
              <li>Daisy UI</li>
              <li>Github</li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-center text-4xl">Some of my works </h1>

            <a href="https://wpm-checker-by-ramim.netlify.app/">
              {" "}
              1. <span className="text-blue-400">Wpm Checker</span>
            </a>
            <a href="https://precious-cheesecake-6f3d5c.netlify.app/">
              {" "}
              2. <span className="text-blue-400">Career coach</span>
            </a>
            <a href="https://stirring-bombolone-47e5d5.netlify.app/">
              {" "}
              2. <span className="text-blue-400">E-commerce</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
