import App from "@/App";
import { createBrowserRouter } from "react-router";

export let router = createBrowserRouter([
  {
    path: "/",
    // element: <h1 className="text-3xl font-bold underline">home</h1>
    Component: App,
    // loader: loadRootData,
  },
]);
