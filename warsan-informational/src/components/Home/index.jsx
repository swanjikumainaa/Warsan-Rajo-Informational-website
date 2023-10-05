import React, { useState, useEffect } from "react";
import './style.css';

const HomePage = () => {
  const [textIndex, setTextIndex] = useState(0);
  const textOptions = ["Save a child", "Save a nation"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 2500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="home-section" data-testid="home-section" id="Home">
      <div className="text">
        <h1 className="slideshow-text" data-testid="slideshow-text">
          {textOptions[textIndex]}
        </h1>
      </div>
      <button className="learn-more-button">
        <span className="learn-more-text">Learn More</span>
      </button>
    </div>
  );
};

export default HomePage;
