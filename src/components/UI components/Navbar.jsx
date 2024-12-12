import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  return (
    <nav>
      {authContext.isLoggedIn && (
        <ul className="flex gap-4 text-sky-600">
          <Link
            className="hover:text-black w-max"
            to={"/bookings/" + authContext.user.userId}
          >
            My Bookings
          </Link>

          {authContext.user.role === "host" && (
            <Link
              className="hover:text-black w-max"
              to={"/listings/user/" + authContext.user.userId}
            >
              My Listings
            </Link>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
