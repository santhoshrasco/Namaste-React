
import React from 'react'
import logo from '../../Images/app_logo.jpeg';
const Header = () => {
  return (
    <div className="header">
      <div className="logocontainer">
        <img className="logo" src={logo}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};


export default Header