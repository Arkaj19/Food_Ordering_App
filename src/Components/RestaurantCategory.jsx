import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ categoryData, showItems, setshowIndex }) => {
  // const [showItem, setShowItem] = useState(false);

  // const handleClick = () => {
  //   setShowItem(!showItem);
  // };
  console.log(categoryData);

  const title = categoryData?.card?.card?.title;
  const itemcards = categoryData?.card?.card?.itemCards || [];
  return (
    <div>
      <div className="w-6/12  items-center p-4 bg-gray-50 m-auto shadow-lg my-3">
        <div className="flex justify-between" onClick={setshowIndex}>
          <span className="cursor-pointer font-bold text-xl">
            {title} ({itemcards.length})
          </span>
          <span>{showItems ? "🔼" : "🔽"}</span>
        </div>
        {showItems && <ItemList items={categoryData.card.card.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
