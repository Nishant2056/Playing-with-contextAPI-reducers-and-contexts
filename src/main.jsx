import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import CounterStore from "./store/Store.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterStore>
      <App />
    </CounterStore>
  </StrictMode>
);
