import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);

  // UseEffect tskes two parameters a funtion and a dependency array
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9698196&lng=77.7499721&restaurantId=573190&catalog_qa=undefined&submitAction=ENTER"
    );

    // Converting the received data into JSON format
    const res_data = await data.json();
    console.log(res_data);
    setresInfo(res_data);
  };

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>Name of the Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet COke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
