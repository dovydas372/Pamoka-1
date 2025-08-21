import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { WorkoutContextProvider } from "./context/WorkoutContext";
import { AuthContextProvider } from "./context/AuthContext";
import { ProgramContextProvider } from "./context/ProgramaContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProgramContextProvider>
      <AuthContextProvider>
        <WorkoutContextProvider>
          <App />
        </WorkoutContextProvider>
      </AuthContextProvider>
    </ProgramContextProvider>
  </React.StrictMode>
);
