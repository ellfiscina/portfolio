import React, { Component } from "react";
import { Parallax, Background } from "react-parallax";
import "./HomePage.css";

const insideStyles = {
  background: "transparent",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <Parallax
          strength={600}
          renderLayer={percentage => (
            <div>
              <div
                style={{
                  position: "absolute",
                  background: `blue`,
                  left: "50%",
                  top: "50%",
                  borderRadius: "50%",
                  transform: "translate(-50%,-50%)",
                  width: percentage * 500,
                  height: percentage * 500,
                }}
              />
            </div>
          )}
        >
          <div>Use the background component for custom elements</div>
            <Background className="custom-bg">
            <img src="http://www.fillmurray.com/500/320" alt="fill murray" />
            </Background>
          <div style={{ height: 500 }}>
            <div style={insideStyles}>noimage11</div>
          </div>
        </Parallax>
        <Parallax
          blur={10}
          bgImage={require('./assets/img_parallax3.jpg')}
          strength={600}
          renderLayer={percentage => (
            <div>
              <div
                style={{
                  position: "absolute",
                  background: `white`,
                  left: "50%",
                  top: "50%",
                  borderRadius: "50%",
                  transform: "translate(-50%,-50%)",
                  width: percentage * 500,
                  height: percentage * 500,
                }}
              />
            </div>
          )}
        >
          <div style={{ height: 500 }}>
            <div style={insideStyles}>image11</div>
          </div>
        </Parallax>
      </div>
    );
  }
}

export default HomePage;
