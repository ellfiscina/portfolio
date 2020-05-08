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


//TESTAR
function HomePage() {
    //const images = ['../../assets/images/img_parallax.jpg', '../../assets/images/img_parallax2.jpg', '../../assets/images/img_parallax3.jpg'];
    
  return (
    <div className="home-page">
      <Parallax
        blur={10}
        bgImage={require(images[0])}
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
          <div style={insideStyles}>{images[0]}</div>
        </div>
      </Parallax>

      <Parallax
        blur={10}
        bgImage={require(images[1])}
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
          <div style={insideStyles}>{images[1]}</div>
        </div>
      </Parallax>
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
        <div style={{ height: 500 }}>
          <div style={insideStyles}>lalalal</div>
        </div>
      </Parallax>

      <Parallax
        bgImage={require(images[2])}
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
          <div style={insideStyles}>{images[2]}</div>
        </div>
      </Parallax>
    </div>
  );
}
export default HomePage;


/* {images.map((img, i) => {
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
})} */