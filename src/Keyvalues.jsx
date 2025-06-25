import React from "react";
import "./Keyvalues.css";

// Import icons
import icon from "./assets/Icon.svg";
import icon2 from "./assets/icon2.svg";
import icon3 from "./assets/icon3.svg";
import icon4 from "./assets/icon4.svg";
import icon5 from "./assets/icon5.svg";
import icon6 from "./assets/icon6.svg";
import icon7 from "./assets/icon7.svg";
import icon8 from "./assets/icon8.svg";

const cardData = [
  {
    title: "Provides Payment Plans for Convenience",
    subtitle: "Flat fees start at $5,000",
    icon: icon,
  },
  {
    title: "IRS Tax Resolution Plans",
    subtitle: "Tailored by Licensed Attorneys",
    icon: icon2,
  },
  {
    title: "Personal Attorney Access",
    subtitle: "Not just a call center",
    icon: icon3,
  },
  {
    title: "All-Inclusive Flat Fees",
    subtitle: "Ranging from $3,999 to $6,999",
    icon: icon4,
  },
  {
    title: "Confidential Evaluation",
    subtitle: "Online or over the phone",
    icon: icon5,
  },
  {
    title: "Custom Settlement Strategy",
    subtitle: "We deal directly with the IRS",
    icon: icon6,
  },
  {
    title: "Ongoing Support",
    subtitle: "Compliance, unfiled returns, and more",
    icon: icon7,
  },
  {
    title: "Fees Earned Upon Receipt",
    subtitle: "In line with law firm regulations",
    icon: icon8,
  },
];

const KeyValues = () => (
  <section className="keyvalues-section">
    <h2 className="keyvalues-title">Why Choose Us?</h2>
    <div className="keyvalues-grid">
      {cardData.map(({ title, subtitle, icon }, index) => (
        <div key={index} className="keyvalue-card">
          <div className="keyvalue-icon-container">
            <img
              src={icon}
              alt={`Icon for ${title}`}
              className="keyvalue-icon"
            />
          </div>
          <div className="keyvalue-text-container">
            <h3 className="keyvalue-text-title">{title}</h3>
            <p className="keyvalue-text-subtitle">{subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default KeyValues;
