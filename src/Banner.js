import React, { Component } from "react";
import "./Banner.css";

class Banner extends Component {
    render() {
      return (
        <div className="Banner" id="home">
            <h1 className="Banner-title">Hi, I am Ellen. <br /> Full Stack Developer <br /> UI/UX Researcher</h1>
            <img src={require('./assets/me2.JPG')} className="Banner-image" />
        </div>
      );
    }
}

export default Banner;