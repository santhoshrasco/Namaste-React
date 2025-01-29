import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";


const Body = () => {
  return (
    <div className="body">
      <div className="filter">
      
        <button className="filter-btn" onMouseOver={()=>{
          console.log("button clicked");
        }}>Top-Rated Restaurant</button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
