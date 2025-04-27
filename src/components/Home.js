import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import '../styles/Home.css';
import tamanna from '../assets/image1.jpeg';
import leetcode from '../assets/leetcode.png';


function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Full Stack Web Developer',
        'Android Developer',
        'Web Designer'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home">
      <div className="section-container">
        <div className="home-content">
          <div className="profile-container">
            <img src={tamanna} alt="Ankit" className="profile-image" />
          </div>
          <div className="home-text">
            <h1 className="main-title">
              <h3>Hello, I'm</h3> <span className="highlight rainbow-text">Ankit Maurya</span>
            </h1>
            <div className="typing-container">
              <span ref={typedRef} className="highlight"></span>
            </div>
            <p className="description">
              A curious coder and creative thinker fueled by a love for problem-solving. With hands-on experience in the MERN stack, PHP, and C++, I build web experiences that are not just functional, but impactful. Always learning, always building—driven by code and curiosity.
            </p>
          </div>

          <div className="cta-container">
            <div className="cta-buttons">
              <a
                href="/ankit1.pdf"  // Replace with your actual CV URL
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"

                download={"Resume"}
              >
                Download CV
                <i className="fas fa-file-alt ms-2"></i>
              </a>
              
            </div>
          </div>

          <div className="social-links-container">
            <div className="social-links">
              <a
                href="https://github.com/Ankit-Maurya-12223197"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="social-link github"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/am2003/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="social-link linkedin"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="mailto:ankitmgs835393@gmail.com"
                title="Email"
                className="social-link email"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a
                href="tel:+916386315007"
                title="Phone"
                className="social-link phone"
              >
                <i className="fas fa-phone"></i>
              </a>
              <a
                href="https://leetcode.com/u/Ankit-Maurya-12223197/"  // Replace with your actual LeetCode profile URL
                target="_blank"
                rel="noopener noreferrer"
                title="LeetCode"
                className="social-link leetcode"
              >
                <img src={leetcode} alt="LeetCode" className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
