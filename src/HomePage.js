import React, { Component } from "react";
import "./HomePage.css";

class HomePage extends Component {
    render() {
      return (
        <div className="HomePage">
            <div className="HomePage-home" id="home">
                <h1 className="HomePage-title">Hi, I am Ellen. <br /> Full Stack Developer <br /> UI/UX Researcher</h1>
                <img src={require('./assets/me2.JPG')} className="HomePage-banner" />
            </div>
            <div className="HomePage-about" id="about">
                <h2>About <span>me</span></h2>
            </div>
            <div className="HomePage-projects">

            </div>
        </div>
      );
    }
}

export default HomePage;