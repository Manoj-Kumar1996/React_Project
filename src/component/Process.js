import React from 'react'
import First_Arrow from './images/fisrtarrow.png'
import box1 from './images/box1.png'
import Second_Arrow from './images/Second_Arrow1.png'

export default function Process() {
  return (
    <>
      <div className="container bg-BannerImg">
        <div className="row">
          <div className="heading text-white text-center">
            <h1 className='display-3 fw-bolder' ><strong>Our Process</strong></h1>
          </div>
        </div>
      </div>
      <div className="container-fluid ">
        <div className="row p-0">
          <div className="col-sm-12">
            <img src={First_Arrow} alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-md-3 col-sm-3 text-center">
            <img src={box1} alt="" />
          </div>
          <div className="col-xl-9 col-md-9 col-sm-9 w-50 pt-4">
            <h2 className='fw-bolder text-dark'><strong>DISCOVER</strong></h2>
            <p className='text-dark'>We ask you all the pointy questions to discover your brand, your consumers, your products, your challenges, your current capabilities and objectives.</p>
          </div>
          <div className="col-xl-4 col-md-4 col-sm-4 text-end ArrowRotaion">
            <img src={Second_Arrow} alt="" />
          </div>
          <div className="col-xl-8 col-md-8 col-sm-8">hi</div>
          <div className="col-xl-4 col-md-4 col-sm-4">hi</div>
          <div className="col-xl-8 col-md-8 col-sm-8">hi</div>
          <div className="col-xl-3 col-md-3 col-sm-3">hi</div>
          <div className="col-xl-9 col-md-9 col-sm-9">hi</div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <img src={First_Arrow} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
