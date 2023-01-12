import React from 'react'
import './AboutUs.css'
import People from './images/Group-20.png'
import Hand from './images/Group-29.png'
import GreenCircle from './images/Ellipse-72.png'
import HalfCircle from './images/Group-30.png'

export default function AboutUs() {
  return (
    <>
      <div className="container bg-BannerImg">
        <div className="row">
          <div className="heading text-white text-center">
            <h1 className='display-3 fw-bolder' ><strong>About Us</strong></h1>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0 second-section">
        <div className="row pt-5 pb-5 w-75 m-auto">
          <h2 className='display-5 text-dark fw-bolder text-center'><strong>WHO WE ARE</strong></h2>
          <p className='text-dark text-center'>We’re a team of data crunching, problem solving, analytical tech-heads with the experience, know-how and relationships to navigate the 50+ marketplaces in Australia of the likes of Amazon, eBay, Catch, Bunnings, The Iconic (and the rest).</p>
          <p className='text-dark text-center'>We help our clients to be seen so they can connect with the millions of shoppers on marketplaces, grow their brand and find new customers.</p>
        </div>
      </div>
      <div className="container">
        <div className="row pt-5">
          <div className="col-xl-6 col-md-6 col-sm-12 text-center">
            <img src={People} alt="" />
            <h2 className='text-dark fw-bolder'><strong>WHAT WE <span style={{ color: '#00BA7C' }}>DO</span></strong></h2>
            <p className='text-dark'>We jump over the hurdles, stare down challenges to get your products in front of millions of customers.</p>
            <p className='text-dark'>We become your marketplace team and oversee everything from strategy through to organic listings, ongoing marketplace management, advertising and promotions so that your products are seen, more.</p>
          </div>
          <div className="col-xl-6 col-md-6 col-sm-12 text-center">
            <img src={Hand} alt="" />
            <h2 className='text-dark fw-bolder'><strong>WHO WE <span style={{ color: '#00BA7C' }}>WORK </span>WITH</strong></h2>
            <p className='text-dark'>We jump over the hurdles, stare down challenges to get your products in front of millions of customers.</p>
            <p className='text-dark'>We become your marketplace team and oversee everything from strategy through to organic listings, ongoing marketplace management, advertising and promotions so that your products are seen, more.</p>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5 pb-5 text-end" style={{backgroundColor:'#F4E7E7'}}>
        <div className="row justify-content-end">
          <div className="col-xl-6 col-md-6 col-sm-12 text-center w-25 section-4">
            <img src={GreenCircle} alt="" />
            <h2 className='fw-bolder'><strong style={{ color: '#00BA7C' }}>MARTIN HELLEBORG</strong></h2>
            <h6 className='text-dark'><strong>Managing Director</strong></h6>
            <p className='text-dark'>Swedish born, Martin Helleborg is passionate about helping brands be seen in today’s crowded consumer space.</p>
            <p className='text-dark'>With a unique mix of expertise in e-commerce and marketplace strategy, brand and retail digital media, Martin loves diving into data and analytics to discover unique ways for brands to connect with more customers on marketplaces.</p>
            <p className='text-dark'>Beginning his Australian life in media and advertising, Martin has worked at some of Australia’s biggest agencies including Carat (voted Australia’s Best Media Agency during his time) specialising in Digital Media for over a decade on accounts such as Dan Murphy’s, Holden, Reebok, Adidas, Bob Jane T-Mart, RSPCA Victoria, La Trobe University, as well as Chemist Warehouse.</p>
            <p className='text-dark'>With his skilled team, Martin enjoys the challenge of solving problems for clients who need help with listing, selling and advertising on marketplaces.</p>
          </div>
          <div className="col-xl-6 col-md-6 col-sm-12 p-0 text-end pt-5">
            <img src={HalfCircle} alt="" />
          </div>
        </div>
      </div>
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className='text-dark text-center fw-bolder'><strong>SOUND LIKE WHAT<br></br> YOU’RE LOOKING FOR?</strong></h2>
            <button className='btn btn-success fw-bolder mt-4 rounded-pill px-5 py-2 fs-3'>Let's Talk</button>
          </div>
        </div>
      </div>
    </>
  )
}
