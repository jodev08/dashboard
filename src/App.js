import React from "react";
//import { Routes, Route } from "react-router-dom";
import "./App.css";
//import Sidebar from "./components/Sidebar/Sidebar";
//import MainDash from "./components/MainDash/MainDash";
//import RightSide from "./components/RightSide/RightSide";
import { Routes, Route } from "react-router-dom";

import Deconnexion from "./components/pages/Deconnexion";
import Global from "./components/Global/Global";
import Tableau from "./components/pages/Tableau";
import Analytique from "./components/pages/Analytique";
import Clients from "./components/pages/Clients";
import Contrats from "./components/pages/Contrats";
import Produits from "./components/pages/Produits";

function App() {
  return (
    //<div className="App">
    //<div className="AppGlasws">
    <Routes>
      <Route path="/" element={<Global />}></Route>
      <Route path="/Produits" element={<Produits />}></Route>
      <Route path="/Analytique" element={<Analytique />}></Route>
      <Route path="/Clients" element={<Clients />}></Route>
      <Route path="/Contrats" element={<Contrats />}></Route>
      <Route path="/" element={<Tableau />}></Route>

      <Route path="/Deconnexion" element={<Deconnexion />}></Route>
    </Routes>
    //</div>
    //</div>
  );
}

export default App;
