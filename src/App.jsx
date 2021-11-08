import React, { useState } from 'react';
import About from './About';

const App = () => {
    return (
        <>
            <div>
                <div className="main-page">
                    <div className="navbar">
                        <img src="https://www.daffodilsw.com/wp-content/themes/daffodil/images/daffodil-logo.png" alt="daffodils" />
                        <div className="nav-item">
                            What we do
                        </div>
                        <div className="nav-item">
                            Who we serve
                        </div>
                        <div className="nav-item">
                            Our expertise
                        </div>
                        <div className="nav-item">
                            About Us
                        </div>
                        <div className="nav-button" style={{ marginRight: "10px" }}>
                            <button type="button" className="button">Get In Touch</button>
                        </div>
                    </div>
                    <div className="front-image">
                        <video width="100%" autoplay muted loop id="myvideo">
                            <source src="https://www.daffodilsw.com/wp-content/uploads/2019/11/hompage-video-short.mp4"
                                type="video/mp4" id="homeBanner" />
                            Your browser does not support the HTML5 Video element.
                        </video>

                        <div className="overlayBlack">
                            <div className="container">
                                <h1>Your Technology Partner for
                                    <span>Software Engineering & Innovation</span>
                                </h1>
                            </div>
                        </div>


                    </div>

                </div>

                <div className="details">
                    <div className="heading">
                        Gain a competitive edge for your business through:
                    </div>
                    <div className="details-items">
                        <div className="item">
                            <div className="item-image">
                                <img src="https://www.daffodilsw.com/wp-content/uploads/2021/08/product-eng-2.jpg"
                                    alt="product engineering" />
                            </div>
                            <div className="item-info">
                                <div>
                                    <h3 style={{ fontFamily: " Arial, Helvetica, sans-serif;" }}>
                                        Product Engineering
                                    </h3>
                                    <e> Realize your vision, delivered on time and within your budget</e>
                                </div>
                                <div>
                                    <button type="button" id="b1">Build my product</button>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-image">
                                <img src="https://www.daffodilsw.com/wp-content/uploads/2021/08/smart-team.jpg"
                                    alt="product engineering" />
                            </div>
                            <div className="item-info">
                                <div>
                                    <h3 style={{ fontFamily: "Arial, Helvetica, sans-serif;" }}>
                                        Smart Teams
                                    </h3>
                                    <e>
                                        Boost your development with our cross functional experts
                                    </e>
                                </div>
                                <div>
                                    <button type="button" id="b1">Built my team</button>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-image">
                                <img src="https://www.daffodilsw.com/wp-content/uploads/2021/08/enterprise-services.jpg"
                                    alt="product engineering" />
                            </div>
                            <div className="item-info">
                                <div>
                                    <h3 style={{ fontFamily: "Arial, Helvetica, sans-serif; " }}>
                                        Enterprise Solutions
                                    </h3>
                                    <e>
                                        Create efficiencies at a large scale delivering hyper growth
                                    </e>
                                </div>
                                <div>
                                    <button type="button" id="b1">Automate my processes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* component */}
                <About />

                <footer>
                    <div className="footer-container">
                        <div className="logo" style={{ flex: "1.5" }}>
                            <img src="https://www.daffodilsw.com/wp-content/themes/daffodil/images/daffodil-logo.png"
                                alt="daffodils" />
                        </div>
                        <div className="nav-item" style={{ flex: "1.5; " }}>
                            <a href="info@daffodilsw.com" style={{ color: "orange;" }}>info@daffodilsw.com</a>
                        </div>
                        <div className="nav-item" style={{ flex: "1" }}>
                            Home
                        </div>
                        <div className="nav-item" style={{ flex: "1" }}>
                            About
                        </div>
                        <div className="nav-item" style={{ flex: "1" }}>
                            Location
                        </div>
                        <div className="nav-item" style={{ flex: "1" }}>
                            Privacy Policies
                        </div>
                        <div className="nav-item" style={{ flex: "1" }}>
                            Careers
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
};
export default App;