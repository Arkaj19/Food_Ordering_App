// // import { RestaurantCard } from "./RestaurantCard";
// import { RestaurantCard } from "./RestaurantCard";
// import { Data } from "../utils/swiggy_data";
// import { useState } from "react";

// export const Body = () => {

//   const [restaurant, setRestaurant] = useState(Data);

//   return (
//     <div className="body">
//     <div className="filter">
//         <button className="filter-btn"
//           onClick={() => {
//             setRestaurant(restaurant.filter(
//               (res) => res.rating > 4
//             ));
//             console.log(restaurant);
//           }}>
//           Top Rated Restaurants
//         </button>
//     </div>
//     <div className="res-container">
//         {restaurant.map((res) => (
//             <RestaurantCard key={res.id} resData={res} />
//         ))}
//     </div>
//     </div>
//   )
// }

import { RestaurantCard } from "./RestaurantCard";
import { Data } from "../utils/swiggy_data";
import { useState } from "react";

export const Body = () => {
  // Extract restaurant data from the nested structure
  const extractRestaurantData = () => {
    // Navigate through the nested structure to find restaurants
    const cards = Data[0]?.data?.cards || [];
    
    // Find the card that contains restaurant data (usually the second card with GridWidget)
    const restaurantCard = cards.find(card => 
      card.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    
    return restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
  };

  const [restaurants, setRestaurants] = useState(extractRestaurantData());

  return (
    <div className="body">
      <div className="filter">
        <button 
          className="filter-btn"
          onClick={() => { 
            const filteredRestaurants = extractRestaurantData().filter(
              (res) => res.info.avgRating > 4.5
            );
            setRestaurants(filteredRestaurants);
            console.log("Filtered restaurants:", filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
        <button 
          className="filter-btn"
          onClick={() => { 
            setRestaurants(extractRestaurantData());
          }}
        >
          All Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};