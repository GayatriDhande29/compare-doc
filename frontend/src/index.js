// Import necessary modules
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Import global styles (if any)
import "./index.css";

// Get the root DOM element
const rootElement = document.getElementById("root");

// Render the App component
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);