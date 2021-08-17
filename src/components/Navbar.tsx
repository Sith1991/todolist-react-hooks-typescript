import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar:React.FC = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={'/'}>
          <img src="../svg/note.svg" alt="" width="30" height="24"
               className="d-inline-block align-text-top">
            Note App
        </NavLink>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link active" to={'/'}>Список дел</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={'/about'}>Информация</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};