import React from "react";
import { MdSearch } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";
// grid lg:grid-cols-3 md:grid-cols-1 gap-4
const ExtraSection2 = () => {
  return (
    <div className="m-5 text-center">
      <div className="my-5 text-center">
        <h1 className="text-2xl">
          The smartest choice for{" "}
          <span className="text-blue-400">creatives like you</span>
        </h1>
        <p>
          Whether you’re looking for designs or quality, you’ll find the perfect
          asset on Supply Boom.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
        <div>
          <AiFillStar className="text-4xl text-blue-400"></AiFillStar>
          <h1 className="text-2xl">High-quality stock</h1>
          <p>
            Download scroll-stopping tools of the best quality to make your
            projects look professional.
          </p>
        </div>
        <div>
          <h1 className="text-2xl">
            <BiLike className="text-4xl text-blue-400"></BiLike> Ready-to-use
            assets
          </h1>
          <p>
            Access thousands of tools and designs ready-to-use and get your
            project ready double quick.
          </p>
        </div>
        <div>
          <h1 className="text-2xl">
            {" "}
            <MdSearch className="text-center text-4xl text-blue-400"></MdSearch>{" "}
            Guaranteed search results
          </h1>
          <p>
            There’s an image and style for every project, whatever your needs
            are.
          </p>
        </div>
        <div>
          <h1 className="text-2xl">
            <BiRefresh className="text-center text-4xl text-blue-400"></BiRefresh>{" "}
            Fresh content everyday
          </h1>
          <p>
            Our Company is updated on a daily basis so you can find the newest
            and trendiest tools and designs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection2;
