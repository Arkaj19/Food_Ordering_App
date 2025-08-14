// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import ItemList from "./ItemList";
// import { clearCart } from "../Store/cartSlice";

// const Cart = () => {
//   const cartItems = useSelector((store) => store.cart.items);

//   const dispatch = useDispatch();

//   const handleClearCart = () => {
//     dispatch(clearCart());
//   };

//   return (
//     <div className="text-center m-4 p-4">
//       <h1 className="font-bold text-2xl">Cart</h1>
//       <button className=" px-4 py-1 m-4 bg-white text-green-500 border font-bold border-gray-300 rounded-lg shadow-md cursor-pointer"
//       onClick={handleClearCart}>
//         Clear Cart
//       </button>
//       <ItemList items={cartItems} />
//     </div>
//   );
// };

// export default Cart;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Calculate total items count
  const totalItems = cartItems.length;

  return (
    <div className="text-center m-4 p-4">
      {/* Header with item count */}
      <div className="flex justify-center items-center gap-2 mb-4">
        <h1 className="font-bold text-2xl">Cart</h1>
        {totalItems > 0 && (
          <span className="bg-green-500 text-white rounded-full px-2 py-1 text-sm">
            {totalItems} {totalItems === 1 ? "item" : "items"}
          </span>
        )}
      </div>

      {/* Conditional rendering based on cart state */}
      {cartItems.length === 0 ? (
        // Empty cart state
        <div className="py-8">
          <div className="text-6xl mb-4">🛒</div>
          <h3 className="text-lg font-medium text-gray-600 mb-2">
            Your cart is empty
          </h3>
          <p className="text-gray-500">Start adding some delicious items!</p>
        </div>
      ) : (
        // Cart has items
        <>
          <button
            className="px-4 py-1 m-4 bg-red-500 hover:bg-red-600 text-white border font-bold border-gray-300 rounded-lg shadow-md cursor-pointer transition-colors"
            onClick={handleClearCart}
          >
            Clear Cart ({totalItems})
          </button>
          <ItemList items={cartItems} />
        </>
      )}
    </div>
  );
};

export default Cart;
