import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './logo.svg';



class Navigation extends Component {

  constructor(props) {
     super(props);
     this.state = {
         title: "Header from props...",
         content: "Content from props..."
      };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        title: "Header from propsaaa...",
        content: "Content from props..."
      });
    }, 3000)
  }

  render() {
    return (
      <div className='navigation'>
        <Link to="/" className="navLink logo justify-start">
          <img className="" src={logo} alt="Company logo" />
        </Link>
        <div className='nav-items'>
          <NavLink to="/portfolio" className="navLink">Portfolio</NavLink>
          <NavLink to="/about" className="navLink">About</NavLink>
          <NavLink to="/contact" className="navLink">Contact</NavLink>
        </div>
      </div>
    )
  }
}

export default Navigation;
