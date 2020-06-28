import React, { Component } from "react";
import Typing from 'react-typing-animation';
import "./Banner.css";

class Banner extends Component {
    render() {
      return (
        <div className="Banner" id="home">
            <Typing>
              <h1 className="Banner-title">Hi, I am Ellen. <br /> Full Stack Developer <br /> UI/UX enthusiast</h1>
            </Typing>
            <img src={require('./assets/me2.JPG')} className="Banner-image" />
        </div>
      );
    }
}

export default Banner;