import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>
        <p className="skills-desc">
        </p>

        <div className="skills-grid">
          <div className="skill-card">HTML</div>
          <div className="skill-card">CSS</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">React</div>
          <div className="skill-card">Node.js</div>
          <div className="skill-card">Git</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

