import { useState,useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
useEffect(()=>{
    fetchData();
  }, []);

  const fetchData = async ()=>{
    const data = await fetch("https://wellversedhealthprivatelimited-95dbae03984185a17072530.freshchat.com/app/services/app/webchat/8e132fe1-71d5-49c7-af21-f32a624e58de/config?domain=aHR0cHM6Ly93ZWxsdmVyc2VkLmlu")
    const json = await data.json()
    setResInfo(json.data)
}
  return resInfo;
};
export default useRestaurantMenu;