import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Root from "../Root";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "home",
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
