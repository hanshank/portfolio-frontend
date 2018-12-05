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
      <div className='portfolio-page padding-bottom'>
        <div className='page-content'>
          <div className='projects-header'>
            <h1 className='text-center main-title'>Projects</h1>
            <p className='text text-center'>I am always working on awesome projects. Feel free to check out some of my work below</p>
          </div>

          <div className='project'>
            <div className='project-inner'>
              <h1 className='title'>Portfoliopage</h1>
              <p className='text'>My personal web development portfolio page. The site is running on React.js and is using react router.</p>
              <p className='text'><strong>Skills used: </strong>React.js, JavaScript, HTML, CSS, SASS</p>
              <a className='button' href="https://hanshanken.com" target="_blank">See Website</a>
            </div>
          </div>

          <div className='project'>
            <div className='project-inner'>
              <h1 className='title'>Ulsbygg - Norwegian contractor</h1>
              <p className='text'>The customer was extremely happy with their new website. The page is built on an open source CMS for Ruby on Rails called 'Spina CMS'. The page was designed in Sketch and deployed with a custom Digital Ocean server. A lot of vanilla JS code was used to generate features such as image sliders and galleries.</p>
              <p className='text'><strong>Skills used: </strong>Ruby on Rails, JavaScript, AWS S3, HTML, CSS, SASS, Bootstrap, Sketch, Google Analytics</p>
              <a className='button' href="https://ulsbygg.no" target="_blank">See Website</a>
            </div>
          </div>

          <div className='project'>
            <div className='project-inner'>
              <h1 className='title'>Nomster - A Yelp Clone</h1>
              <p className='text'>An app I built that replicates a Yelp style website where users can sign up, add locations, rate and comment. The app supports image uploading via AWS S3. Users can add images to the places they have visited.</p>
              <p className='text'><strong>Skills used: </strong>Ruby on Rails, JavaScript, AWS S3, HTML, CSS, Bootstrap</p>
              <a className='button' href="https://nomster-hans-hanken.herokuapp.com" target="_blank">See Website</a>
            </div>
          </div>



          <div className='project'>
            <div className='project-inner'>
              <h1 className='title'>Muli Clothing - A fashion startup</h1>
              <p className='text'>Fashion startup company located in Los Angeles California. The company can now focus on selling their baby products instead of worrying about their website. The site is powered by WordPress and uses WooCommerce as the ecommerce platform. The outstanding photographer <a href='https://tonemolnes.no/' target='_blank'>Tone Molnes</a> made the design really stand out and was a joy to collaborate with on this project.</p>
              <p className='text'><strong>Skills used: </strong>WordPress, WooCommerce, JavaScript, HTML, CSS, PHP, Google Analytics</p>
              <a className='button' href="https://muliclothing.com" target="_blank">See Website</a>
            </div>
          </div>

          <div className='project'>
            <div className='project-inner'>
              <h1 className='title'>Byes Funeral Home</h1>
              <p className='text'>A page I made for a former employer while working there. The aim of the site was to stand out from the local competitors. Now they can! Using Google Analytics has helped them to better discover who their visitors are.</p>
              <p className='text'><strong>Skills used: </strong>WordPress, HTML, CSS, JavaScript, Google Analytics</p>
              <a className='button' href="https://byes.no" target="_blank">See Website</a>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Portfolio;
