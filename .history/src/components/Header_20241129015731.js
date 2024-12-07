import React from "react";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="p-6 m-2 w-64"
        src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
        alt="Logo"
      />
      <div className="flex py-5 m-3">
        <img
          className="h-12 w-12"
          alt="usericon"
          src="https://avatars.githubusercontent.com/u/116807586?s=400&u=90bc77b5f8780215134fed007d012bf1cfead994&v=4"
        />
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
