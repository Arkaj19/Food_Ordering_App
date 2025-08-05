// import  RestaurantCard  from "./RestaurantCard";
// import { useEffect, useRef, useState } from "react";
// import Shimmer from "./Shimmer";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";

// const Body = () => {
//   const allRestaurantsRef = useRef([]); // Source of all truth
//   const [searchitem, setSearchitem] = useState(""); // The Searching text
//   const [filteredRestaurants, setfilterRestaurants] = useState([]); // The filtered restaurants

//   // The logic to handle the text being entered into the search bar
//   const handleinputChange = (e) => {
//     setSearchitem(e.target.value);
//   };

//   // The restaurant list being filtered on the basis of the Search value
//   const filterdata = (e) => {
//     console.log("Search triggered for:", searchitem);

//     if (searchitem.trim() === "") {
//       setfilterRestaurants(allRestaurantsRef.current);
//     } else {
//       const filtered = allRestaurantsRef.current.filter((r) => {
//         return r.info.name.toLowerCase().includes(searchitem.toLowerCase());
//       });
//       console.log("Filtered results:", filtered);
//       setfilterRestaurants(filtered);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   // Fetching data from the API
//   const fetchData = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9698196&lng=77.7499721&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );

//     const json_data = await data.json();
//     console.log(json_data);

//     const restaurant =
//       json_data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
//         ?.restaurants || [];

//     setfilterRestaurants(restaurant); // Initialize filtered restaurants
//     allRestaurantsRef.current = restaurant; // Initialiize the first render for all the restaurants
//   };

//     const status = useOnlineStatus();

//     if(status === false){
//       return <div>
//         {/* <img src="/dog.jpg" alt="Offline Dog" style={{ width: "200px" }} /> */}
//         <h1>Oops!! It seems you are not connected to internet!!</h1>
//       </div>
//     }

//   return allRestaurantsRef.current.length === 0 ? (
//     <Shimmer />
//   ) : (
//     <div className="body">
//       <div className="flex items-center justify-center p-4">
//         <input
//           type="text"
//           className="rounded-2xl border-2 mx-3 px-4"
//           placeholder="Search a Value"
//           value={searchitem}
//           onChange={handleinputChange}
//           onKeyPress={(e) => {
//             if (e.key === "Enter") filterdata();
//           }}
//         />
//         <button onClick={filterdata} className="bg-green-300 rounded-full p-2 cursor-pointer">
//           Search
//         </button>
//       </div>
//       <div className="px-2 m-4 space-x-5">
//         <button
//           className="rounded-full px-3 bg-green-300 cursor-pointer"
//           onClick={() => {
//             const filteredRestaurants = allRestaurantsRef.current.filter(
//               (res) => res.info.avgRating > 4.3
//             );
//             setfilterRestaurants(filteredRestaurants); // Filtering
//             console.log("Filtered restaurants:", filteredRestaurants);
//           }}
//         >
//           Top Rated Restaurants
//         </button>
//         <button
//           className="rounded-full px-3 bg-red-300 cursor-pointer"
//           onClick={() => {
//             setfilterRestaurants(allRestaurantsRef.current);
//           }}
//         >
//           All Restaurants
//         </button>
//       </div>
//       <div className="res-container">
//         {filteredRestaurants.map((res) => (
//           <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
//             <RestaurantCard resData={res} />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;

import RestaurantCard, { withDiscountedPrice } from "./RestaurantCard";
import { useEffect, useRef, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const allRestaurantsRef = useRef([]); // Source of all truth
  const [searchitem, setSearchitem] = useState(""); // The Searching text
  const [filteredRestaurants, setfilterRestaurants] = useState([]); // The filtered restaurants
  const [activeFilter, setActiveFilter] = useState("all"); // Track active filter

  const ResdiscountCard = withDiscountedPrice(RestaurantCard);

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
    allRestaurantsRef.current = restaurant; // Initialize the first render for all the restaurants
  };

  const status = useOnlineStatus();

  if (status === false) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-md">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-10 h-10 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            No Internet Connection
          </h1>
          <p className="text-gray-600">
            Please check your connection and try again
          </p>
        </div>
      </div>
    );
  }

  return allRestaurantsRef.current.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Search Section */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex items-center justify-center gap-4 flex-col sm:flex-row">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                className="w-full rounded-2xl border-2 border-gray-200 px-6 py-4 text-lg placeholder-gray-500 focus:border-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-100 transition-all duration-200"
                placeholder="Search restaurants..."
                value={searchitem}
                onChange={handleinputChange}
                onKeyPress={(e) => {
                  if (e.key === "Enter") filterdata();
                }}
              />
              <svg
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <button
              onClick={filterdata}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 active:scale-95"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Discover Restaurants
            </h2>
            <p className="text-gray-600">
              Find your favorite food from top-rated places
            </p>
          </div>

          <div className="flex justify-center items-center gap-4 flex-wrap">
            <button
              className={`relative px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg ${
                activeFilter === "top"
                  ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-emerald-200"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => {
                const filteredRestaurants = allRestaurantsRef.current.filter(
                  (res) => res.info.avgRating > 4.3
                );
                setfilterRestaurants(filteredRestaurants);
                setActiveFilter("top");
                console.log("Filtered restaurants:", filteredRestaurants);
              }}
            >
              <span className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Top Rated
              </span>
              {activeFilter === "top" && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              )}
            </button>

            <button
              className={`relative px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg ${
                activeFilter === "all"
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-blue-200"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => {
                setfilterRestaurants(allRestaurantsRef.current);
                setActiveFilter("all");
              }}
            >
              <span className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                All Restaurants
              </span>
              {activeFilter === "all" && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              )}
            </button>
          </div>

          {/* Results count */}
          <div className="text-center mt-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              {filteredRestaurants.length} restaurants found
            </span>
          </div>
        </div>
      </div>

      {/* Restaurant Cards Section */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="flex flex-wrap">
          {filteredRestaurants.map((res) => (
            <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
              <RestaurantCard resData={res} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
