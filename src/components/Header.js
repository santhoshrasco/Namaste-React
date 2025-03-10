import React, { useState } from "react";
import logo from "../../Images/app_logo.jpeg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-200 shadow-2xl  mt-1 mb-2">
      <div className="w-24 ">
        <img className="logo" src={logo}></img>
      </div>
      <div className="flex items-center space-x-4.5 ">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status : {onlineStatus ? "✅":"❌"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/about"> About Us</Link>
          </li>
          <li className="px-4">Cart</li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="px-4"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {" "}
            {btnNameReact}{" "}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
