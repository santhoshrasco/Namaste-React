import React, { useState } from "react";
import logo from "../../Images/app_logo.jpeg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logocontainer">
        <img className="logo" src={logo}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            ONline Status: {onlineStatus ? "✅":"❌"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/about"> About Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="login-btn"
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
