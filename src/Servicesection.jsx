import React from 'react';
import s1 from './assets/s1.svg';
import s2 from './assets/s2.svg';
import icon from './assets/icon.svg';
import chevrondown from './assets/chevrondown.svg';
import chevronup from './assets/chevronup.svg';
import './Servicesection.css';
import '@fontsource/inter'; // Defaults to 400 (normal weight)
import '@fontsource/inter/400.css'; // Regular
import '@fontsource/inter/600.css'; // Semi-bold
import '@fontsource/inter/700.css'; // Bold



 const Servicesection = () => {
  return (
    <>
      {/* Services Section */}
      <div className="services-section">
        <div className="services-heading">
          Services
        </div>

        <div className="services-wrapper">

          {/* Card 1 */}

          <div className="service-card">
            {/* Left Side - Icon + Title */}
            <div className="card-left">
              {/* Icon */}
              <div className="icon-wrapper">
                <img
                  src={s1}
                  alt="Icon representing L-1 visa solutions"
                  className="card-icon"
                />
              </div>

              {/* Title */}
              <div className="card-title">
                L-1 Visa Solutions for International Manufacturers
              </div>
            </div>




         {/* Right Side - Description & Services */}

<div className="card-right">

  {/* First Service Item */}
  <div className="card-item">
    <div className="item-header">
      <div className="item-title">
      <div className="item-header" style={{ paddingBottom: '12px' }}>
  <div
    className="item-title"
    style={{
      borderBottom: '1px solid #2E4580',
      display: 'inline-block',
      paddingBottom: '2px', // optional: visually separates line from text
    }}
  >
    Business entry formation U.S.
  </div>
</div>
      </div>
    </div>
    <div className="item-desc">
      We help international businesses establish a legal U.S. presence by
      choosing the right entity and handling all registrations efficiently.
    </div>
    
    <div className="item-desc" style={{ 
        //borderBottom: '1px solid #2E4580', 
        //paddingBottom: '16px',
        marginBottom: '12px'
      }}></div>
  </div>



  <div className="card-item">
    <div className="item-header">
      <div className="item-title">
      <div className="item-header" style={{ paddingBottom: '12px' }}>
  <div
    className="item-title"
    style={{
      borderBottom: '1px solid #2E4580',
      display: 'inline-block',
      paddingBottom: '2px', // optional: visually separates line from text
    }}
  >
L-1 visa strategy, petition and documentation  </div>
</div> 
      </div>
    </div>
    <div className="item-desc">
    We guide businesses through L-1 visa strategy and documentation. Our service ensures accurate
     petitions for smooth intra-company transfers.    </div>
    
    <div className="item-desc" style={{ 
        //borderBottom: '1px solid #2E4580', 
        //paddingBottom: '16px',
        marginBottom: '12px'
      }}></div>
  </div>




  <div className="card-item">
    <div className="item-header">
      <div className="item-title">
      <div className="item-header" style={{ paddingBottom: '12px' }}>
  <div
    className="item-title"
    style={{
      borderBottom: '1px solid #2E4580',
      display: 'inline-block',
      paddingBottom: '2px', // optional: visually separates line from text
    }}
  >
Corporate compliance and legal support </div>
</div> 
      </div>
    </div>
    <div className="item-desc">
    We provide ongoing corporate compliance and legal support. Our services
     help businesses meet regulatory requirements and avoid legal issues.   </div>
    
    <div className="item-desc" style={{ 
        //borderBottom: '1px solid #2E4580', 
        //paddingBottom: '16px',
        marginBottom: '12px'
      }}></div>
  </div>


  <div className="card-item">
    <div className="item-header">
      <div className="item-title">
      <div className="item-header" style={{ paddingBottom: '12px' }}>
  <div
    className="item-title"
    style={{
      borderBottom: '1px solid #2E4580',
      display: 'inline-block',
      paddingBottom: '2px', // optional: visually separates line from text
    }}
  >
    Guidance on U.S. expansion logistics
  </div>
</div>  
      </div>
    </div>
    <div className="item-desc">
    We offer strategic guidance on U.S. expansion logistics. Our support helps businesses 
    navigate setup, operations, and legal requirements efficiently.
    </div>
     <div className="item-desc" style={{ 
        //borderBottom: '1px solid #2E4580', 
        //paddingBottom: '16px',
        marginBottom: '12px'
      }}></div>
  </div>
</div>
</div> 



          {/* Card 2 */}
<div className="service-card">

  {/* Right Side - Description & Services (now on left) */}
  <div className="card-right">


    {/* First Service Item */}

    <div className="card-item">
    <div className="item-header">
      <div className="item-title">
      <div className="item-header" style={{ paddingBottom: '12px' }}>
  <div
    className="item-title"
    style={{
      borderBottom: '1px solid #2E4580',
      display: 'inline-block',
      paddingBottom: '2px', // optional: visually separates line from text
    }}
  >
Business entry formation U.S. </div>
</div> 
      </div>
    </div>
    <div className="item-desc">
    We help international businesses establish a legal U.S. presence
     by choosing the right entity and handling all registrations efficiently.  </div>
    
    <div className="item-desc" style={{ 
        //borderBottom: '1px solid #2E4580', 
        //paddingBottom: '16px',
        marginBottom: '12px'
      }}></div>
  </div>


{/* Second service item */}
<div className="card-item">
    <div className="item-header">
      <div className="item-title">
      <div className="item-header" style={{ paddingBottom: '12px' }}>
  <div
    className="item-title"
    style={{
      borderBottom: '1px solid #2E4580',
      display: 'inline-block',
      paddingBottom: '2px', // optional: visually separates line from text
    }}
  >
Asset protection strategies</div>
</div> 
      </div>
    </div>
    <div className="item-desc">
    We design asset protection strategies to safeguard your wealth. Our 
    plans help shield assets from lawsuits, creditors, and unforeseen risks. </div>
    
    <div className="item-desc" style={{ 
        //borderBottom: '1px solid #2E4580', 
        //paddingBottom: '16px',
        marginBottom: '12px'
      }}></div>
  </div>
  

{/* Third service item */}
<div className="card-item">
    <div className="item-header">
      <div className="item-title">
      <div className="item-header" style={{ paddingBottom: '12px' }}>
  <div
    className="item-title"
    style={{
      borderBottom: '1px solid #2E4580',
      display: 'inline-block',
      paddingBottom: '2px', // optional: visually separates line from text
    }}
  >
Medicaid application assistance </div>
</div> 
      </div>
    </div>
    <div className="item-desc">
    We assist with Medicaid applications to ensure accuracy and eligibility. 
    Our guidance simplifies the process and helps secure necessary benefits.</div>
    
    <div className="item-desc" style={{ 
        //borderBottom: '1px solid #2E4580', 
        //paddingBottom: '16px',
        marginBottom: '12px'
      }}></div>
  </div>
  </div>

  {/* Left Side - Icon + Title (now on right) */}
  <div className="card-left" style={{ alignItems: 'flex-end', textAlign: 'right' }}>
  {/* Icon */}
    {/* Icon */}
    <div className="icon-wrapper">
      <img
        src={icon}
        alt="Icon Representing Affordable Medicaid Trust Creation"
        className="card-icon"
      />
    </div>
    {/* Title */}
    <div className="card-title">
      Affordable Medicaid Trust Creation
    </div>
  </div>
</div>




          {/* Card 3 - Centered Card */}
          <div className="service-card">
            {/* Left Side - Icon + Title */}
            <div className="card-left">
              {/* Icon */}
              <div className="icon-wrapper">
                <img
                  src={s2}
                  alt="Icon representing L-1 visa solutions"
                  className="card-icon"
                />
              </div>

              {/* Title */}
              <div className="card-title">
              Income Tax Law - Tax Settlement
              </div>
            </div>



{/* Right Side - Description & Services */}

<div className="card-right">

  {/* First Service Item */}
  <div className="card-item">
    <div className="item-header">
      <div className="item-title">
      <div className="item-header" style={{ paddingBottom: '12px' }}>
  <div
    className="item-title"
    style={{
      borderBottom: '1px solid #2E4580',
      display: 'inline-block',
      paddingBottom: '2px', // optional: visually separates line from text
    }}
  >
    Creating an affordable settlement
  </div>
</div>
      </div>
    </div>
    <div className="item-desc">
    We help clients create affordable IRS settlements. Our goal is to reduce tax burdens and restore financial peace of mind.
    </div>
    
    <div className="item-desc" style={{ 
        //borderBottom: '1px solid #2E4580', 
        //paddingBottom: '16px',
        marginBottom: '12px'
      }}></div>
  </div>



  <div className="card-item">
    <div className="item-header">
      <div className="item-title">
      <div className="item-header" style={{ paddingBottom: '12px' }}>
  <div
    className="item-title"
    style={{
      borderBottom: '1px solid #2E4580',
      display: 'inline-block',
      paddingBottom: '2px', // optional: visually separates line from text
    }}
  >
Dramatically reduce your monthly payments</div>
</div> 
      </div>
    </div>
    <div className="item-desc">
    We help you dramatically reduce your IRS monthly payments. Our legal strategies aim to lower debt and ease financial stress.  </div>
    
    <div className="item-desc" style={{ 
        //borderBottom: '1px solid #2E4580', 
        //paddingBottom: '16px',
        marginBottom: '12px'
      }}></div>
  </div>




  <div className="card-item">
    <div className="item-header">
      <div className="item-title">
      <div className="item-header" style={{ paddingBottom: '12px' }}>
  <div
    className="item-title"
    style={{
      borderBottom: '1px solid #2E4580',
      display: 'inline-block',
      paddingBottom: '2px', // optional: visually separates line from text
    }}
  >
Prevent wage garnishment and bank levels </div>
</div> 
      </div>
    </div>
    <div className="item-desc">
    We work to prevent IRS wage garnishments and bank levies. Our legal actions protect your income and financial stability.  </div>
    
    <div className="item-desc" style={{ 
        //borderBottom: '1px solid #2E4580', 
        //paddingBottom: '16px',
        marginBottom: '12px'
      }}></div>
  </div>



  <div className="card-item">
    <div className="item-header">
      <div className="item-title">
      <div className="item-header" style={{ paddingBottom: '12px' }}>
  <div
    className="item-title"
    style={{
      borderBottom: '1px solid #2E4580',
      display: 'inline-block',
      paddingBottom: '2px', // optional: visually separates line from text
    }}
  >
Help you avoid enforced collection </div>
</div> 
      </div>
    </div>
    <div className="item-desc">
    We help you avoid enforced IRS collections through legal negotiation. Our goal is to stop aggressive actions before they begin.  </div>
    
    <div className="item-desc" style={{ 
        //borderBottom: '1px solid #2E4580', 
        //paddingBottom: '16px',
        marginBottom: '12px'
      }}></div>
  </div>



  <div className="card-item">
    <div className="item-header">
      <div className="item-title">
      <div className="item-header" style={{ paddingBottom: '12px' }}>
  <div
    className="item-title"
    style={{
      borderBottom: '1px solid #2E4580',
      display: 'inline-block',
      paddingBottom: '2px', // optional: visually separates line from text
    }}
  >
Lead to partial debt forgiveness over time </div>
</div> 
      </div>
    </div>
    <div className="item-desc">
    We pursue solutions that can lead to partial IRS debt forgiveness. Over time, this reduces what you owe and eases repayment.</div>
    
    <div className="item-desc" style={{ 
        //borderBottom: '1px solid #2E4580', 
        //paddingBottom: '16px',
        marginBottom: '12px'
      }}></div>
  </div>



  <div className="card-item">
    <div className="item-header">
      <div className="item-title">
      <div className="item-header" style={{ paddingBottom: '12px' }}>
  <div
    className="item-title"
    style={{
      borderBottom: '1px solid #2E4580',
      display: 'inline-block',
      paddingBottom: '2px', // optional: visually separates line from text
    }}
  >
   You must owe at least $5,000 to qualify
  </div>
</div>  
      </div>
    </div>
    <div className="item-desc">
    To qualify for our tax resolution services, you must owe the IRS at least $5,000. This is our minimum case requirement.
    </div>
     <div className="item-desc" style={{ 
        //borderBottom: '1px solid #2E4580', 
        //paddingBottom: '16px',
        marginBottom: '12px'
      }}></div>
  </div>
</div>
</div> 
</div>
     </div> 
    </>
  );
};

export default Servicesection;