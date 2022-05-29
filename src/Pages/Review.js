import React from "react";
import "./Review.css";
const Review = ({ review }) => {
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img
          className="img-setup"
          src={review.img}
          alt="Shoes"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{review.name}</h2>
        <p>{review.review}</p>
        <h2 className="text-2xl">{review.rating}</h2>
      </div>
    </div>
  );
};

export default Review;
