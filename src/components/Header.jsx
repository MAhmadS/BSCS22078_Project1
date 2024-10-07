import React from "react";
import SideHeader from "./UI components/SideHeader";
import Navbar from "./UI components/Navbar";

const Header = () => {
  return (
    <header>
      <div className="items-center flex">
        <img src="../src/assets/imgs/logo.png" alt="Rent It Logo" width={80} />
        <span className="text-base sm:text-2xl text-sky-600 font-bold hidden sm:flex">Rent It</span>
        <div className="justify-self-center ml-auto hidden lg:flex">
          <Navbar />
        </div>
        <div className="justify-self-end mr-2 ml-auto">
          <SideHeader />
        </div>
      </div>

    </header>
  );
};

export default Header;
