import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { info } = resData;
 
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-300" >
      <img
        src={CDN_URL + info.cloudinaryImageId}
        alt={info.name}
        className="rounded-lg shadow-lg hover:"
      />
      <h3 className="text-lg justify-center py-2 font-bold">{info.name}</h3>
      <h4>
        <strong>Cuisines:</strong> {info.cuisines.join(", ")}
      </h4>
      <h4>
        <strong>Rating:</strong> {info.avgRating} ⭐
      </h4>
      <h4>
        <strong>Delivery Time:</strong> {info.sla.slaString}
      </h4>  
    </div>
  );
};

export default RestaurantCard;
