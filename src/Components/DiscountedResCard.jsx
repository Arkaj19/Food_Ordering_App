import React from "react";

const DiscountedResCard = (RestaurantCard) => {
  return function wrapResCard({ discountInfo, ...props }) {
    return (
      <div className="relative">
        <div>
          {discountInfo?.header} {discountInfo?.subHeader}
        </div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default DiscountedResCard;
