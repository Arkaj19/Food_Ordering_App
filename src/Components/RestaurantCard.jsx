// import { LOGO_URL } from "../utils/constants";

// export const RestuarantCard = (props) => {
//   const { resData } = props;
//   return (
//     <div className="res-card" style={{ backgroundColor: "#f0f0f0", padding: "10px", margin: "10px", borderRadius: "8px" }}>
//         <img className="res-logo"
//             alt="Reslogo"
//             src={LOGO_URL}
//         >
//       </img>
//       <h3>{resData.name}</h3>
//       <h4>{resData.cuisines}</h4>
//       <h4>{resData.rating} stars</h4>
//       <h4>{resData.deliveryTime}</h4>
//     </div>
//   )
// }

import { CDN_URL } from "../utils/constants";

export const RestaurantCard = (props) => {
  const { resData } = props;
  const { info } = resData;
  
  return (
    <div className="res-card"
      // style={{ 
      // padding: "20px", 
      // margin: "10px", 
      // border: "1px solid #ccc", 
      // borderRadius: "8px",
      // width: "250px"
      // }}
    >
      <img 
        src={CDN_URL + info.cloudinaryImageId} 
        alt={info.name}
        className="res-logo"
      />
      <h3>{info.name}</h3>
      <h4><strong>Cuisines:</strong> {info.cuisines.join(", ")}</h4>
      <h4><strong>Rating:</strong> {info.avgRating} ⭐</h4>
      <h4><strong>Delivery Time:</strong> {info.sla.slaString}</h4>
    </div>
  );
};