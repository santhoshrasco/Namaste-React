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
  const categories  = resInfo?.cards[2]?.groupedCard?.cardsGroupedMap?.REGULAR?.cards.filter((c)=> c.card?.["card"]?.["@type"])

  return (
    <div className="text-center">
      <h1 className="font-black my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(" , ")}-{costForTwoMessage}</p>
      <h2>Menu</h2>
      
    </div>
  );
};

export default RestaurantMenu;
