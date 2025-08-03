import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resid } = useParams();
  // const [resInfo, setresInfo] = useState(null);

  const resInfo = useRestaurantMenu(resid);

  // UseEffect tskes two parameters a funtion and a dependency array
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resid);

  //   // Converting the received data into JSON format
  //   const res_data = await data.json();
  //   // console.log(res_data);
  //   setresInfo(res_data);
  // };

  if (!resInfo) return <Shimmer />;
  const restaurant = resInfo?.data?.cards[2]?.card?.card?.info;
  const itemCards =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]
      ?.card?.card?.itemCards || [];

  // console.log(itemCards);
  return (
    <div className="menu">
      <h1>{restaurant.name}</h1>
      <h2>{restaurant.avgRating}</h2>
      <h2>Menu</h2>
      {itemCards.map((item) => {
        const i = item.card.info;
        return (
          <ul>
            <li key={i.id}>{i.name}</li>
            <li>{i.description}</li>
            <li>{i.defaultPrice / 100}</li>
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/${i.imageId}`}
              alt={i.name}
              style={{ width: "150px", borderRadius: "12px" }}
            />
          </ul>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
