import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import  useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  const [islogged, setislogged] = useState(false);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    console.log("UseEffect Called");
  }, [islogged]);

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src="src\assets\Food.png"></img>
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status : { onlineStatus === true? "🟢" : "🔴" }
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
