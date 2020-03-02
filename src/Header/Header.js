import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <img src={process.env.PUBLIC_URL + '/menu.svg'} alt="hamburger-menu-btn"/>
      <Link className="title-header" to='/games'>
        <h1>Just Baseball.<span>Beta</span></h1>
      </Link>
    </header>
  )
}

export default Header;
