import React, { useEffect } from "react";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO } from "../Utils/Constants";

function Header() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log(user);
  function handleSignOutClick() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  }

  // why you use effect in header:- because header is inside the route provider and header is centralised component it is in the every page whether it is login page sign in page browse page.

  //  onAuthStateChanged:- it is a api which is provided by the firebase:-
  // jab bhi signin,signout,signup hoga onAuthStateChanged iska state change-> fir use effect ke andar ka ye api call hoga:-

  // api is working good if we call inside the use effect hook:-
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // user is signIn:-

        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        navigate("/browse");

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe the onAuthStateChanged when component is unmount. jab component load nahi hoga tab hum unsubscribe kar denge for hygiene our code:-
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="absolute z-[1] w-full px-8 py-2 bg-gradient-to-b from-black flex justify-between">
        <img
          className="w-44"
          src={LOGO}
          alt="logo"
        />

        {user && (
          <div className="flex items-center mr-4">
            <img className="w-12 h-12" src={user.photoURL} alt="signin logo" />
            <button
              onClick={handleSignOutClick}
              className="bg-slate-700 font-bold shadow w-[6vw] h-[5vh] rounded ml-2 p-1 text-zinc-400"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
