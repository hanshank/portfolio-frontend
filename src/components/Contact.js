import React from 'react';
import Footer from './Footer.js';

const Contact = () => {
  return (
    <div className='contact-page'>
      <div className='page-content'>
        <h1 className='main-title text-center'>Hit Me Up</h1>
        <p className='text'>I would love to hear from you. Feel free to send me an email via the address below:</p>
        <a href="mailto:hansmhank@gmail.com" className='text email'>hansmhank@gmail.com</a>

      <Footer />
      </div>
    </div>
  );
}

export default Contact;
