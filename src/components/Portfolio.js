import React, { Component } from 'react';
import Image from './laptop.png';
import Footer from './Footer.js';

class Portfolio extends Component {

  constructor(props) {
     super(props);

  }
  //
  // componentDidMount() {
  //   const homepageContent = document.querySelector('.homepage-content');
  //   homepageContent.classList.add('hide')
  // }


  render() {
    return (
      <div className='portfolio-page'>

        <div className='page-content'>
          <div className='projects-header'>
            <h1 className='text-center main-title'>Projects</h1>
            <p className='text'>I am always working on some cool project. Check out some of my work below by clicking on the title</p>
          </div>

          <div className='project'>
            <div className='project-inner'>
              <h1 className='title'>Portfoliopage</h1>
              <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh praesent tristique magna sit amet purus gravida. Mauris cursus mattis molestie a iaculis at erat pellentesque. Eu sem integer vitae justo. Placerat orci nulla pellentesque dignissim enim sit amet venenatis. Commodo sed egestas egestas fringilla phasellus. Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum.</p>
              <p className='text'><strong>Skills used: </strong>Ruby on Rails, JavaScript, HTML, CSS, Bootstrap</p>
              <a className='button' href="https://hanshanken.com" target="_blank">See Website</a>
            </div>
          </div>

          <div className='project'>
            <div className='project-inner'>
              <h1 className='title'>Muli Clothing</h1>
              <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh praesent tristique magna sit amet purus gravida. Mauris cursus mattis molestie a iaculis at erat pellentesque. Eu sem integer vitae justo. Placerat orci nulla pellentesque dignissim enim sit amet venenatis. Commodo sed egestas egestas fringilla phasellus. Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum.</p>
              <p className='text'><strong>Skills used: </strong>Ruby on Rails, JavaScript, HTML, CSS, Bootstrap</p>
              <a className='button' href="https://muliclothing.com" target="_blank">See Website</a>
            </div>
          </div>

          <div className='project'>
            <div className='project-inner'>
              <h1 className='title'>Ulsbygg</h1>
              <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh praesent tristique magna sit amet purus gravida. Mauris cursus mattis molestie a iaculis at erat pellentesque. Eu sem integer vitae justo. Placerat orci nulla pellentesque dignissim enim sit amet venenatis. Commodo sed egestas egestas fringilla phasellus. Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum.</p>
              <p className='text'><strong>Skills used: </strong>Ruby on Rails, JavaScript, HTML, CSS, Bootstrap</p>
              <a className='button' href="https://ulsbygg.no" target="_blank">See Website</a>
            </div>
          </div>

          <div className='project'>
            <div className='project-inner'>
              <h1 className='title'>Byes</h1>
              <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh praesent tristique magna sit amet purus gravida. Mauris cursus mattis molestie a iaculis at erat pellentesque. Eu sem integer vitae justo. Placerat orci nulla pellentesque dignissim enim sit amet venenatis. Commodo sed egestas egestas fringilla phasellus. Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum.</p>
              <p className='text'><strong>Skills used: </strong>Ruby on Rails, JavaScript, HTML, CSS, Bootstrap</p>
              <a className='button' href="https://byes.no" target="_blank">See Website</a>
            </div>
          </div>

          <Footer />

        </div>
      </div>

    );
  }
}

export default Portfolio;
