import React from "react";
import "./App.scss";
import { User } from "./components/User";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <div className="app--container">
      <ThemeProvider>
        <User />
      </ThemeProvider>
    </div>
  );
}

export default App;
