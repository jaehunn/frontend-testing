import { createBrowserRouter, createMemoryRouter } from "react-router-dom";

import { routes } from "./routes";

export const browserRouter = () => createBrowserRouter(routes);
export const memoryRouter = () => createMemoryRouter(routes);

export * from "./RouterProvider";
