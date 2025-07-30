import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../App";
import { Body } from "../Components/Body";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Error from "../Components/Error";
import RestaurantMenu from "../Components/RestaurantMenu";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resid",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

export default appRouter;
