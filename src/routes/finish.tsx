import { RouteObject } from "react-router-dom";

import FinishGuard from "../guards/Finish.guard";

import FinishOne from "../pages/finish/1";

const finishRoutes: RouteObject = {
  path: "finish",
  element: <FinishGuard />,
  children: [
    {
      path: "1",
      element: <FinishOne />,
    },
  ],
};

export default finishRoutes;
