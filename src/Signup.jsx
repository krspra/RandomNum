import React from "react";
import { Link} from "react-router-dom";
import signup from "/signupBlue.svg";

function Signup() {

  return (
    <div className="flex justify-around items-center my-16">
      <div className="flex flex-col items-center gap-3">
        <form className="w-[400px] h-96 flex flex-col gap-1 justify-around items-center max-custom3:h-64 max-custom3:w-[300px]">
          {/* Name */}
          <div className="flex flex-col h-16 p-2 rounded-xl border w-full">
            <label htmlFor="Name">Name</label>
            <input
              className="focus:outline-none"
              id="Name"
              type="text"
              placeholder="Your Name?"
            />
          </div>
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
            Signup with Email
          </button>
          <span>
            Already have an account?{" "}
            <Link className="text-blue-600" to="/login">
              Login
            </Link>
          </span>
        </form>
      </div>

      <img
        src={signup}
        className="h-96 max-custom1:hidden"
        alt="signup illustration"
      />
    </div>
  );
}

export default Signup;