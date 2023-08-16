import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
      <footer className="footer-distributed">
        <div className="container">
          <div className="footer-left">
            <h3>Health Care</h3>

            <p className="footer-links">
              <a href="/#" className="link-1">
                Home
              </a>

              <a href="/Findadoc">Find a Doctor</a>

              <a href="/task">Tasks</a>

              <a href="/contact">Contact</a>

              <a href="/migraine">Conditions</a>

              <a href="/teenhealth">Well Being</a>
            </p>

            <p className="footer-company-name">Health Care © 2023</p>
          </div>

          <div className="footer-center">
            <div>
              <i className="fa fa-map-marker"></i>
              <p>
                <span>Sahyadri Campus</span> Adyar,Mangaluru
              </p>
            </div>

            <div>
              <i className="fa fa-phone"></i>
              <p>+91-8877995544</p>
            </div>

            <div className="footer-connect">
          <div className="footer-contact">
            <span className="footer-icon">📧</span> <a href="mailto:info@healthcare.com">info@healthcare.com</a>
          </div>
          <div className="footer-contact">
            <span className="footer-icon">🐦</span> <a href="https://twitter.com/HealthcareHQ" target="_blank">@HealthcareHQ</a>
          </div>
          <div className="footer-contact">
            <span className="footer-icon">📷</span> <a href="https://www.instagram.com/healthcare_official" target="_blank">@healthcare_official</a>
          </div>
          <div className="footer-contact">
            <span className="footer-icon">📘</span> <a href="https://www.facebook.com/HealthcarePage" target="_blank">/HealthcarePage</a>
          </div>
          </div>
          </div>
         

          <div className="footer-right">
            <p style={{ color: "inherit" }} className="footer-company-about">
              <span>About the company</span>
              Welcome to Healthcare – Your Trusted Health Partner

At Healthcare, we are dedicated to providing top-notch healthcare services and information to empower individuals and communities to lead healthier lives. With a passionate team of experienced medical professionals and cutting-edge technology, we strive to make healthcare accessible, efficient, and patient-centered.
            </p>

            <div className="footer-icons">
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
