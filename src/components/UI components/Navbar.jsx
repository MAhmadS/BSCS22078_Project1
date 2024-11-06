import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-2 text-sky-600">
        <Link className="hover:text-black w-max" to="/">
          Home
        </Link>
        <span>·</span>

        <Link className="hover:text-black w-max" to="/">
          Experiences
        </Link>
        <span>·</span>
        <Link className="hover:text-black w-max" to="/">
          Online Experiences
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
