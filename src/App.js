import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Navbar from './components/CustomNavbar';
import './App.css';

class App extends Component {
  render() {
    const divStyle5 = {
      width:'175px',
      height:'15px'
    };
    const divStyle2 = {
      textAlign: 'center'
    };

    const divStyle ={
      padding:'15px'
      }
    return (
        <div style={divStyle}>
            <Router>
                <div>
                    <Navbar />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/services" component={Services} />
                    <Route exact path="/contact" component={Contact} />
                </div>
            </Router>
            <footer>
            <Jumbotron style={divStyle2}>
            <div>
                <a href="/"><img src="assets/oxygen_logo.png" style={divStyle5} alt="Logo"/></a>
            </div>
            <span style={divStyle}>
              <a href="/">
                Home
              </a>
              </span>
              <span style={divStyle}>
              <a href="/about"> 
                About Us
              </a>
              </span>
              <span  style={divStyle}>
              <a href="/services">
                Services
              </a>
              </span >
              <span style={divStyle}> 
              <a href="/contact">
                Contact US
              </a>                   
              </span>
     
            <div>
            Copyrights © 2018 Oxygen Resources | All rights reserved.
            </div>    
             
        </Jumbotron>  
        </footer>
       </div>                           
    );
  }
}

export default App;