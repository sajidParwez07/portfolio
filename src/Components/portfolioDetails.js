import React, { useEffect, useRef } from 'react';
// import '../portfolio/section.css';
import '../Styles/portfolioDetails.css';

const PortfolioDetails = ({ onHideDetails }) => {
    const buttonRef = useRef(null);

    useEffect(() => {
        if (buttonRef.current) {
            buttonRef.current.click();
        }
    }, [1]);

    return (
        <>
            <section id="breadcrumbs" className="breadcrumbs">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <span> 
                            <i id='dismiss' className='bi bi-arrow-left-short fs-1' title='Dismiss' onClick={onHideDetails}></i>
                        </span>
                        <h2>Portfoio Details</h2>
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li>Portfoio Details</li>
                        </ol>
                    </div>

                </div>
            </section>

            <section id="portfolio-details" className="portfolio-details">
                <div className="container">
                    <div className="row gy-4">
                        <div className='col-lg-8'>
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="portfolio/portfolio-details-1.jpg" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="portfolio/portfolio-details-2.jpg" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="portfolio/portfolio-details-3.jpg" className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next"
                                    ref={buttonRef}>
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="portfolio-info">
                                <h3>Project information</h3>
                                <ul>
                                    <li><strong>Category</strong>: Web design</li>
                                    <li><strong>Client</strong>: ASU Company</li>
                                    <li><strong>Project date</strong>: 01 March, 2020</li>
                                    <li><strong>Project URL</strong>: <a href="#portfolio-details">www.example.com</a></li>
                                </ul>
                            </div>
                            <div className="portfolio-description">
                                <h2>This is an example of portfolio detail</h2>
                                <p>
                                    Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PortfolioDetails;