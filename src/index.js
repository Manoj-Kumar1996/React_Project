import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Contact from './component/Contact';
import AboutUs from './component/AboutUs';
import Footer from './component/Footer';
import Process from './component/Process';
import OurService from './component/OurService'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/about" element={<AboutUs />} />
      <Route exact path="/service" element={<OurService />} />
      <Route exact path="/process" element={<Process />} />
    </Routes>
    <Footer />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
