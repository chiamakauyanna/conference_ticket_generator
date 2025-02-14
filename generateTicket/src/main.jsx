import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { FormContext } from "./context/FormContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FormContext>
      <App />
    </FormContext>
  </StrictMode>
);
