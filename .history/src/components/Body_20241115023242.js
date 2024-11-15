import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/browse",
      element: "<Browse/>",
    },
  ]);
  return (
    <div>
      <RouterProvider>
    </div>
  );
};

export default Body;
