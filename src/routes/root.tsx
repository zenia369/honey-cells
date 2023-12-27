import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import playgroundRoutes from "./playground";
import finishRoutes from "./finish";

const root = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  playgroundRoutes,
  finishRoutes,
]);

export default root;
