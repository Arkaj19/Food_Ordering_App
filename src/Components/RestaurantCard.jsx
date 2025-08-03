import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { info } = resData;

  return (
    <div className="res-card">
      <img
        src={CDN_URL + info.cloudinaryImageId}
        alt={info.name}
        className="res-logo"
      />
      <h3>{info.name}</h3>
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
