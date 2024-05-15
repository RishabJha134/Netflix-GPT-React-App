import React, { useEffect } from "react";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../Utils/Constants";
import { toggleGptSearchView } from "../Utils/gptSlice";
import { changeLanguage } from "../Utils/configSlice";
import GptSearch from "./GptSearch";

function Header() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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

  function handleGptSearchClick() {
    // Toggle GPT search
    dispatch(toggleGptSearchView());
  }

  function handleLanguageChange(e) {
    console.log(e.target.value);

    dispatch(changeLanguage(e.target.value));
  }

  return (
    <>
      <div className="absolute z-[1] w-full px-8 py-2 bg-gradient-to-b from-black flex flex-col  justify-between md:flex-row ">
        <img className="w-44 mx-auto md:mx-0 " src={LOGO} alt="logo" />

        {user && (
          <div className="flex items-center justify-between  mr-4">
            {showGptSearch && (
              <select
                className="p-2 m-2 bg-gray-900 text-zinc-200"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((item, index) => {
                  return (
                    <>
                      <option key={item.identifier} value={item.identifier}>
                        {item.name}
                      </option>
                    </>
                  );
                })}
              </select>
            )}

            <button
              onClick={handleGptSearchClick}
              className="py-2 mx-3 px-3 my-2 font-bold text-zinc-200 bg-purple-500 rounded-lg"
            >
              {showGptSearch?"Homepage":"Gpt Search"}
            </button>
            <img className="w-12 h-12" src={user.photoURL} alt="signin logo" />
            <button
              onClick={handleSignOutClick}
              className="md:bg-slate-700  font-bold shadow md:w-[6vw] h-[5vh] rounded ml-2 p-1 text-zinc-400"
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
