import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/Notepad.png';

export const Navbar: React.FC = () => {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <NavLink to={'/'} className="navbar-brand">
          <img src={logo} alt="logo" width="32" height="32" className="d-inline-block align-text-top" />
          Note App
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to={'/'} exact>
                Список дел
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={'/about'}>
                Информация
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
