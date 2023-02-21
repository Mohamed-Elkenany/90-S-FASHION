import React from 'react';

const Footer = () => {
  return (
    <div className='footer'>
          <div className="container">
              <div className="content">
              <div className="content-left">
                  <div className="logo">
                      <h1>90’S FASHION</h1>
                      <p> Let’s go back to the 90s and dance.</p>
                  </div>
              </div>
              <div className="content-right">
                  <div className="location">
                      <h3>Location</h3>
                      <p>767 5th street,21st Floor, New York,USA</p>
                  </div>
                  <div className="links">
                      <h3>Links</h3>
                      <ul>
                          <li><a href='#'>About Us</a></li>
                          <li><a href='#'>Our sports</a></li>
                          <li><a href='#'>News</a></li>
                          <li><a href='#'>Contact Us</a></li>
                      </ul>
                  </div>
                  <div className="legal">
                      <h3>Legal</h3>
                      <ul>
                          <li>Privacy policy</li>
                          <li>Terms of Conditions</li>
                      </ul>
                  </div>
                  </div>
              </div>
              <p className='last'>@90’S FASHION 2022. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;