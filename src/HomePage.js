import React, { useState, useEffect } from "react";
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

function HomePage() {
    const images = ['./img/img_parallax.jpg', './img/img_parallax2.jpg', './img/img_parallax3.jpg'];
    
  return (
    <div className="home-page">
      {images.map((img, i) => {
        return (
          <div key = {i}>
            <Parallax
              blur={10}
              bgImage={require(img)}
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
                <div style={insideStyles}>{i}</div>
              </div>
            </Parallax>
          </div>
        );
      })}
    </div>
  );
}
export default HomePage;