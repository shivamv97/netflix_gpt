import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [isErrorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const HandleButtonClick = () => {
    //Validate the form data
    console.log(name.current.value);
    const message = checkValidData(
      email.current.value,
      password.current.value,
      name.current.value
    );
    setErrorMessage(message);
  };

  const toggleSignInform = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="opacity-100"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_large.jpg"
          alt="bg-image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-10 bg-black absolute w-3/12 my-40 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70"
      >
        <h1 className="font-bold text-4xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-900 bg-opacity-70 text-xl border border-gray-500 rounded"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-900 bg-opacity-70 text-xl border border-gray-500 rounded"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-900 bg-opacity-70 text-xl border border-gray-500 rounded"
        />

        <p className="text-red-700 font-bold text-lg py-2">{isErrorMessage} </p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
          onClick={HandleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 px-2 cursor-pointer" onClick={toggleSignInform}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
