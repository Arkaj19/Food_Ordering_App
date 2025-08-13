import { useEffect, useState } from "react";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/userContext";

const AppLayout = () => {
  const [userName, setUserName] = useState();

  //authentication logic
  useEffect(() => {
    // Here we will be making any API call and send the username and password
    const data = {
      name: "Arkajyoti",
    };
    setUserName(data.name); // This sets the value of userName to the name of the data object
  }, []);

  return (
    <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

export default AppLayout;
