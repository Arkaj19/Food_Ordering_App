import { RestuarantCard } from "./RestaurantCard";
import { Data } from "../utils/mockdata";

export const Body = () => {
  return (
    <div className="body">
      <div className="search">
        Search
      </div>
      <div className="res-container">
        {Data.map((res) => (
          <RestuarantCard key={res.id} resData={res} />
        ))}
      </div>
    </div>
  )
}