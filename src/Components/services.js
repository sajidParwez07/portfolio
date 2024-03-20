import React from 'react';
import '../Styles/services.css';
import '../Styles/section.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">

        <div className="section-title">
          <h2>Services</h2>
          <p>Welcome to my corner of the web! As a dedicated Web Developer,
            I offer a range of services tailored to bring your digital vision to life.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
            <div className="icon"><i className="fa fa-briefcase"></i></div>
            <h4 className="title"><a href="">Full-Stack Development (MERN)</a></h4>
            <p className="description">
              Leverage my expertise in MongoDB, Express.js, React.js, and Node.js
              to build seamless and responsive full-stack applications. From concept
              to deployment, I ensure a robust and user-friendly experience.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
            <div className="icon"><i className="fa-regular fa-rectangle-list"></i></div>
            <h4 className="title"><a href="">Front-End Development</a></h4>
            <p className="description">
              Crafting visually appealing and intuitive user interfaces is my forte.
              Using cutting-edge technologies such as React.js, HTML, CSS, and JavaScript,
              I turn ideas into engaging digital experiences.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
            <div className="icon"><i className="fa-solid fa-sliders"></i></div>
            <h4 className="title"><a href="">Back-End Development</a></h4>
            <p className="description">
              Behind every great frontend, there's a powerful backend. I specialize in
              developing scalable and efficient server-side applications using Node.js
              and Express.js, ensuring your platform runs smoothly.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
            <div className="icon"><i className="fa-solid fa-database"></i></div>
            <h4 className="title"><a href="">Database Design and Optimization</a></h4>
            <p className="description">
              Your data is valuable. I design and optimize MongoDB databases to ensure
              efficient data storage, retrieval, and management, contributing to
              the overall performance of your applications.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
            <div className="icon"><i className="fa-solid fa-desktop"></i></div>
            <h4 className="title"><a href="">Responsive Design</a></h4>
            <p className="description">
              In a world of diverse devices, your website should look stunning everywhere.
              I prioritize responsive design, ensuring your content is accessible and
              visually appealing across various screen sizes.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
            <div className="icon"><i className="fa-brands fa-stack-overflow"></i></div>
            <h4 className="title"><a href="">Collaborative Problem-Solving</a></h4>
            <p className="description">Beyond code, I bring a problem-solving mindset.
              I thrive in collaborative environments, working closely with teams to
              address challenges and deliver solutions that exceed expectations.
            </p>
          </div>
          <h6 className='note'>
            <b>
            Let's collaborate and transform your digital ideas into reality.
            Whether you need a full-stack application, a sleek user interface,
            or backend optimization, I'm here to elevate your online presence.
            </b>
          </h6>
        </div>
      </div>
    </section>
  )
}

export default Services