import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="navigation ">
        <NavLink to="/">
          <li>Tableau</li>
        </NavLink>

        <NavLink to="/Contrats">
          <li>Contrats</li>
        </NavLink>

        <NavLink to="/Clients">
          <li>Clients</li>
        </NavLink>

        <NavLink to="/Produits">
          <li>Produits</li>
        </NavLink>

        <NavLink to="/Analytique">
          <li>Analytique</li>
        </NavLink>

        <NavLink to="/Deconnexion">
          <li>Deconnexion</li>
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
