import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationItems = props => {
  let containerClass = props.containerClass;

  return(
    <div className={containerClass}>
      <div className='nav-item'>
        <NavLink to="/portfolio" className="navLink">Portfolio</NavLink>
      </div>
      <div className='nav-item'>
        <NavLink to="/about" className="navLink">About</NavLink>
      </div>
      <div className='nav-item'>
        <NavLink to="/contact" className="navLink">Contact</NavLink>
      </div>
    </div>
  );
}



export default NavigationItems;
