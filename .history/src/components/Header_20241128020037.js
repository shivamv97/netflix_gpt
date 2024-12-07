import React from "react";

const Header = () => {
  return (
    <div className="absolute w-screen bg-gradient-to-b from-black z-10">
      <img
        className="p-6 m-2 w-64"
        src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
        alt="Logo"
      />
      <div>
        <img className="p-6 m-2 w-64" src="" alt="usericon" />
      </div>
    </div>
  );
};

export default Header;
