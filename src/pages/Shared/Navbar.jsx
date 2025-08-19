import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import AuthContext from '../../Context/AuthContext/AuthContext'

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext)

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log('Sihn Out')
      })
      .catch((error) => {
        console.log('Failed to sign out')
      })
  }

  const links = (
    <>
      <li className="font-bold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/">Home</NavLink>
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
                  src="https://i.ibb.co/9m3JZcNn/job-seeker-3135721.png"
                  alt=""
                />
              </p>
              <p className="text-base md:text-xl font-bold">JobSearch</p>
            </div>
            <div>
              {user ? (
                <>
                  <div className="flex  items-center">
                    <p>
                      <img
                        src="https://i.ibb.co.com/Q33J74qC/ironman.webp"
                        alt=""
                        className="h-10 w-8 rounded-full mr-2"
                      />
                    </p>
                    <button
                      onClick={handleSignOut}
                      className="btn btn-xs md:btn-sm">
                      Sign Out
                    </button>
                  </div>
                </>
              ) : (
                <Link to="/register">
                  <p className="btn btn-xs md:btn-sm">Sign Up</p>
                </Link>
              )}
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
