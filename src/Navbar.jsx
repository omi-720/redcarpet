import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from './assets/logo.svg'; // make sure this path is correct
import './Navbar.css'; // optional

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    closeMobileMenu(); // Close mobile menu after clicking
  };

  return (
    <>
      <div className="navbar-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" style={{ height: '40px' }} />
        </div>
        <div className="nav-links">
          <span className="nav-link" onClick={() => scrollToSection('hero')}>
            Home
          </span>
          <span className="nav-link" onClick={() => scrollToSection('keyvalues')}>
            Why Choose Us 
          </span>
          <span className="nav-link" onClick={() => scrollToSection('services')}>
            Services
          </span>
        
          <span className="nav-link" onClick={() => scrollToSection('faq')}>
            FAQs
          </span>
         
          
        </div>
        <button 
          className="contact-button" 
          onClick={() => scrollToSection('contact')}
          style={{ backgroundColor: '#2E4580', color: 'white' }}
        >
          Contact Us
        </button>
        <button className="hamburger-button" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            <button className="mobile-nav-link" onClick={() => scrollToSection('hero')}>
              Home
            </button>
            <button className="mobile-nav-link" onClick={() => scrollToSection('keyvalues')}>
              Key Values
            </button>
            <button className="mobile-nav-link" onClick={() => scrollToSection('services')}>
              Services
            </button>
           
            <button className="mobile-contact-button" onClick={() => scrollToSection('faq')}>
              FAQs 
            </button>
            <button 
          className="mobile-contact-button" 
          onClick={() => scrollToSection('contact')}
          style={{ backgroundColor: '#2E4580', color: 'white' }}
        >
Contact Us          
 </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;