import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "@pages/Dashboard";
import React from "react";

const routerObject = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [],
  },
]);

export default function Router(): React.JSX.Element {
  return <RouterProvider router={routerObject} />;
}
