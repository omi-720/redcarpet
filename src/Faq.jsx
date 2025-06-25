import React from 'react';
import './Faq.css';
import plus from './assets/plus.svg';
import table from './assets/table.svg'; 
import { useState } from 'react'; 

// ✅ Move the array here
const questionsAndAnswers = [
  {
    question: "The maximum annual household income to qualify for certain federal assistance programs?",
    answer:  
     (
      <div>
        <p>It depends on household size and state, but typically ranges between $30,000 and $60,000.</p>
        <img
          src={table} 
          alt="L1 Visa diagram"
          style={{ width: '100%', maxWidth: '600px', marginTop: '12px', borderRadius: '8px' }}
        />
      </div>
    )
  },

  {
    question: "Do I need a lawyer for tax settlement?",
    answer: "A lawyer is not mandatory, but one can help you negotiate better terms and avoid legal complications."
  },

  {
    question: "What is an L-1 Visa?",
    answer: "An L-1 Visa allows foreign companies to transfer certain employees to their U.S. offices."
  },

  {
    question: "What is Medicaid and are the Medicaid trusts expensive?",
    answer: "Medicaid is a state and federal program that helps with healthcare costs. Medicaid trusts can vary in cost based on complexity."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <div className="faq-heading">Frequently Asked Questions</div>
      <div className="faq-container">
        {questionsAndAnswers.map((qa, index) => (
          <div
            className={`faq-card ${openIndex === index ? 'open' : ''}`}
            key={index}
          >
            <div className="faq-card-content" onClick={() => toggleIndex(index)}>
              <div className="faq-question-text">{qa.question}</div>
              <div className="faq-icon-inner">
                <img
                  src={plus}
                  alt="Toggle answer"
                  style={{
                    transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}
                />
              </div>
            </div>
            {openIndex === index && (
              <div className="faq-answer">{qa.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
