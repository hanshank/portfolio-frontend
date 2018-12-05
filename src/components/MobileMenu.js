import React from 'react';
import { NavLink } from 'react-router-dom';
import NavigationItems from './NavigationItems';
import MenuToggleButton from './MenuToggleButton';


const MobileMenu = props => {

  let mobileMenuClasses = 'mobile-menu';
  if (props.show) {
    mobileMenuClasses = 'mobile-menu open';
  }

  const hello = () => {
    console.log("hello")
  };

    return (
      <div className={mobileMenuClasses}>
        <MenuToggleButton iconContainerClass='exit-icon-container' iconClass='exit-icon' click={props.mobileMenuHandler} />
        <ul className='mobile-nav-items'>
          <li className='mobile-nav-item' onClick={props.mobileMenuHandler}>
            <NavLink to="/portfolio" className="mobile-nav-link">Portfolio</NavLink>
          </li>
          <li className='mobile-nav-item' onClick={props.mobileMenuHandler}>
            <NavLink to="/about" className="mobile-nav-link">About</NavLink>
          </li>
          <li className='mobile-nav-item' onClick={props.mobileMenuHandler}>
            <NavLink to="/contact" className="mobile-nav-link">Contact</NavLink>
          </li>
        </ul>
      </div>
    );

};

export default MobileMenu;
