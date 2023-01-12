import React from 'react'
import logoimg from './images/20Logo.png';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <div className="container pt-5">
                <div className="row pt-5">
                    <div className="col-xl-3 col-md-3"><a href="#"><img className='img-fluid' src={logoimg} alt=""  /></a></div>
                    <div className="col-xl-3 col-md-3 col-sm-12">
                        <h5><strong>Links</strong></h5>
                        
                        <p><Link className='text-decoration-none text-success' to='/'>Home</Link></p>
                        <p><Link className='text-decoration-none text-success' to='/about'>About Us</Link></p>
                        <p><Link className='text-decoration-none text-success' to='/process'>Process</Link></p>
                        <p><Link className='text-decoration-none text-success' to='/service'>Our Services</Link></p>
                        <p><Link className='text-decoration-none text-success' to='/blog'>Insight</Link></p>
                        <p><Link className='text-decoration-none text-success' to='/contact'>Contact</Link></p>
                       
                    </div>
                    <div className="col-xl-3 col-md-3">
                        <h5><strong>Twenty Twenty</strong></h5>
                        <p className='text-dark'><strong>245 St Kilda Road, St Kilda<br/> Victoria 3182, Australia</strong></p>
                    </div>
                    <div className="col-xl-3 col-md-3">
                        <form>
                            <div className="form-group ">
                                
                                <input type="text" className="form-control rounded-pill" id="formGroupExampleInput" placeholder="Full Name" />
                            </div>
                            <div className="form-group pt-3">
                              
                                <input type="text" className="form-control rounded-pill" id="formGroupExampleInput2" placeholder="Address" />
                            </div>
                            <div className="form-group pt-3 text-center">
                               <button className='btn btn-success w-100 rounded-pill'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
};

export default Footer;
