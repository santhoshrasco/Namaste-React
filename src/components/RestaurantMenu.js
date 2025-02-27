import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurauntMenu"
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const {resId}= useParams()
  const resInfo = useRestaurantMenu(resId);
 
  
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.info;

  const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardsGroupedMap?.REGULAR?.cards[1]?.card?.card;
 console.log(itemCards);
 
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(" , ")}-{costForTwoMessage}</p>
      <h2>Menu</h2>

      <ul>
        {itemCards.map((item)=>(<li> {item.card.info.name}- {item.card.info.price}</li>))}
        <li>Briyani</li>
        <li>Meals</li>
        <li>Fried Rice</li>
        <li>Breds</li>
      </ul>
      <img></img>
    </div>
  );
};

export default RestaurantMenu;
