import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/Firebase";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { USER_AVATAR } from "../Utils/Constants";

function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  function toggleSignInForm() {
    setIsSignInForm(!isSignInForm);
  }

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  function handleClickButton() {
    // console.log(email.current.value);
    // console.log(password.current.value);

    const message = checkValidData(
      email.current.value,
      password.current.value
      // name.current.value
    );
    console.log(message);
    setErrorMessage(message);

    if (message) {
      return;
    }

    // Sign In Sign Up Logic:-

    if (!isSignInForm) {
      // SignUp logic here:-
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(auth.currentUser);
          console.log(user);

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              console.log(user);

              // we are fetching the keys from the updated auth.currentUser information or from the updated value of users.:-
              // here auth.currentUser is a updated value of user(line 55 me jo variable hai) so use the auth.currentUser.
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // navigate("/browse");
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
              console.log(error);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);

          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
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

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute w-3/12 bg-black p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : " Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            className="p-3 my-3 w-full bg-gray-700"
            placeholder="Full Name"
            type="text"
          />
        )}
        <input
          ref={email}
          className="p-3 my-3 w-full bg-gray-700"
          placeholder="Email Address"
          type="text"
        />
        <input
          ref={password}
          className="p-3 my-3 w-full bg-gray-700"
          placeholder="Password"
          type="password"
        />
        <p className="text-red-500 font-bold text-base py-2">{errorMessage}</p>
        <button
          className="p-3 my-5 bg-red-700 w-full rounded-lg"
          onClick={() => {
            handleClickButton();
          }}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="py-2 cursor-pointer">
          {isSignInForm
            ? " New to Netflix? Sign up Now"
            : "Already Registered? Sign In Now."}
        </p>
      </form>
    </>
  );
}

export default Login;
