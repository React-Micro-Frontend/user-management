import React from "react";
import "./index.css";
import App from "./App";

// Wrapper component that ensures CSS is loaded when exposed via Module Federation
export default function AppWithStyles() {
  return <App />;
}
