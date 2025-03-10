import React from "react";
import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.zomato.com/webroutes/search/home");
    //https://corsproxy.io/?
    const json = await data.json();
    console.log(json);
    //optional chaining
    const items = json?.data?.page_data?.sections?.SECTION_SEARCH_RESULT;
    setListOfRestaurants(Array.isArray(items) ? items[0] : []);

    setFilteredRestaurant(
      json?.data?.page_data?.sections?.SECTION_SEARCH_RESULT?.items?.[0]
    );
  };
  const onlineStatus = useOnlineStatus;
  if (onlineStatus === false)
    return <h1>You are offline check connectivity</h1>;
  if (!Array.isArray(ListOfRestaurants) || ListOfRestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className=" border border-solid"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 bg-green-200 m-3"
            onClick={() => {
              const filteredRestaurants = ListOfRestaurants.filter((res) =>
                res.data.name
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );
              setListOfRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="px-3 py-2.5 rounded-lg  "
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
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.data} to={"/restaurants" + restaurant.data}>
            {restaurant.data.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard key={restaurant.data} resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
