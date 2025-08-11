import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ categoryData }) => {
  const [showItem, setShowItem] = useState(false);

  const handleClick = () => {
    setShowItem(!showItem);
  };

  const title = categoryData?.card?.card?.title;
  const itemcards = categoryData?.card?.card?.itemCards || [];
  return (
    <div>
      <div className="w-6/12  items-center p-4 bg-gray-50 m-auto shadow-lg my-3">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="cursor-pointer font-bold">
            {title} ({itemcards.length})
          </span>
          <span>{showItem ? "🔼" : "🔽"}</span>
        </div>
        {showItem && <ItemList items={categoryData.card.card.itemCards} />}
      </div>
    </div>

    /* Accordian Body */
  );
};

export default RestaurantCategory;
