import { LOGO_URL } from "../utils/constants";

export const RestuarantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0", padding: "10px", margin: "10px", borderRadius: "8px" }}>
        <img className="res-logo"
            alt="Reslogo"
            src={LOGO_URL}
        >
      </img>
      <h3>{resData.name}</h3>
      <h4>{resData.cuisines}</h4>
      <h4>{resData.rating} stars</h4>
      <h4>{resData.deliveryTime}</h4>
    </div>
  )
}