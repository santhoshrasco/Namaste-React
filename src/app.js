import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard, { resObj } from "./components/RestaurantCard";




//<<<<<<<<<app.js>>>>>>>>>>>>
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <RestaurantCard/>
    </div>
  );
};

export default AppLayout;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
