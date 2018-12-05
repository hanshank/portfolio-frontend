import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.scss';
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Page from './components/Page';
import VideoBg from './components/VideoBg';
import MobileMenu from './components/MobileMenu';
import Backdrop from './components/Backdrop';
import {
  CSSTransition,
  TransitionGroup,
}  from "react-transition-group";


class App extends Component {
  constructor(props) {
     super(props);
     this.state = {
         mobileMenuOpen: false
      };
  }

  mobileMenuClickHandler = () => {
    this.setState((prevState) => {
      return {mobileMenuOpen: !prevState.mobileMenuOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({mobileMenuOpen: false})
  }

  render() {
    let backdrop;

    if (this.state.mobileMenuOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div className="App">
        <Navigation mobileMenuHandler={this.mobileMenuClickHandler}/>
        <MobileMenu show={this.state.mobileMenuOpen} mobileMenuHandler={this.mobileMenuClickHandler} />
        {backdrop}
        <VideoBg />
        <div className='page'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route path="*" component={Error} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App
