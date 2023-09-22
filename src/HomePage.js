import React, { Component } from "react";
import Banner from './Banner';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from "./Footer";

import "./HomePage.css";

class HomePage extends Component {
    render() {
      return (
        <div className="HomePage">
            <div className="HomePage-banner">
                <Banner />
            </div>
            <div className="HomePage-about">
                <About />
            </div>
            <div className="HomePage-projects">
                <Projects />
            </div>
            <div className="HomePage-footer">
                <Footer />
            </div>
        </div>
      );
    }
}

export default HomePage;