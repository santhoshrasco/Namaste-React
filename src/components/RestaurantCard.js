import React from "react";

import logo from '../../Images/Nowsin_logo.jpg'


const RestaurantCard = (props) => {
const { resData } = props;
if (!resData) {
  return null; // or return a fallback UI
}
  const { name, image, rating, price, cuisines, address, eta, restaurant } = resData;
   
  return (
    <div className="res-card">
      <h3> {name}</h3>
      <div className="about">
        <img className="logo-nowsin" src={logo}  alt="res-Lgo"></img>
        <h4>{" Rating " + rating}</h4>
        <h4>{eta}</h4>
        <h4>{cuisines.join(", ")}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
