import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://pacific-gorge-12132.herokuapp.com/review`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          toast("YOUR REVIEW IS ADDED");
        }
      });
  };
  return (
    <div>
      {" "}
      <h1 className="text-neutral underline font-serif underline-offset-8 text-3xl text-center my-3 ">
        Let us know your Opinion
      </h1>
      <div className="flex flex-col items-center justify-center transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-90">
        <img className="w-[80px] rounded-full" src={user?.photoURL} alt="" />
        <h3 className="text-2xl">{user?.displayName}</h3>
      </div>
      <form
        className="flex flex-col w-50 mx-auto   space-y-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="border border-dark p-2 rounded"
          placeholder="Name"
          value={user.displayName}
          readOnly
          {...register("name")}
        />
        <input
          className="border border-dark p-2 rounded"
          placeholder="LOCATION"
          {...register("location")}
        />
        <input
          placeholder="Image URL"
          className="border border-dark py-2 rounded"
          value={user?.photoURL}
          {...register("img")}
          readOnly
        />

        <input
          className="border border-dark p-2 rounded"
          placeholder="RATING"
          type="number"
          {...register("rating", { min: 1, max: 5 })}
        />
        <textarea
          className="border border-dark p-2 rounded"
          placeholder="REVIEW"
          {...register("review")}
        />
        <input
          className="btn btn-primary w-25 mx-auto"
          type="submit"
          value="Add Review"
        />
      </form>
    </div>
  );
};

export default AddReview;
