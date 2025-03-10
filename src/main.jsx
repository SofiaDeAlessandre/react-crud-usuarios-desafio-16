import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import Rutas from "./routes/Rutas.jsx";
import NavBar from "./components/NavBar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <NavBar/>
      <div className="container mx-auto">
        <Rutas />
      </div>
    </BrowserRouter>
  </StrictMode>
);
