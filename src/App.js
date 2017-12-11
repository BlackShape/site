import React, { Component } from 'react';
import Welcome from './components/Welcome'
import Work from './components/Work'
import Teaching from './components/Teaching'
import Blog from './components/Blog'
import About from './components/About'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />
          <Welcome />
        <h2 className="heading" id="work">WORK</h2>
          <Work />
        <h2 className="heading" id="about">ABOUT</h2>
          <About />
        <h2 className="heading" id="blog">BLOG</h2>
          <Blog />
        <h2 className="heading" id="teaching">TEACHING</h2>
          <Teaching />
        <h2 className="heading" id="footer">LIKE WHAT YOU SEE?</h2>
          <Footer />
      </div>
    );
  }
}

export default App;