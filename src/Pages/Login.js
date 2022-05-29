import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../firebase.init";
import Loading from "./Loading";
import SocialLogin from "./SocialLogin";
import { BiRightArrowCircle } from "react-icons/bi";
import { BiLogInCircle } from "react-icons/bi";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorElement;
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (loading || sending) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);

    signInWithEmailAndPassword(email, password);
  };
  const navigateRegister = (event) => {
    navigate("/signup");
  };
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  };
  return (
    <div>
      <div className="container w-50 mx-auto shadow-lg p-3 my-5 bg-body rounded  ">
        <div className="d-flex justify-content-between">
          <button className="mx-auto border-end w-50 text-success">
            LOGIN
          </button>
          <button
            className="mx-auto border-start w-50 text-success"
            onClick={navigateRegister}
          >
            REGISTER
          </button>
        </div>
        <SocialLogin></SocialLogin>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="EMAIL"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="PASSWORD"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <button className="btn-success py-2 px-5 rounded d-flex align-items-center ">
            LOGIN <BiLogInCircle></BiLogInCircle>
          </button>
        </Form>
        {errorElement}
        <p className="mt-3">
          New To My Place?{" "}
          <Link
            to="/signup"
            className="text-success pe-auto text-decoration-none fw-bold"
            onClick={navigateRegister}
          >
            Jump To The Register<BiRightArrowCircle></BiRightArrowCircle>
          </Link>
        </p>
        <p>
          Forget Password?{" "}
          <button
            className="btn btn-link text-primary pe-auto text-decoration-none"
            onClick={resetPassword}
          >
            Reset Password
          </button>{" "}
        </p>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Login;
