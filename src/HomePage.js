import React, { Component } from "react";
import Banner from './Banner';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

import "./HomePage.css";

class HomePage extends Component {
    render() {
      return (
        <div className="HomePage">
            <Banner />
            <About />
            <Projects />
            <Contact />
        </div>
      );
    }
}

export default HomePage;