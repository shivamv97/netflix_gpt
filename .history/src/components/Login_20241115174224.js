import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_large.jpg"
          alt="bg-image"
        />
      </div>
      <form className="p-10 bg-black absolute w-3/12 my-40 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70">
        <h1 className="font-bold text-4xl py-4">Sign In</h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 m-2 w-full bg-gray-900 bg-opacity-70 text-xl border border-white rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 m-2 w-full bg-gray-900 bg-opacity-70 text-xl border border-white rounded"
        />
        <button className="p-6 m-2 bg-red-700 w-full rounded-lg">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
