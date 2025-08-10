import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const links = (
    <>
      <li className=" text-sm md:text-base">
        <a>Navbar Item 1</a>
      </li>
      <li className=" text-sm md:text-base">
        <a>Navbar Item 2</a>
      </li>
    </>
  )

  return (
    <div>
      <div className="drawer ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar bg-[#123458] w-full">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost  text-[#F1EFEC] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex items-center flex-1 px-2 text-[#F1EFEC]">
              <p>
                <img
                  className="h-6 md:h-8"
                  src="https://i.ibb.co.com/9m3JZcNn/job-seeker-3135721.png"
                  alt=""
                  srcset=""
                />{' '}
              </p>
              <p className="text-base md:text-xl font-bold">JobSearch</p>
            </div>
            <div>
              <Link to="/register">
                <a className="btn btn-xs md:btn-sm">Sign In</a>
              </Link>
            </div>
            <div className="hidden flex-none lg:block">
              <ul className="menu text-[#F1EFEC] menu-horizontal">
                {/* Navbar menu content here */}
                {links}
              </ul>
            </div>
          </div>
          {/* Page content here
          Content */}
        </div>
        <div className="drawer-side  ">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"></label>
          <ul className="menu  bg-[#123458] 	text-[#F1EFEC] min-h-full sm:w-72 md:w-80 p-4">
            {/* Sidebar content here */}
            {links}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
