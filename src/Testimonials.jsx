import React from 'react';
import './Testimonials.css';
import test from './assets/test.svg';
import pic1 from './assets/pic1.svg';
import pic2 from './assets/pic2.svg';
import pic3 from './assets/pic3.svg';

 const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-heading">Testimonials</h2>
        
        <div className="testimonials-grid">
          
          {/* Testimonial Card 1 */}
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="profile-section">
                <div className="profile-icon-wrapper">
                  <img
                    src={pic1}
                    alt="Customer Profile"
                    className="profile-icon"
                  />
                </div>
                
                <div className="text-content">
                  <div className="testimonial-quote">
                    "Red Carpet Legal helped me cut my IRS payments in half. I was drowning now I'm stable."
                  </div>
                  <div className="testimonial-attribution">
                    Maria L., Small Business Owner
                  </div>
                </div>
              </div>
            </div>
            
            <div className="decorative-element">
              <img src={test} alt="Decorative element" />
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="profile-section">
                <div className="profile-icon-wrapper">
                  <img
                    src={pic2}
                    alt="Customer Profile"
                    className="profile-icon"
                  />
                </div>
                
                <div className="text-content">
                  <div className="testimonial-quote">
                    "After months of stress, their attorney got me into a payment plan the IRS accepted within 30 days."
                  </div>
                  <div className="testimonial-attribution">
                    James K., Self-Employed Consultant
                  </div>
                </div>
              </div>
            </div>
            
            <div className="decorative-element">
              <img src={test} alt="Decorative element" />
            </div>
          </div>

          {/* Testimonial Card 3 */}
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="profile-section">
                <div className="profile-icon-wrapper">
                  <img
                    src={pic3}
                    alt="Customer Profile"
                    className="profile-icon"
                  />
                </div>
                
                <div className="text-content">
                  <div className="testimonial-quote">
                    "They explained everything clearly and didn't make me feel judged. I can sleep again."
                  </div>
                  <div className="testimonial-attribution">
                    Diane P., Retired Nurse
                  </div>
                </div>
              </div>
            </div>
            
            <div className="decorative-element">
              <img src={test} alt="Decorative element" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;