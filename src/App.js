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
import {
  CSSTransition,
  TransitionGroup,
}  from "react-transition-group";


class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation />
        <VideoBg />
        <div className='page'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App
