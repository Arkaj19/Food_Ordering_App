import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../Store/cartSlice";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();

  const handleItem = (item) => {
    // We dispatch an action
    dispatch(addItem(item))
  }

  if (!items || items.length === 0) {
    return <div>No items availabe</div>;
  } 
  return (
    <div>
      {items.map((item) => {
        const itemInfo = item?.card?.info;
        if (!itemInfo) {
          return null;
        }
        return (
          <div
            key={itemInfo.id}
            className="border-b border-gray-400 pb-4 my-4 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span className="font-bold"> {itemInfo.name}</span>
                <span>
                  {" "}
                  - ₹{" "}
                  {itemInfo.price
                    ? itemInfo.price / 100
                    : itemInfo.defaultPrice / 100}
                </span>
              </div>
              <span className="text-xs">{itemInfo.description}</span>
            </div>

            <div className="w-3/12 p-4">
              <div className="absolute">
                <button className=" px-4 py-1 bg-white text-green-500 border font-bold border-gray-300 rounded-lg shadow-md cursor-pointer"
                onClick={() => handleItem(item)}>
                  ADD
                </button>
              </div>
              <img src={CDN_URL + itemInfo.imageId}></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
