import React from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();

  let errorElement;

  if (loading || loading1) {
    return <Loading></Loading>;
  }

  if (error || error1) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message} {error1?.message}
      </p>
    );
  }

  if (user || user1) {
    navigate("/home");
  }
  return (
    <div>
      <div className="mt-5">
        <div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-primary w-50 d-block mx-auto my-2"
          >
            <FcGoogle></FcGoogle>

            <span>Google Sign In</span>
          </button>

          <button
            onClick={() => signInWithGithub()}
            className="btn btn-dark w-50 d-block mx-auto"
          >
            <SiGithub></SiGithub>
            <span className="px-2">Github Sign In</span>
          </button>
        </div>
        {errorElement}
        <div className="d-flex align-items-center">
          <div style={{ height: "1px" }} className="bg-primary w-50"></div>
          <p className="mt-2 px-2">or</p>
          <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
