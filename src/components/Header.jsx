import React from "react";
import Navbar from "./UI components/Navbar";

const Header = () => {
  return (
    <header>
      <div className="items-center hidden sm:flex">
        <img src="../src/assets/imgs/logo.png" alt="Rent It Logo" width={80} />
        <span className="text-2xl text-sky-600 font-bold">Rent It</span>
        <div className="justify-self-end mr-2 ml-auto ">
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
