import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-2 text-sky-600">
        <a className="hover:text-black w-max" href="/">
          Home
        </a>
        <span>·</span>

        <a className="hover:text-black w-max" href="/">
          Experiences
        </a>
        <span>·</span>
        <a className="hover:text-black w-max" href="/">
          Online Experiences
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
