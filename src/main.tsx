import React from "react";
import ReactDOM from "react-dom/client";
import "~/reset.css";
import "~/global.css";

import { RouterProvider, browserRouter } from "~/lib/react-router-dom";

enableMocking().then(() =>
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <RouterProvider router={browserRouter()} />
    </React.StrictMode>
  )
);

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("~/mocks/browser");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start({
    onUnhandledRequest: "bypass",
  });
}
