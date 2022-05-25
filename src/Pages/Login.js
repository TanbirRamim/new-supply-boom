import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import auth from "../firebase.init";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <div className="flex justify-center items-center h-screen">
      <div class="mt-16 card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-2xl font-bold text-center">Login</h2>
          <div className="divider">OR</div>
          <button className="btn btn-outline">
            {" "}
            <FcGoogle className="text-2xl"> </FcGoogle> google
          </button>
          <button className="btn btn-outline">
            {" "}
            <SiGithub className="text-2xl"> </SiGithub> Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
