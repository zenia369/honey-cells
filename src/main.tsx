import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import "@dotlottie/player-component";
import { theme } from "./assets/chakra.ts";
import root from "./routes/root.tsx";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={root} />
    </ChakraProvider>
  </React.StrictMode>
);
