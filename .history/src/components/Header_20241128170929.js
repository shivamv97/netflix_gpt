import React from "react";

const Header = () => {
  const handleSignOut = () => {};
  return (
    <div className="absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="p-6 m-2 w-64"
        src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
        alt="Logo"
      />
      <div className="flex m-2 p-2">
        <img className="p-6 m-2 w-64" src="" alt="usericon" />
        <button className="font-bold text-white" onClick={handleSignOut}>
          (Sign Out)
        </button>
      </div>
    </div>
  );
};

export default Header;
