import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer id='contact' className="contact-footer">
      <div className="contact-container">
        {/* Left */}
        <div className="contact-info">
          <h2 className="contact-title">Get in touch</h2>
          <p className="contact-desc">
            I’m always open to discussing new opportunities, collaborations,
            or just having a conversation.
          </p>

          <ul className="contact-list">
            <li>
              <span>Email:</span>
              <a href="mailto:kunutmng@gmail.com">
                kunutmng@gmail.com
              </a>
            </li>
            <li>
              <span>Phone:</span>
              <a href="tel:+91 62969 88084">
                +91 62969 88084
              </a>
            </li>
            <li>
              <span>Location:</span>
              <a href="https://maps.app.goo.gl/RDnrT8cMsp5YR6nt7">Sonada,Darjeeling</a>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div className="contact-social">
          <p>Connect with me</p>

          <a
            href="https://www.instagram.com/kungsang_?igsh=NjNwZmFpbjI3MHdx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="social-icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37a4 4 0 1 1-7.87 1.27 4 4 0 0 1 7.87-1.27z" />
              <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
            </svg>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Kunsang Lama. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
