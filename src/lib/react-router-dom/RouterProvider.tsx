import { ComponentProps } from "react";
import { RouterProvider as ReactRouterProvider } from "react-router-dom";

export const RouterProvider = ({
  ...props
}: ComponentProps<typeof ReactRouterProvider>) => {
  return <ReactRouterProvider {...props} />;
};
