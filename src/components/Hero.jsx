import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
      <section id="about" className="about-section">
        <div className="about-container">
          <h1 className="about-title">About me</h1>

          <div className="intro">
            <div className="intro-image">
              <img
                src="images/dp.jpg"
                alt="profile"
              />
            </div>

            <div className="intro-text">
              <h2>Introduction</h2>
              <p>
                Hello! I'm Kunsang Lama, a student at Medhavi Skills University pursuing a Master's degree in Computer Application. My passion lies in web development, and I'm enthusiastic about creating dynamic and user-friendly websites. I'm eager to apply my skills and knowledge in real-world projects and contribute to the tech community. 
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Hero;
