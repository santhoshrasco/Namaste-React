import { useState } from "react";


const RestaurantCategory = ()=>{

const [showItems,setShowItems]= useState(false)
//this is our accordian for the app and logic
const handleClick =()=>{
    setShowItems(!showItems)
}
    return(
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex justify-between s">
            <div className="flex justify-between "> onClick={handleClick}</div>
            <span className="font-bold text-lg shadow">{ "Recommended"||data.title  }</span>
            <span className="font-bold text-lg shadow">{ "Newly Added" }</span>
            <span className="font-bold text-lg shadow">{ "IceCreams"  }</span>
            <span className="font-bold text-lg shadow">{ "Sandwiches"  }</span>
            <span>{""}</span>

        </div>
    )
}

export default RestaurantCategory;