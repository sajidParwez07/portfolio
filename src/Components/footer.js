import React, { useEffect, useState } from 'react';
import '../Styles/footer.css';

const Footer = () => {
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);

  useEffect(() => {
    const backToTop = document.querySelector('.back-to-top');

    const handleScroll = () => {
      setIsBackToTopVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isBackToTopVisible && (
        <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
          <i className="bi bi-arrow-up-short"></i>
        </a>
      )}

      <footer id="footer">
        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>iPortfolio</span></strong>
          </div>
          <div className="credits">
            Designed by <a id='name'>Sajid Parwez</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
