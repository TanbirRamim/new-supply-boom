import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "./Loading";
import SocialLogin from "./SocialLogin";

const SignUp = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };
  if (loading || updating) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate("/home");
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log("Updated profile");
    navigate("/home");
  };
  return (
    <div>
      <div className="register-form mt-3 container w-50 mx-auto shadow-lg p-3 my-5 bg-body rounded ">
        <div className="d-flex justify-content-between">
          <button
            className="mx-auto border-end w-50 text-success"
            onClick={navigateLogin}
          >
            LOGIN
          </button>
          <button className="mx-auto border-start w-50 text-success">
            REGISTER
          </button>
        </div>
        <SocialLogin></SocialLogin>
        <form
          className="d-flex flex-column justify-content-center"
          onSubmit={handleRegister}
        >
          <input type="text" name="name" id="" placeholder="Your Name" />

          <input
            type="email"
            name="email"
            id=""
            placeholder="Email Address"
            required
          />

          <input
            type="password"
            name="password"
            id=""
            placeholder="Password"
            required
          />
          <div>
            <input
              onClick={() => setAgree(!agree)}
              type="checkbox"
              name="terms"
              id="terms"
            />
            <label
              className={`ps-2 ${agree ? "" : "text-danger"}`}
              htmlFor="terms"
            >
              Accept Get Cracking Gears Terms
            </label>
          </div>
          <button
            disabled={!agree}
            className="btn-success w-50 mx-auto py-2 my-2 rounded"
          >
            REGISTER
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-success pe-auto text-decoration-none fw-bold italic"
            onClick={navigateLogin}
          >
            Please Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default SignUp;
