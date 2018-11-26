import React, { Component } from 'react';
import Logo from './assets/other_logo.png'
import Tab from '@material-ui/core/Tab';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './Home'
import About from './About'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="parallax-container">
            <div className="parallax"></div>
          </div>
          <div className="main-container">
            <Link to='/'><Tab label="Home"/></Link>
            <Link to='/about'><Tab label="About"/></Link>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <div className='content'></div>
            <div className='content'></div>
            <div className='content'></div>

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
