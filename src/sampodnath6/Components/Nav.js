import React from "react";

const Nav = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Blog</a>
              </li>

              <li>
                <a>Login</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl font-bold ml-20">
            Leads4Needs
          </a>
        </div>
        <div className="navbar-end hidden lg:flex mr-20">
          <ul className="menu menu-horizontal p-0 ">
            <li className=" hover:text-white hover:bg-indigo-600">
              <a>Blog</a>
            </li>

            <li className="hover:text-white hover:bg-indigo-600">
              <a>Login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
