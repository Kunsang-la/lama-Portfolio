import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';

const Hobbies = () => {
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    fetch('/api/hobbies.json')
      .then((res) => res.json())
      .then((data) => setHobbies(data))
  }, []);

  return (
    <section className="interests-section">
      <div className="about-container">
        <h2 className="interests-title">Interests and hobbies</h2>

        {hobbies.map((hobby) => (
          <div key={hobby.id} className="interests-row">
            <div className={`interest-card ${hobby.color}`}>
              <img
                src={hobby.image}
                alt={hobby.title}
                className="interest-image"
              />
            </div>

            <div className="interest-text">
              <h3>{hobby.title}</h3>
              <p>{hobby.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
