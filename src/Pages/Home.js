import React from "react";
import BusinessSumarry from "./BusinessSumarry";
import Tools from "./Tools";
import Banner from "../Images/Banner.jpg";
import Reviews from "./Reviews";
import ExtraSection1 from "./ExtraSection1";
import ExtraSection2 from "./ExtraSection2";

const Home = () => {
  return (
    <div className="mt-16 ">
      <div className="">
        <div class="hero min-h-screen bg-base-200">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <img src={Banner} class="max-w-sm rounded-lg shadow-2xl " />
            <div>
              <h1 class="text-5xl font-bold">Supply Boom</h1>
              <p class="py-6">
                Get your desired tools manufactured by us within a very short
                time. You won't have the guts like us to do something we intend
                to do. Support us, For more Click this button
              </p>
              <button class="btn btn-outline btn-dark">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <Tools></Tools>
      <Reviews></Reviews>
      <ExtraSection1></ExtraSection1>
      <ExtraSection2></ExtraSection2>
      <BusinessSumarry></BusinessSumarry>
    </div>
  );
};

export default Home;
