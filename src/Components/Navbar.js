import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ children }) => {
  return (
    <div class="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        <div class="w-full navbar bg-primary fixed top-0 z-50 lg:px-15">
          <div class="flex-1 px-2 mx-2 text-2xl  ">Supply Boom</div>

          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current"
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
          <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal gap-x-2">
              <li>
                <NavLink className="rounded-lg" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="rounded-lg" to="/dashboard">
                  Dashboard
                </NavLink>
              </li>
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
              <li>
                <NavLink className="rounded-lg" to="/login">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {children}
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
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
