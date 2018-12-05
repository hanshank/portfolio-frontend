import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className='socialIcons'>
        <div className='icon-container text-center'>
          <a href='https://linkedin.com/in/hans-martin-hanken/' target='_blank'><span className='icon icLi'>LinkedIn</span></a>
        </div>
        <div className='icon-container text-center'>
          <a href='https://github.com/hanshank' target='_blank'><span className='icon icGi'>GitHub</span></a>
        </div>
        <div className='icon-container text-center'>
          <a href='mailto:hansmhank@gmail.com' target='_blank'><span className='icon icEm'>Email</span></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
