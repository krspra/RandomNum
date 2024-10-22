import React from "react";
import {Link} from "react-router-dom"
import login from "/signupBlue.svg"

function Login() {
  return (
    <div className="flex justify-around items-center my-16">
      <div className="flex flex-col items-center gap-3">
        <form className="w-[400px] h-96 flex flex-col gap-1 justify-around items-center max-custom3:h-64 max-custom3:w-[300px]">

          {/* Email */}
          <div className="flex flex-col h-20 p-2 rounded-xl border w-full">
            <label htmlFor="Email">Email</label>
            <input
              className="focus:outline-none"
              id="Email"
              type="email"
              placeholder="Enter your email..."
            />
          </div>
          {/* Password */}
          <div className="flex flex-col h-20 p-2 rounded-xl border w-full">
            <label htmlFor="Password">Password</label>
            <input
              className="focus:outline-none"
              id="Password"
              type="password"
              placeholder="Enter your Password"
            />
          </div>

          {/* Button */}
          <button
            type="button"
            className="bg-blue-400 h-14 text-xl w-[95%] rounded-lg text-white font-bold"
          >
            Login with Email
          </button>
          <span>Don't have an account? <Link className="text-blue-600" to='/signup'>Signup</Link></span>
        </form>
      </div>

      <img src={login} className="h-96 max-custom1:hidden" alt="signup illustration" />
    </div>
  );
}

export default Login;