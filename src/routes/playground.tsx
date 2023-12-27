import { RouteObject } from "react-router-dom";

import MainScene from "../components/layouts/MainScene";
import PlaygroundGuard from "../guards/Playground.guard";

import PlaygroundOne from "../pages/playground/1";
import PlaygroundTwo from "../pages/playground/2";
import PlaygroundThree from "../pages/playground/3";

const playgroundRoutes: RouteObject = {
  path: "playground",
  element: (
    <MainScene>
      <PlaygroundGuard />
    </MainScene>
  ),
  children: [
    {
      path: "1",
      children: [
        {
          path: "1",
          element: <PlaygroundOne />,
          index: true,
        },
        {
          path: "2",
          element: <PlaygroundTwo />,
        },
        {
          path: "3",
          element: <PlaygroundThree />,
        },
      ],
    },
  ],
};

export default playgroundRoutes;
