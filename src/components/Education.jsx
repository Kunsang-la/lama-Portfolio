import React, { useEffect, useState } from 'react';
import '../styles/Education.css';

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetch('/api/edu.json')
      .then((res) => res.json())
      .then((data) => setEducation(data))
  }, []);

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <h2 className="education-title">Education</h2>

        <div className="education-grid">
          {education.map((item) => (
            <div key={item.id} className="education-card">
              <div className="education-image-wrapper">
                <img
                  src={item.image}
                  alt={item.school}
                  className="education-image"
                />
              </div>
              <div className="education-text">
                <h3>{item.school}</h3>
                <p>{item.qualification}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
