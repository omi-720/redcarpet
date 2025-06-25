import React from 'react';
import './Form.css';
import background from './assets/background.svg';
import blah from './assets/blah.svg'; 


 const Form = () => {
  return (
    
    <div className="form-wrapper">
      <div className="form-section">
        

{/*<div className="form-background">
        <img src= {background}>
        </img>
        </div>*/}

        <div className="form-prompt">
          Want Deeper Insights<br />
          Reach Out to Us.
        </div>

      

        {/* Right: Form */}
        <div className="form-card">
          <div className="form-field">Name</div>
          <div className="form-field">Email</div>
          <div className="form-row">
            <div className="form-field" style={{ width: '60px' }}>+1</div>
            <div className="form-field" style={{ flex: 1 }}>Phone Number</div>
          </div>
          <div className="form-field">Select Service</div>
          <div className="form-field" style={{ minHeight: '100px' }}>Description</div>
          <div className="submit-button">Submit</div>
        </div>
      </div>

      {/* Bottom Badge */}
      <div className="badge">This Is Attorney Advertising</div>
    </div>
  );
};

export default Form;