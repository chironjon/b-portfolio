import React from 'react';
import Loader from './components/loader/loader.component';
import Nav from './components/nav/nav.component';
import { Router, Route, Switch } from 'react-router-dom';

import './App.scss';

function App() {
  return (
      
    <div className="App">
    {/* comment template */}
        {/* Loader placeholder */}
      <Loader />
        {/* Header and Navigation */}
      <header>
        <h1 className="title" id="page-title">{"{B}"}</h1>
        {/* <Nav /> */}
        <nav>
          <ul>
            <li className="nav-1"><a href="#">Home</a></li>
            <li className="nav-2"><a href="#about">About</a></li>
            <li className="nav-3"><a href="#skills">Skills</a></li>
            <li className="nav-4"><a href="#projects">Projects</a></li>
            <li className="nav-5"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
        {/* Page Content Display */}
      <div className="page-display">
          {/* Home Page */}
        <div className="home">
          <div className="hero-container">
            <h1 className="hero-name">
              Bea/Brent/B Beers
            </h1>
            <span>-</span>
            <p className="hero-text">MERN Developer</p>
          </div>
          <div className="hero-desc">
            <p className="hero-desc-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur laudantium vel placeat accusamus asperiores numquam ex sunt alias officia quod fugit labore voluptate, quas officiis nisi iusto! Consectetur, maiores perspiciatis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus optio libero voluptas suscipit hic expedita soluta consequatur fugiat deserunt voluptatum, repellat eius, animi tempora dicta consectetur distinctio sunt eveniet ab.</p>
          </div>
        </div>
          {/* About Page */}
        <div className="about"></div>
          {/* Skills Page */}
        <div className="skills"></div>
          {/* Projects Page */}
        <div className="projects"></div>
          {/* Contact Page */}
        <div className="contact"></div>
      </div>
        {/* Footer */}
      <footer>
        <p className="footer-text" id="design-by-text">Coded and Designed By B. Beers</p>
        <p className="footer-text" id="copyright-text">Copyright © 2021</p>
        <div className="link-icon-container">
          <p className="link-icons" id="linkedin-icon">LinkedIn</p>
          <p className="link-icons" id="github-icon">GitHub</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
