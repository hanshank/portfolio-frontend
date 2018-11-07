import React, { Component } from 'react';

class TopMenu extends Component {
  render() {
    return (
      <NavLink to="/" className="navLink logo">
        <img className="" src={logo} alt="Company logo" />
      </NavLink>
      <div className='socialIcons'>
        <span className='icon icLi'>LinkedIn</span>
        <span className='icon icGi'>GitHub</span>
      </div>  
    )
  })
}

export default TopMenu;
