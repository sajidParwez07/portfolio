import React,{useEffect} from 'react';
import '../Styles/headers.css';

const Headers = () => {


  useEffect(() => {
    const select = (el, all = false) => {
      el = el.trim();
      if (all) {
        return [...document.querySelectorAll(el)];
      } else {
        return document.querySelector(el);
      }
    };

    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all);
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener));
        } else {
          selectEl.addEventListener(type, listener);
        }
      }
    };

    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener);
    };

    const handleMobileNavToggle = (e) => {
      const body = select('body');
      body.classList.toggle('mobile-nav-active');
      e.currentTarget.classList.toggle('bi-list');
      e.currentTarget.classList.toggle('bi-x');
    };

    on('click', '.mobile-nav-toggle', handleMobileNavToggle);

    return () => {
      const mobileNavToggle = select('.mobile-nav-toggle');
      if (mobileNavToggle) {
        mobileNavToggle.removeEventListener('click', handleMobileNavToggle);
      }
    };
  }, []);


  return (
    <>
    <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

      <header id="header" className='shadow-sm'>
        <div className="d-flex flex-column">

          <div className="profile">
            <img src="images/sajid-profile.png" alt="" className="img-fluid rounded-circle" />
            <h1 className="text-light"><a href="index.html">Sajid Parwez</a></h1>
            <div className="social-links mt-3 text-center">
              <a href="#" className="twitter me-3"><i className="bi bi-twitter" style={{ color: "#1D9BF0" }}></i></a>
              <a href="#" className="facebook me-3"><i className="bi bi-facebook" style={{ color: "#316FF6" }}></i></a>
              <a href="#" className="instagram me-3"><i className="bi bi-instagram" style={{ color: "#e95950" }}></i></a>
              <a href="https://www.linkedin.com/in/parwezsajid05/" className="linkedin me-3"><i className="bi bi-linkedin" style={{ color: "#0A66C2" }}></i></a>
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li><a href="#hero" className="nav-link scrollto active"><i className="bi bi-house-door"></i> <span>Home</span></a></li>
              <li><a href="#about" className="nav-link scrollto"><i className="bi bi-person"></i> <span>About</span></a></li>
              <li><a href="#skills" className="nav-link scrollto"><i className="bi bi-file-earmark"></i> <span>Skills</span></a></li>
              <li><a href="#portfolio" className="nav-link scrollto"><i className="bi bi-book"></i> <span>Portfolio</span></a></li>
              <li><a href="#services" className="nav-link scrollto"><i className="bi bi-server"></i> <span>Services</span></a></li>
              <li><a href="#contact" className="nav-link scrollto"><i className="bi bi-envelope"></i> <span>Contact</span></a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Headers