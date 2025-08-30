import React, { useContext } from 'react'
import AuthContext from '../../Context/AuthContext/AuthContext'
import { Link } from 'react-router-dom'
import GoogleSignIn from '../Shared/GoogleSignIn'
import Swal from 'sweetalert2'

const Register = () => {
  const { createUser } = useContext(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    const newUser = { name, email, password }
    console.log(newUser)

    // password validation
    // show password validation error
    createUser(email, password)
      .then((result) => {
        console.log(result.user)
        Swal.fire({
          title: 'Good job!',
          text: 'Successfully Sign Up!',
          icon: 'success',
        })
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  return (
    <div className=" bg-[#F1EFEC] ">
      {/* <!-- component --> */}
      <div className="flex items-center justify-center ">
        <div className="md:w-full mt-20 mb-20  max-w-md bg-white shadow-lg rounded  pt-6 pb-8 mb-4">
          <div className="font-bold text-gray-600 text-2xl md:text-3xl md:text-4xl flex justify-center  py-2 mb-4">
            Sign Up
          </div>
          <form onSubmit={handleRegister} className=" px-12 pt-6 pb-8 mb-4">
            <div className="mb-4  ">
              <label className="block text-gray-700 text-sm font-normal mb-2">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="name"
                v-model="form.name"
                type="text"
                required
                // autofocus
                placeholder="Name"
              />
            </div>
            <div className="mb-4  ">
              <label className="block text-gray-700 text-sm font-normal mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                v-model="form.email"
                type="email"
                required
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-normal mb-2">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Password"
                name="password"
                required
                // autocomplete="current-password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="px-4 py-2 rounded text-white inline-block shadow-lg bg-[#123458]"
                type="submit">
                Sign Up
              </button>
              {/* <a
                class="inline-block align-baseline font-normal text-sm text-blue-500 hover:text-blue-800"
                href="#">
                Forgot Password?
              </a> */}
            </div>
            <p className="mt-2 flex">
              Already have an account?
              <Link className="ml-2 text-blue-700 font-semibold" to="/signIn">
                Sign In
              </Link>{' '}
            </p>
          </form>

          <GoogleSignIn></GoogleSignIn>
        </div>
      </div>
    </div>
  )
}

export default Register
