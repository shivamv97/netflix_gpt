import { useEffect } from "react";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  //Everything is controlled from single place
  useEffect(() => {
    //In React, you typically use unsubscribe in a useEffect cleanup function
    //This function returns an unsubscribe function, which, when called, detaches the listener.
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
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
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe(); // Cleanup on component unmount
  }, []);
  return (
    <div className="absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="p-6 m-2 w-64" src={LOGO} alt="Logo" />
      <div className="flex py-5 m-3">
        {user && (
          <img className="h-12 w-12" alt="usericon" src={user.photoURL} />
        )}
        {user && (
          <button className="font-bold text-white" onClick={handleSignOut}>
            (Sign Out)
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
