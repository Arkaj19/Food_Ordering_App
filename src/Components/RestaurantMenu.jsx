import { use, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const resInfo = useRestaurantMenu(resid);

  if (!resInfo) return <Shimmer />;
  const restaurant = resInfo?.data?.cards[2]?.card?.card?.info;
  const itemCards =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]
      ?.card?.card?.itemCards || [];

  // Your friend's code (correct)
  const allCards =
    resInfo?.data?.cards?.find(
      (card) => card?.groupedCard?.cardGroupMap?.REGULAR // This returns a boolean
    )?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const categories = allCards.filter((cardobj) => {
    const type = cardobj?.card?.card?.["@type"];
    return (
      type === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
      type ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
  });

  console.log(categories);

  return (
    <div className="text-center justify-between ">
      <h1 className="font-bold text-4xl my-4">{restaurant.name}</h1>
      <h2 className="font-bold text-2xl p-2">{restaurant.avgRating}</h2>

      {/* Accordian Categories map */}
      <div>
        {categories.map((category,i) => {
          return <RestaurantCategory  key={i} categoryData={category}/>;
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
