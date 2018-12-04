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
            <h1 className='text-center title'>About Me</h1>
            <p className='text'>I am a Full Stack Web Developer from Norway, living in Los Angeles, California. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh praesent tristique magna sit amet purus gravida. Mauris cursus mattis molestie a iaculis at erat pellentesque. Eu sem integer vitae justo. Placerat orci nulla pellentesque dignissim enim sit amet venenatis. Commodo sed egestas egestas fringilla phasellus. Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum.</p>
            <p className='text'><strong>Top Skills: </strong>Ruby, Ruby on Rails, JavaScript, HTML, CSS, React.js</p>
            <p className='text'><strong>Tools I use: </strong>Sass, Git, GitHub, postgreSQL, mySQL, WordPress</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About
