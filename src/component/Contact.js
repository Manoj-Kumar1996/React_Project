import React, { useState } from 'react'

export default function Contact() {
    const [valueData,setValue]= useState({
        first_name:"",
        last_name:"",
        companyName:"",
        job_title:"",
        phone_number:"",
        email_address:""
    });

    const HandleData = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setValue((prev)=>{
            return{...prev, [name]:value};
        });

    };
    return (
        <>
            <div className="container bg-BannerImg">
                <div className="row">
                    <div className="heading text-white text-center">
                        <h1 className='display-3 fw-bolder' ><strong>GET IN TOUCH</strong></h1>
                    </div>
                </div>
            </div>
            <div className="container-fluid pt-5 pb-5" style={{ backgroundColor: '#F4E2E1' }}>
                <form action="">
                    <div className="row pt-5 w-75 m-auto">
                        <div className="col-xl-6 col-md-6 col-sm-12">
                            <input className="form-control rounded-pill p-3 "name='first_name' type="text"
                             value={valueData.first_name} 
                            onChange={HandleData}
                              placeholder='First Name' />
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12">
                            <input className="form-control rounded-pill p-3" name='last_name' type="text"  onChange={HandleData}  value={valueData.last_name}  placeholder='Last Name' />
                        </div>
                    </div>
                    <div className="row w-75 m-auto pt-4">
                        <div className="col-xl-6 col-md-6 col-sm-12">
                            <input className="form-control rounded-pill p-3" name='companyName'  onChange={HandleData} value={valueData.companyName}  type="text" placeholder='Company' />
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12">
                            <input className="form-control rounded-pill p-3" name='job_title' onChange={HandleData} value={valueData.job_title}  type="text" placeholder='Job Title' />
                        </div>
                    </div>
                    <div className="row w-75 m-auto pt-4">
                        <div className="col-xl-6 col-md-6 col-sm-12">
                            <input className="form-control rounded-pill p-3" name='phone_number'  onChange={HandleData} value={valueData.phone_number}  type="number" placeholder='Phone Number' />
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12">
                            <input className="form-control rounded-pill p-3" name='email_address'  onChange={HandleData} value={valueData.email_address}  type="email" placeholder='Email Address' />
                        </div>
                    </div>
                    <div className="row w-75 m-auto pt-5">
                        <div className="col-xl-12 col-md-12 col-sm-12">
                            <textarea className="form-control rounded-5" id="exampleFormControlTextarea1" rows="8"></textarea>
                        </div>
                    </div>
                    <div className="row w-75 m-auto pt-5">
                        <label className='fs-4 pb-2'><strong>How many SKUs / Products do you sell / are looking to sell?</strong></label>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input p-2" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label className="form-check-label px-2" htmlFor="inlineRadio1">1-100</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input p-2" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label className="form-check-label px-2" htmlFor="inlineRadio2">101-500</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input p-2" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                            <label className="form-check-label px-2" htmlFor="inlineRadio3">501-1000</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input p-2" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                            <label className="form-check-label px-2" htmlFor="inlineRadio3">1000+</label>
                        </div>
                        <button type='submit' className='btn btn-success rounded-pill fs-4 mt-4'>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}
