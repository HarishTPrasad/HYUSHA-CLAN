
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Contact Us</h3>
            <p>Email: clanhyusha@gmail.com</p>
            {/* <p>Phone: +91 7096701215</p> */}
          </div>
          <div className="col-md-6">
            <h3>Follow Us</h3>
            <div className="social-links">
              {/* <a href="#" className="social-link"><i className="fab fa-facebook"></i></a>
              <a href="#" className="social-link"><i className="fab fa-twitter"></i></a> */}
              <a href="https://www.instagram.com/hyusha_clan/" className="social-link"><i className="fab fa-instagram"></i> hyusha_clan
               </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="copyright">&copy; 2024 @HYUSHA_CLAN Company. All Rights Reserved. Project by CYPHER ELITES. </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
