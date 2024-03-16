import { Navigate, RouteObject } from "react-router-dom";

import { App } from "~/pages";
import AppErrorBoundary from "~/pages/AppErrorBoundary";

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
