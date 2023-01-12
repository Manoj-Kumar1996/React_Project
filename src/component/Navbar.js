
import React from 'react'
import './Navbar.css'
import logo from './images/20Logo.png';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar bg-white fixed-top shadow p-2 bg-body rounded-pill NAvbar">
                <div className="container-fluid">
                    <div className='text-center'>
                        <Link className="navbar-brand" to="/"><img src={logo} alt="" width={150} /></Link>
                    </div>
                    <div>
                    <button className='btn '>Login</button>
                    <button className='btn '>Sign Up</button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon border-0" />
                    </button>
                    
                    </div>
                    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">

                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                        </div>
                        <div className="offcanvas-body">
                            <img src={logo} alt="" width={100} />
                           
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link className="nav-link active"  to="/" >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about" >About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/process" >Process</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/service" >Our Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact" >Contact</Link>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;