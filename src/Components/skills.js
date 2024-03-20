import React from 'react';
import '../Styles/skills.css';
import '../Styles/section.css';

const Skills = () => {
  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p>
            Versatile and adept in a range of technologies and methodologies, my skills include:
          </p>
        </div>
        <div className="row skills-content">
          <div className="col-lg-6" data-aos="fade-up">
            <span className="skill"><i className='fa-brands fa-html5 text-danger fs-2 me-2'></i>HTML <b className="val">100%</b></span>
            <div className="progress red">
              <div className="progress-bar" style={{ width: "100%" }}>
              </div>
            </div>
            <span className="skill"><i className='fa-brands fa-css3-alt text-primary fs-2 me-2'></i>CSS <b className="val">90%</b></span>
            <div className="progress red">
              <div className="progress-bar" style={{ width: "90%" }}>
              </div>
            </div>
            <span className="skill"><i className='fa-brands fa-bootstrap fs-2 me-2' style={{ color: "#7f03fc" }}></i>Bootstrap<b className="val">85%</b></span>
            <div className="progress red">
              <div className="progress-bar" style={{ width: "85%" }}>
              </div>
            </div>
            <span className="skill"><i className='fa-brands fa-js text-bg-warning fs-2 me-2'></i>JavaScript <b className="val">75%</b></span>
            <div className="progress red">
              <div className="progress-bar" style={{ width: "75%" }}>
              </div>
            </div>
            <span className="skill"><i className='fa-brands fa-react text-info fs-2 me-2'></i>ReactJS<b className='val'>90%</b></span>
            <div className="progress red">
              <div className="progress-bar" style={{ width: "90%" }}>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <span className="skill"><i className='fa-brands fa-node text-success fs-2 me-2'></i>NodeJS <b className="val">80%</b></span>
            <div className="progress red">
              <div className="progress-bar" style={{ width: "80%" }}>
              </div>
            </div>
            <span className="skill"><i className='fa-brands fa-js text-warning fs-2 me-2'></i>ExpressJs <b className="val">70%</b></span>
            <div className="progress red">
              <div className="progress-bar" style={{ width: "70%" }}>
              </div>
            </div>
            <span className="skill"><i className='fa-solid fa-database text-success fs-2 me-2'></i>MongoDB <b className="val">90%</b></span>
            <div className="progress red">
              <div className="progress-bar" style={{ width: "90%" }}>
              </div>
            </div>
            <span className="skill"><i className='fa-solid fa-database text-danger fs-2 me-2'></i>MySQL <b className="val">60%</b></span>
            <div className="progress red">
              <div className="progress-bar" style={{ width: "60%" }}>
              </div>
            </div>
            <span className="skill"><i className='fa-brands fa-github text-dark fs-2 me-2'></i>Git<b className="val">100%</b></span>
            <div className="progress red">
              <div className="progress-bar" style={{ width: "100%" }}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills