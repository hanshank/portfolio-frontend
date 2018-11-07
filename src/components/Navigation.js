import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navbar">
        <NavLink to="/about" className="navLink">About</NavLink>
        <NavLink to="/contact" className="navLink">Contact</NavLink>
      </div>
    </div>
  );
}

export default Navigation;
