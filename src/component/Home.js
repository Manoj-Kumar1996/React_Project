import React from 'react'
import Lottie from 'lottie-react'
import './Home.css'
import LottieAnimationDesktop from '../homepage_desktop.json'
import LottieAnimationMobile from '../homepage_mobile.json'
import grapgAnimationdesktop from '../graph_desktop.json'
import grapgAnimationMobile from '../graph_mobile.json'
import logo1 from './images/Asset-1@2x.png'
import logo2 from './images/Asset-2@2x.png'
import logo3 from './images/Asset-3@2x.png'
import logo4 from './images/Asset-4@2x.png'
import Ebay from './images/EbayLogo.png'
import amazonpartner from './images/amazoneLogo.png'
import amazoneSponsored from './images/amazonsponsore.png'
import catchpartner from './images/catchpartner.png'
import allLogo from './images/all-logo-1.png'
import sliderImage from './images/aleksandra.jpg'

export default function Home() {
    return (
        <>
            <div className="container-fluid p-0">
                <div className="row d-none d-xl-block w-100 m-0">
                    <Lottie className='p-0 LottieHome' animationData={LottieAnimationDesktop}></Lottie>
                </div>
                <div className="row d-block d-xl-none w-100">
                    <Lottie animationData={LottieAnimationMobile}></Lottie>
                </div>
            </div>
            <div className="container-fluid bg-section-2">
                <div className="row text-center pt-5 bg-section-3">
                    <h2 className='pb-4'><strong>CONNECT WITH MILLIONS OF SHOPPERS<br />GROW YOUR BRAND | FIND NEW CUSTOMERS</strong></h2>
                    <div className="col-xl-3 col-md-3 col-sm-12 text-center">
                        <img src={logo1} className='img-fluid' alt="" width={100} />
                        <h4 className='pt-4'><strong>DICSOVER</strong></h4>
                        <p><strong>We uncover your needs</strong></p>
                    </div>
                    <div className="col-xl-3 col-md-3 col-sm-12 text-center">
                        <img src={logo2} className='img-fluid' alt="" width={100} />
                        <h4 className='pt-4'><strong>FOCUS</strong></h4>
                        <p><strong>We develop the right approach</strong></p>
                    </div>
                    <div className="col-xl-3 col-md-3 col-sm-12 text-center">
                        <img src={logo3} className='img-fluid' alt="" width={100} />
                        <h4 className='pt-4'><strong>RECOMMEND</strong></h4>
                        <p><strong>We bring you in on the game plan</strong></p>
                    </div>
                    <div className="col-xl-3 col-md-3 col-sm-12 text-center">
                        <img src={logo4} className='img-fluid' alt="" width={100} />
                        <h4 className='pt-4'><strong>DELIVER</strong></h4>
                        <p><strong>We get your brand and products seen on marketplaces</strong></p>
                    </div>
                </div>

            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-3 col-md-3 col-sm-12 p-5">
                        <img src={Ebay} alt="" className='img-fluid' />
                    </div>
                    <div className="col-xl-3 col-md-3 col-sm-12 p-5">
                        <img src={amazonpartner} alt="" className='img-fluid' />
                    </div>
                    <div className="col-xl-3 col-md-3 col-sm-12 p-5">
                        <img src={amazoneSponsored} alt="" className='img-fluid' />
                    </div>
                    <div className="col-xl-3 col-md-3 col-sm-12 p-5">
                        <img src={catchpartner} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>
            <div className="container-fluid p-0">
                <div className="row d-none d-xl-block m-0 w-100">
                    <Lottie className='p-0' animationData={grapgAnimationdesktop}></Lottie>
                </div>
                <div className="row d-block d-xl-none">
                    <Lottie animationData={grapgAnimationMobile}></Lottie>
                </div>
            </div>
            <div className="container">
                <div className="row text-center pt-5">
                    <h2 className='text-dark'><strong>YOU’RE IN <br></br> GREAT COMPANY</strong></h2>
                    <p className='text-dark'><strong>We work with Australian and international brands, retailers and manufacturers-<br></br>from Amazon Launchpad-winning start-ups to globally recognised brands.</strong></p>
                    <img src={allLogo} alt="" className='img-fluid' />
                </div>
            </div>
            <div className="container-fluid bg-section4">
                <div className="row sliderSize">
                    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src={sliderImage} className="d-block w-100 sliderSize" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Tony Paladine – eCommerce Business Development Manager, Isalbi</h5>
                                    <p>“Our team couldn’t be happier working with Twenty Twenty. Their overall professionalism, proactivity, responsiveness and expertise have been second to none – not to mention almost tripling our revenue in the first two months of working with them!”</p>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={sliderImage} className="d-block w-100 sliderSize" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={sliderImage} className="d-block w-100 sliderSize" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
