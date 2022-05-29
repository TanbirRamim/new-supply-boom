import React from "react";
import "./ExtraSection1.css";

const ExtraSection1 = () => {
  return (
    <div className="ex-setup my-10">
      <h1 className="text-2xl text-center mb-5 ">
        Inside view of our{" "}
        <span className="text-blue-400">work environment</span>
      </h1>
      <div class="carousel max-h-96 w-2/3 carousel-center mx-auto">
        <div id="item1" class="carousel-item">
          <img
            className="edit-img"
            src="https://media.istockphoto.com/videos/time-lapse-of-electronics-factory-workers-assembling-smartphone-by-video-id1070968016?s=640x640"
            class="w-full"
          />
        </div>
        <div id="item2" class="carousel-item w-full">
          <img
            className="edit-img"
            src="https://static.dw.com/image/52965592_303.jpg"
            class="w-full"
          />
        </div>
        <div id="item3" class="carousel-item w-full">
          <img
            className="edit-img"
            src="https://media.istockphoto.com/photos/robotic-arms-along-assembly-line-in-modern-factory-picture-id1302286440?b=1&k=20&m=1302286440&s=170667a&w=0&h=hbPZjRwOrnaHyRLmuMMU51iMO8otf1u81bXPLi82bN4="
            class="w-full"
          />
        </div>
        <div id="item4" class="carousel-item w-full">
          <img
            className="edit-img"
            src="https://media.istockphoto.com/photos/cars-on-production-line-in-factory-picture-id1320950393?k=20&m=1320950393&s=170667a&w=0&h=MKsAitJhqSbu8wFuRgpu3QpM-wgZZ-AkEKWvDT806KE="
            class="w-full"
          />
        </div>
      </div>
      <div class="flex justify-center w-full py-2 gap-2">
        <a href="#item1" class="btn btn-xs">
          1
        </a>
        <a href="#item2" class="btn btn-xs">
          2
        </a>
        <a href="#item3" class="btn btn-xs">
          3
        </a>
        <a href="#item4" class="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default ExtraSection1;
