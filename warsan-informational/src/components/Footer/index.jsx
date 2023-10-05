import React from "react";
import './style.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer" id="Contact-Us">
        <div className="footercard">
          <h3>Phone Number</h3>
          <p>
            +254 767535782 <br />
            +254 723567813
          </p>
        </div>

        <div className="footercard">
          <h3>Email</h3>
          <p>
            warsanakirachix@gmail.com
          </p>
        </div>

        <div className="footercard">
          <h3>Our Address</h3>
          <p>
            616, Korongo Road
          </p>
        </div>
      </div>

      <div className="copyright">
        @2023 Warsan. All Rights Reserved
      </div>
    </div>
  )
}

export default Footer;
