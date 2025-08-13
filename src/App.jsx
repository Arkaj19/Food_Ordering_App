import { useEffect, useState } from "react";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./Store/appStore";

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
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

export default AppLayout;
