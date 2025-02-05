import React from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

import { useState, useEffect } from "react";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2"
    );

    const json = await data.json();
    console.log(json)
    setListOfRestaurants(json.data.cards[2].data.data.cards)
  };

  if(ListOfRestaurants.length === 0){
    return <Shimmer/>;
  }
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => res.rating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top-Rated Restaurant
        </button>
      </div>
      <div className="res-container">

        {ListOfRestaurants.map((restaurant)=>(
          <RestaurantCard key={restaurant.data} resData = {restaurant} />
        ))}
       
      </div>
    </div>
  );
};

export default Body;
