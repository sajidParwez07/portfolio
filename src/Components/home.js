import React, { useEffect, useRef } from 'react';
import '../Styles/home.css';
import Typed from 'typed.js';

const Home = () => {
  const typedRef = useRef();

  useEffect(() => {
    const typedOptions = {
      strings: ["Full-Stack Web Developer", "FrontEnd Developer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    };

    const typedInstance = new Typed(typedRef.current, typedOptions);

    return () => {
      typedInstance.destroy();
    };
  }, []);

  return (
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
      <div className="hero-container" data-aos="fade-in">
        <h1>Sajid Parwez</h1>
        <p>I'm <span className="typed" ref={typedRef}></span></p>
      </div>
      <div id='resume-btn'>
        <a href='Myresume.pdf' download class="btn shadow-lg"><i className="fa fa-download me-2"></i>Resume</a>
      </div>
    </section>
  );
};

export default Home;
