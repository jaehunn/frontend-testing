import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";

import AppErrorBoundary from "~/AppErrorBoundary";

const App = lazy(() => import("~/App"));

export const routes: RouteObject[] = [
  {
    path: "/",
    loader: async () => {
      console.log("loading...");

      return {
        // ...
      };
    },
    errorElement: <AppErrorBoundary />,
    element: <App />,
    children: [
      // ...
    ],
  },
  {
    path: "*",
    element: <Navigate replace to="/" />,
  },
];
