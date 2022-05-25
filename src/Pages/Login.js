import React from "react";
import {
  useSignInWithGoogle,
  useSignInWithGithub,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import auth from "../firebase.init";
import Loading from "./Loading";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  if (user) {
    console.log(user);
  }
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
    navigate("/");
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="mt-16 card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Login</h2>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline"
          >
            <FcGoogle className="text-2xl"> </FcGoogle> google
          </button>
          <button
            onClick={() => signInWithGithub()}
            className="btn btn-outline"
          >
            <SiGithub className="text-2xl"> </SiGithub> Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
