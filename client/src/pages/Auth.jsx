import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../assets";

let Auth = () => {
  return (
    <div className="w-full h-[90vh] sm:flex mt-2 shadow-xl bg-slate-100 ">
      <div className=" hidden  sm:w-[60%] sm:flex sm:items-center sm:justify-center  bg-gradient-to-r from-[#dd3675] via-[#d8363a] to-[#dd3675] ">
        <div className="px-4 py-6 text-white md:mx-6 md:p-12">
          <h4 className="mb-6 text-xl sm:text-2xl font-semibold">
            Image Crafter
          </h4>
          <p className="text-sm w-[80%]">
            In the realm where imagination unfurls its silken wings, Resides the
            wondrous art, the magic an image generator brings. Infinite hues and
            shades, like whispers of the cosmic night, A symphony of pixels,
            choreographed in ethereal light.
          </p>
        </div>
      </div>
      {/* ----------------- */}
      <div className="h-[90vh] sm:w-[40%] flex items-center justify-center ">
        <div>
          <img className="mx-auto w-48 mb-12" src={auth} alt="logo" />
          <h1 className="text-center text-xl font-bold">LOG IN</h1>
          <form>
            <div className="mt-6">
              <p>Email</p>
              <input
                required
                type="email"
                className="w-full outline-none border-b-black border-2 border-t-transparent border-l-transparent border-r-transparent bg-slate-100  "
              />
            </div>
            <div className="mt-6">
              <p>Password</p>
              <input
                required
                type="password"
                className="w-full outline-none border-b-black border-2 border-t-transparent border-l-transparent border-r-transparent bg-slate-100  "
              />
            </div>

            <div className="mt-6 pb-1 pt-1 text-center">
              <Link
                to="/home"
                className="mb-3 bg-gradient-to-r from-[#dd3675] via-[#e50611] to-[#dd3675] inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
              >
                Log In
              </Link>
            </div>

            <div className=" mt-6 flex items-center justify-between pb-6">
              <p className="mb-0 mr-2">Don't have an account?</p>
              <button
                onClick={() => alert("Enter the wrong password !")}
                type="button"
                className=" hover:bg-gradient-to-r hover:from-[#dd3675] via-[#e50611] to-[#dd3675] inline-block rounded border-2 b px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal  transition duration-150 ease-in-out "
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
