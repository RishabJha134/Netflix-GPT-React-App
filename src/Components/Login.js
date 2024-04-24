import React, { useState } from "react";
import Header from "./Header";

function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);
  function toggleSignInForm() {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <>
      <Header></Header>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bgImage"
        />
      </div>

      <form className="absolute w-3/12 bg-black p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : " Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="p-3 my-3 w-full bg-gray-700"
            placeholder="Full Name"
            type="text"
          />
        )}
        <input
          className="p-3 my-3 w-full bg-gray-700"
          placeholder="Email Address"
          type="text"
        />
        <input
          className="p-3 my-3 w-full bg-gray-700"
          placeholder="Password"
          type="password"
        />
        <button className="p-3 my-5 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="py-2 cursor-pointer">
          {isSignInForm?" New to Netflix? Sign up Now":"Already Registered? Sign In Now."}
         
        </p>
      </form>
    </>
  );
}

export default Login;
