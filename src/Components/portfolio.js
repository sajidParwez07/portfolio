import React, { useState, useEffect } from 'react';
import '../Styles/portfolio.css';
import '../Styles/section.css';
import PortfolioDetails from './portfolioDetails';

const Portfolio = () => {
  const [showPortfolioDetails, setShowPortfolioDetails] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);



  const handlePortfolioItemClick = () => {
    setShowPortfolioDetails(!showPortfolioDetails);
  };

  const handleDismissDetails = () => {
    setShowPortfolioDetails(false);
  };



  const products = [
    { id: 1, category: 'frontend', images: 'portfolio/portfolio1.png', url:'https://sajidparwez07.github.io/soft-dev-technologies/' },
    // { id: 2, category: 'full-Stack', images: 'portfolio/portfolio-4.jpg' },
    { id: 3, category: 'frontend', images: 'portfolio/portfolio2.png', url:'https://sajidparwez07.github.io/stop-watch/' },
    // { id: 4, category: 'full-Stack', images: 'portfolio/portfolio-7.jpg' },
    { id: 5, category: 'frontend', images: 'portfolio/portfolio3.png', url:'https://sajidparwez07.github.io/Tic-Tac-Toe/' },
    // { id: 6, category: 'full-Stack', images: 'portfolio/portfolio-8.jpg' },
  ];

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;


  return (
    <>
      <section id='portfolio-details' style={{ display: showPortfolioDetails ? 'block' : 'none' }}>
        <PortfolioDetails onHideDetails={handleDismissDetails} />
      </section>


      <section id="portfolio" className="portfolio section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>
              Welcome to my digital showcase! Below are some of the projects that I've had
              the pleasure of working on:
            </p>
          </div>

          <div className="row" data-aos="fade-up">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter" onClick={() => handleButtonClick(null)}>All</li>
                <li data-filter=".filter-frontend" onClick={() => handleButtonClick('frontend')}>Frontend</li>
                <li data-filter=".filter-full-Stack" onClick={() => handleButtonClick('full-Stack')}>Full-Stack</li>
              </ul>
            </div>
          </div>

          <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
            {filteredProducts.map((product, index) => (
              <div className="col-lg-4 col-md-6 portfolio-item" key={index + 1}>
                <div className="portfolio-wrap">
                  <img src={product.images} key={product.id} className="img-fluid" alt="" />
                  <div className="portfolio-links">
                    <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bi bi-plus"></i></a>
                    <a href={product.url} title="More Details"><i className="bi bi-link"></i></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >
    </>
  )
}

export default Portfolio;