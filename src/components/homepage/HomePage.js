import React from "react";
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
  return (
    <div className="home-page">
      {/* <Parallax
        blur={10}
        bgImage={require('../../assets/img_parallax.jpg')}
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
      </Parallax> */}

    </div>
  );
}
export default HomePage;
