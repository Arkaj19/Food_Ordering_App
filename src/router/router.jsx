import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../App";
import Error from "../Components/Error";
import { lazy, Suspense } from "react";
import Cart from "../Components/Cart";

// Lazy load components
const Body = lazy(() => import("../Components/Body"));
const About = lazy(() => import("../Components/About"));
const Contact = lazy(() => import("../Components/Contact"));
const RestaurantMenu = lazy(() => import("../Components/RestaurantMenu"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resid",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);

export default appRouter;
