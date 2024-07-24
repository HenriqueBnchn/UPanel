import React from 'react';
import './styles.css'
import { useLocation } from 'react-router-dom';
import { ReactComponent as Search } from "../../assets/search.svg"
import { ReactComponent as Notification } from "../../assets/notification.svg"
import { ReactComponent as Info } from "../../assets/info.svg"
import { ReactComponent as Moon } from "../../assets/moon.svg"
import { ReactComponent as Profile } from "../../assets/profile.svg"

const Header = () => {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Dashboard';
      case '/network':
        return 'Network';
      case '/folder':
        return 'Folder';
      case '/terminal':
        return 'Terminal';
      default:
        return 'Meu Dashboard';
    }
  };
  return (
    <div className="header">
      <div className="header_section_div">
        <div className="header_nav">
          <h4>Pages</h4>
          <h4> / </h4>
          <h4 id='header-page'>{getTitle()}</h4>
        </div>
        <h1>{getTitle()}</h1>
      </div>
      <div className="control_panel">
        <div className="searchbar_div">
          <Search />
          <input type="text" placeholder='Search' />
        </div>
        <div className="options_div">
          <Notification />
          <Moon />
          <Info />
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Header;
