import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "./context/context";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
  rootElement
);
