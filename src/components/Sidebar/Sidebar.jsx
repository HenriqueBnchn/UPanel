import React from 'react';
import "./styles.css"
import { Link, useLocation } from 'react-router-dom';
import logo from "../../assets/archlinuxlogo.png"
import { ReactComponent as Home } from "../../assets/home.svg"
import { ReactComponent as Folder } from "../../assets/folder.svg"
import { ReactComponent as Network } from "../../assets/network.svg"
import { ReactComponent as Terminal } from "../../assets/terminal.svg"

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <div className="sidebar_logo_div">
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <li className={location.pathname === '/' ? 'selected' : ''}><Home/><Link to="/">Dashboard</Link></li>
        <li className={location.pathname === '/folder' ? 'selected' : ''}><Folder /><Link to="/folder">Folder</Link></li>
        <li className={location.pathname === '/network' ? 'selected' : ''}><Network /><Link to="/network">Network</Link></li>
        <li className={location.pathname === '/terminal' ? 'selected' : ''}><Terminal /><Link to="/terminal">Terminal</Link></li>
        
      </ul>
    </aside>
  );
};

export default Sidebar;
