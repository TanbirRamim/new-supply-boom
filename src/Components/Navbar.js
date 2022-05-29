import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../firebase.init";

const Navbar = ({ children }) => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="drawer drawer-end ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-primary fixed top-0 z-50 lg:px-15">
          <div className="flex-1 px-2 mx-2 text-2xl  ">Supply Boom</div>

          <div className="flex-none lg:hidden">
            <label for="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal gap-x-2">
              <li>
                <NavLink className="rounded-lg" to="/">
                  Home
                </NavLink>
              </li>
              {/* <li>
                <NavLink className="rounded-lg" to="/dashboard">
                  Dashboard
                </NavLink>
              </li> */}
              <li>
                <NavLink className="rounded-lg" to="/blogs">
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink className="rounded-lg" to="/myPortfolio">
                  My Portfolio
                </NavLink>
              </li>
              {user && (
                <>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </>
              )}
              {user ? (
                <button
                  className="btn btn-outline btn-dark  text-decoration-none"
                  onClick={handleSignOut}
                >
                  Sign out
                </button>
              ) : (
                <NavLink to="login">Login</NavLink>
              )}
            </ul>
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label for="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/myPortfolio">My Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="login">Login</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
