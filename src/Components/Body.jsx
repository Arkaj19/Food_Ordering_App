import  RestaurantCard  from "./RestaurantCard";
import { Data } from "../utils/swiggy_data";
import { useEffect, useRef, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const allRestaurantsRef = useRef([]); // Source of all truth
  const [searchitem, setSearchitem] = useState(""); // The Searching text
  const [filteredRestaurants, setfilterRestaurants] = useState([]); // The filtered restaurants

  // The logic to handle the text being entered into the search bar
  const handleinputChange = (e) => {
    setSearchitem(e.target.value);
  };

  // The restaurant list being filtered on the basis of the Search value
  const filterdata = (e) => {
    console.log("Search triggered for:", searchitem);

    if (searchitem.trim() === "") {
      setfilterRestaurants(allRestaurantsRef.current);
    } else {
      const filtered = allRestaurantsRef.current.filter((r) => {
        return r.info.name.toLowerCase().includes(searchitem.toLowerCase());
      });
      console.log("Filtered results:", filtered);
      setfilterRestaurants(filtered);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Fetching data from the API
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9698196&lng=77.7499721&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json_data = await data.json();
    console.log(json_data);

    const restaurant =
      json_data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setfilterRestaurants(restaurant); // Initialize filtered restaurants
    allRestaurantsRef.current = restaurant; // Initialiize the first render for all the restaurants
  };

    const status = useOnlineStatus();

    if(status === false){
      return <div>
        {/* <img src="/dog.jpg" alt="Offline Dog" style={{ width: "200px" }} /> */}
        <h1>Oops!! It seems you are not connected to internet!!</h1>
      </div>
    }

  return allRestaurantsRef.current.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="Search a Value"
          value={searchitem}
          onChange={handleinputChange}
          onKeyPress={(e) => {
            if (e.key === "Enter") filterdata();
          }}
        />
        <button onClick={filterdata} className="search-btn">
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurants = allRestaurantsRef.current.filter(
              (res) => res.info.avgRating > 4.3
            );
            setfilterRestaurants(filteredRestaurants); // Filtering
            console.log("Filtered restaurants:", filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setfilterRestaurants(allRestaurantsRef.current);
          }}
        >
          All Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;