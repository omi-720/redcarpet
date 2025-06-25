import React from "react";
import "./Footer.css";
import insta from "./assets/insta.svg";
import facebook from "./assets/facebook.svg";
import yt from "./assets/yt.svg";
import bitmap1 from "./assets/bitmap1.svg";
import twitter from "./assets/twitter.svg";
import logo from "./assets/logo.svg";

const Footer = () => {
  return (
    <div
      className="footer-container"
      style={{
        width: "100%",
        padding: "70px 10%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
        background: "#FBFCFE",
        fontFamily: "Inter",
      }}
    >
      {/* Logo as title */}
      <div
        className="footer-logo"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <img src={logo} alt="Logo" style={{ height: "40px" }} />
      </div>

      {/* Footer content container */}
      <div
        className="footer-content"
        style={{
          width: "100%",
          maxWidth: "800px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "60px",
          fontFamily: "Inter",
        }}
      >
        {/* Links Section */}
        <div
          className="footer-section"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "18px",
            fontFamily: "Inter",
          }}
        >
          <div
            className="footer-section-title"
            style={{
              opacity: 0.8,
              color: "#2E2E2E",
              fontSize: 18,
              fontWeight: "600",
              lineHeight: 1.5,
              fontFamily: "Inter",
            }}
          >
            Links
          </div>
          <div
            className="footer-links-gap"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div
              className="footer-section-item"
              style={{
                opacity: 0.8,
                color: "#2E2E2E",
                fontSize: 14,
                fontFamily: "Inter",
                fontWeight: "400",
                lineHeight: 1.5,
              }}
            >
              Home
            </div>
            <div
              className="footer-section-item"
              style={{
                opacity: 0.8,
                color: "#2E2E2E",
                fontSize: 14,
                fontFamily: "Inter",
                fontWeight: "400",
                lineHeight: 1.5,
              }}
            >
              Services
            </div>
            <div
              className="footer-section-item"
              style={{
                opacity: 0.8,
                color: "#2E2E2E",
                fontSize: 14,
                fontFamily: "Inter",
                fontWeight: "400",
                lineHeight: 1.5,
                whiteSpace: "nowrap",
              }}
            >
              How it Works
            </div>
            <div
              className="footer-section-item"
              style={{
                opacity: 0.8,
                color: "#2E2E2E",
                fontSize: 14,
                fontFamily: "Inter",
                fontWeight: "400",
                lineHeight: 1.5,
              }}
            >
              Testimonials
            </div>
          </div>
        </div>

        {/* Legals Section */}
        <div
          className="footer-section footer-section-gap"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "16px",
          }}
        >
          <div
            className="footer-section-title"
            style={{
              opacity: 0.8,
              color: "#2E2E2E",
              fontSize: 18,
              fontFamily: "Inter",
              fontWeight: "600",
              lineHeight: 1.5,
            }}
          >
            Legals
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div
              className="footer-section-item"
              style={{
                opacity: 0.8,
                color: "#2E2E2E",
                fontSize: 14,
                fontWeight: "400",
                lineHeight: 1.5,
              }}
            >
              Privacy Policy
            </div>
            <div
              className="footer-section-item"
              style={{
                opacity: 0.8,
                color: "#2E2E2E",
                fontSize: 14,
                fontWeight: "400",
                lineHeight: 1.5,
              }}
            >
              Terms & Condition
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div
          className="footer-section footer-section-gap"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "16px",
          }}
        >
          <div
            className="footer-section-title"
            style={{
              opacity: 0.8,
              color: "#2E2E2E",
              fontSize: 18,
              fontFamily: "Inter",
              fontWeight: "600",
              lineHeight: 1.5,
            }}
          >
            Contact
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div
              className="footer-contact-container"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                className="footer-section-item"
                style={{
                  opacity: 0.8,
                  color: "#2E2E2E",
                  fontSize: 14,
                  fontFamily: "Inter",
                  fontWeight: "400",
                  lineHeight: 1.5,
                }}
              >
                Mark Taran:
              </div>
              <div
                className="footer-section-item"
                style={{
                  opacity: 0.8,
                  color: "#2E2E2E",
                  fontSize: 14,
                  fontFamily: "Inter",
                  fontWeight: "600",
                  lineHeight: 1.5,
                }}
              >
                +1 (917) 302 - 8270
              </div>
            </div>
          </div>
        </div>

        {/* Socials Section */}
        <div
          className="footer-section footer-section-gap"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "16px",
          }}
        >
          <div
            className="footer-section-title"
            style={{
              opacity: 0.8,
              color: "#2E2E2E",
              fontSize: 18,
              fontFamily: "Inter",
              fontWeight: "600",
              lineHeight: 1.5,
            }}
          >
            Socials
          </div>
          <div
            className="footer-socials-container"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <img
              className="footer-social-icon"
              style={{ width: 19.79, height: 20 }}
              src={facebook}
              alt="Facebook"
            />
            <img
              className="footer-social-icon"
              style={{ width: 19.79, height: 20 }}
              src={insta}
              alt="Instagram"
            />
            <img
              className="footer-social-icon"
              style={{ width: 19.79, height: 20 }}
              src={twitter}
              alt="Twitter"
            />
            <img
              className="footer-social-icon"
              style={{ width: 19.79, height: 20 }}
              src={yt}
              alt="YouTube"
            />
            <img
              className="footer-social-icon"
              style={{ width: 19.79, height: 20 }}
              src={bitmap1}
              alt="Bitmap"
            />
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div
        className="footer-bottom-line"
        style={{
          width: "100%",
          maxWidth: "800px",
          height: "1px",
          backgroundColor: "#E5E5E5",
          marginTop: "20px",
        }}
      ></div>

      {/* Copyright */}
      <div
        className="footer-copyright"
        style={{
          opacity: 0.6,
          color: "#2E2E2E",
          fontSize: 14,
          fontFamily: "Inter",
          fontWeight: "400",
          lineHeight: 1,
          wordWrap: "break-word",
        }}
      >
        © 2025 Taran & Associates, P.C. | All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
