import React, { lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import About from "./components/About";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";
import Grocery from "./components/Grocery";
import RestaurantCategory from "./components/RestaurantCategory";
import UserContext from "./components/UserContext";



const Grocery = lazy(()=> import("./components/Grocery") )
//<<<<<<<<<app.js>>>>>>>>>>>>
const AppLayout = () => {
const [userName, setUserName]= useState()
useEffect(()=>{
  const data = {
    name : "Santhosh kumar"
  };
  setUserName (data.name)
},[])

  return (

    <UserContext.Provider value ={{loggedInUser:userName}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
  );
};
//<RestaurantCard/>

const appRouter = createBrowserRouter([
  {
    path: "",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      ,
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path:"/grocery",
        element: <Grocery/>
      },
      {
        path:"/accordion",
        element: <RestaurantCategory/>
      }
      
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
