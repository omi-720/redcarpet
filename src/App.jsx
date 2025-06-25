import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Keyvalues from './Keyvalues';
import Faq from './Faq';
import Servicesection from './Servicesection';
import Testimonials from './Testimonials';
import Form from './Form';
import Footer from './Footer'; 

function App() {
  return (
    <>
      <Navbar/>
      <div id="hero">
        <Hero/>
      </div>
      <div id="keyvalues">
        <Keyvalues/>
      </div>
      <div id="services">
        <Servicesection/>
      </div>
      <div id="faq">
        <Faq/>
      </div>
      <div id="form">
        <Form/>
      </div>
      <div id="contact">
        <Footer/>
      </div>
    </>
  );
}

export default App;