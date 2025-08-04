import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [islogged, setislogged] = useState(false);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    console.log("UseEffect Called");
  }, [islogged]);

  return (
    <div className="flex justify-between items-center py-4 px-6 bg-orange-300">
      <div className="flex items-center">
        <Link to="/">
          <img className="h-40 w-90" src="src\assets\Food.png"></img>
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex items-center space-x-6">
          <li className="text-sm">
            Online Status : {onlineStatus === true ? "🟢" : "🔴"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              setislogged(!islogged);
            }}
          >
            {islogged ? "LogOut" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
