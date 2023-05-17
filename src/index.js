import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./components/app/app.jsx";

import "./style/_global.scss"

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
