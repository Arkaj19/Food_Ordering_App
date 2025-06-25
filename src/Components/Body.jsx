import { RestuarantCard } from "./RestaurantCard";
import { Data } from "../utils/mockdata";
import { useState } from "react";

export const Body = () => {

  const [restaurant, setRestaurant] = useState(Data);

  return (
    <div className="body">
    <div className="filter">
        <button className="filter-btn"
          onClick={() => { 
            setRestaurant(restaurant.filter(
              (res) => res.rating > 4
            ));
            console.log(restaurant);
          }}>
          Top Rated Restaurants
        </button>
    </div>
    <div className="res-container">
        {restaurant.map((res) => (
            <RestuarantCard key={res.id} resData={res} />
        ))}
    </div>
    </div>
  )
}