import React from 'react'

const Register = () => {
  return (
    <div className="mt-20">
      {/* <!-- component --> */}
      <div class="flex items-center justify-center ">
        <div class="w-full max-w-md bg-white shadow-lg rounded  pt-6 pb-8 mb-4">
          <div class="font-bold text-gray-600 text-4xl flex justify-center  py-2 mb-4">
            Sign In
          </div>
          <form class=" px-12 pt-6 pb-8 mb-4">
            <div class="mb-4  ">
              <label
                class="block text-gray-700 text-sm font-normal mb-2"
                for="username">
                Name
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="name"
                v-model="form.name"
                type="text"
                required
                autofocus
                placeholder="Name"
              />
            </div>
            <div class="mb-4  ">
              <label
                class="block text-gray-700 text-sm font-normal mb-2"
                for="username">
                Email
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                v-model="form.email"
                type="email"
                required
                autofocus
                placeholder="Email"
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-normal mb-2"
                for="password">
                Password
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                v-model="form.password"
                type="password"
                placeholder="Password"
                name="password"
                required
                autocomplete="current-password"
              />
            </div>
            <div class="flex items-center justify-between">
              <button
                class="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700"
                type="submit">
                Sign In
              </button>
              {/* <a
                class="inline-block align-baseline font-normal text-sm text-blue-500 hover:text-blue-800"
                href="#">
                Forgot Password?
              </a> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
