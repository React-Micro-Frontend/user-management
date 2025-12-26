import React from "react";
import App from "./App";

// Wrapper component for Module Federation
// CSS is now compiled in custom-main and shared across all remotes
export default function AppWithStyles() {
  return <App />;
}
