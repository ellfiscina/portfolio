import React, { Component, useRef } from "react";
import { TypeAnimation } from 'react-type-animation';
import "./Banner.css";

const Banner = () => {
  const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';
  const ref = useRef();

  const showCursorAnimation = (show) => {
    if (!ref.current) return;
     
    const el = ref.current;

    show ? el.classList.add(CURSOR_CLASS_NAME) : el.classList.remove(CURSOR_CLASS_NAME);
  };

  return (
    <div className="Banner" id="home">
        <TypeAnimation
          ref={ref}
          cursor={false}
          className={`Banner-title ${CURSOR_CLASS_NAME}`}
          sequence={[
            () => showCursorAnimation(true),
            `Hi, I'm Ellen!
            Full Stack Developer`,
            1000,
            () => showCursorAnimation(false),
            `Hi, I'm Ellen!
            Full Stack Developer`,
          ]}
          wrapper="h1"
          style={{ whiteSpace: 'pre-line', display: 'block', paddingTop: '12rem' }}
        />
        <img src={require('./assets/me2.JPG')} className="Banner-image" />
    </div>
  );
}

export default Banner;