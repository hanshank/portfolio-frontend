import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Redirect } from 'react-router-dom'

class MainMenu extends Component {
  render() {
    return (
      <li><Link to="/about">About</Link></li>
    )
  }
}


export default MainMenu;
