const DiscountedResCard = (RestaurantCard) => {
  return function wrapResCard({ discountInfo, ...props }) {
    return (
      <div className="relative">
        <div className="absolute top-2 left-2 bg-orange-500 text-white px-3 py-1 rounded-r-lg shadow-md text-xs font-bold z-10">
          {discountInfo?.header} {discountInfo?.subHeader}
        </div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default DiscountedResCard; 
