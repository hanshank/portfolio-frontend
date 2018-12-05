import React, { Component } from 'react';
import Footer from './Footer.js';

class About extends Component {

  componentDidMount(props) {
   console.log('GrandChild did mount.');
  }

  render() {
    return (
      <div className='page'>
        <div className='page-content fullscreen-center'>
          <div>
            <h1 className='text-center main-title'>About Me</h1>
            <p className='text'>I am a Full Stack Web Developer from Norway. I am now living in Los Angeles, California with my lovely wife and dog. I have a great passion for creating modern and functional websites with react.js and Ruby on Rails. There is no challenge too large or too small.</p>
            <p className='text'><strong>Top Skills: </strong>Ruby, Ruby on Rails, JavaScript, HTML, CSS, React.js</p>
            <p className='text'><strong>Tools I use: </strong>Sass, Git, GitHub, postgreSQL, mySQL, WordPress</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About
