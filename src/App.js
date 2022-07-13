import React from "react";
//import { Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import MainDash from "./components/MainDash/MainDash";
//import Accueil from "./pages/Accueil";

function App() {
  return (
    <div className="App">
      <div className="AppGlasws">
        <Sidebar></Sidebar>
        <MainDash></MainDash>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
