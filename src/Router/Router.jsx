import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../Components/Home";
import PDP from "../PDP/PDP";
import Cart from "../Cart/Cart";
import ErrorPage from "../Components/ErrorPage";
import AboutUs from "../Components/About";
import Shipping from "../Shipping/Shipping";
import OrderConfirmation from "../Orders/OrderConfirmation";
import FAQ from "../Components/FAQ";
import ContactUs from "../Components/ContactUs";
import Orders from "../Orders/Orders";

export default function Router() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/product/:id",
      element: <PDP />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/cart",
      element: <Cart />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/about",
      element: <AboutUs />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/shipping",
      element: <Shipping />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/OrderConfirmation",
      element: <OrderConfirmation />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/FAQ",
      element: <FAQ />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/ContactUs",
      element: <ContactUs />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/orders",
      element: <Orders />,
      errorElement: <ErrorPage />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}
