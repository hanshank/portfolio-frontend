import React from 'react';
import video from './pedestrians.mp4';
import logo from './logo.svg';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className='banner'>
      <NavLink to="/" className="navLink logo">
        <img className="" src={logo} alt="Company logo" />
      </NavLink>
      <div class="fullscreenBg">
        <div className="bannerText uppercase text-center">
          <h1 className='bannerTitle'>I am Hans Hanken</h1>
          <p className='bannerSubTitle'>I build kickass websites</p>
        </div>
        <div className='socialIcons'>
          <a href='https://linkedin.com/in/hans-martin-hanken/' target="_blank"><span className='icon icLi'>LinkedIn</span></a>
          <a href='https://github.com/hanshank' target="_blank"><span className='icon icGi'>GitHub</span></a>
        </div>
        <video autoPlay muted loop id="myVideo">
          <source src={video} type="video/mp4"/>
        </video>
      </div>
    </div>
  );
}

export default Home;
