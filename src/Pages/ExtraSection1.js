import React from "react";

const ExtraSection1 = () => {
  return (
    <div>
      <div class="carousel w-full">
        <div id="item1" class="carousel-item w-full">
          <img
            src="https://media.istockphoto.com/videos/time-lapse-of-electronics-factory-workers-assembling-smartphone-by-video-id1070968016?s=640x640"
            class="w-full"
          />
        </div>
        <div id="item2" class="carousel-item w-full">
          <img
            src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB"
            class="w-full"
          />
        </div>
        <div id="item3" class="carousel-item w-full">
          <img
            src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6"
            class="w-full"
          />
        </div>
        <div id="item4" class="carousel-item w-full">
          <img
            src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693"
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
