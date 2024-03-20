import React from 'react';
import '../Styles/about.css';
import '../Styles/section.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">

                <div className="section-title">
                    <h2>About</h2>
                    <p>
                        Welcome to my digital space! I'm Sajid Parwez, a passionate Full-Stack Developer specializing in the MERN stack. With a commitment to crafting seamless and interactive web experiences, I thrive on turning innovative ideas into reality.
                        <br />
                        <br />
                        As a recently I learned MERN-Stack, I bring a fresh perspective and a hunger to learn and grow. My journey in web development has equipped me with proficiency in MongoDB, Express.js, React.js, and Node.js, and I am excited to showcase my skills through dynamic and user-centric projects.
                        <br />
                        <br />
                        Beyond coding, I am dedicated to staying at the forefront of technological advancements and design trends. I believe in the power of collaboration and am eager to contribute my skills to projects that push the boundaries of what's possible in the digital realm.
                        <br />
                        <br />
                        Explore my portfolio to see the fusion of creativity and technology, and feel free to reach out. Let's connect and explore the exciting possibilities of web development together
                        <br />
                        <br />
                        Feel free to customize it further based on your personal style and experiences.
                    </p>
                </div>

                <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                        <img src="images/sajid-profile.png" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>Full-Stack Web Developer.</h3>
                        <p className="fst-italic">
                            Hi, I am Sajid Parwez an aspiring Full-Stack Developer(MERN) and
                            fresher who is trying to seek a role to enhance and
                            explore my technical knowledge in your company
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>20 Feb 1996</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 6201341517</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Pune</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>27</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>B.Tech</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>parwezsajid05@gmail.com</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            I believe in the power of innovation and the transformative potential of technology. 
                            Eager to contribute to a dynamic team, I am actively seeking opportunities to apply
                             and enhance my technical skills in your esteemed company.
                            <br/>
                            Feel free to explore my portfolio and get in touch if you're as excited about the 
                            future of web development as I am. Let's collaborate and bring digital ideas to life!
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About