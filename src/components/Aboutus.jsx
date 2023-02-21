import React from 'react';
import Aboutone from '../pages/images/about1.png'
import Abouttwo from '../pages/images/about2.png'
const Aboutus = () => {
  return (
      <div className='about' id='about-us'>
          <div className="container">
              <div className="content">
                  <div className="info">
                      <p>Don’t let anyone tell you that you have to be a certain way. Be unique, be what you feel like being. Life is too short to be perfect. </p>
                  </div>
                  <div className="images">
                      <img src={Aboutone} alt="" />
                      <div className="imgContent">
                          <img src={Abouttwo} alt="" />
                          <p>We all have those pieces in our closet that we keep for years and literally wear out before we retire them. We are here for you to bring '90s fashion vibes again.</p>
                          <button>About Us</button>
                      </div>
                  </div>
              </div>
              <hr />
      </div>
    </div>
  );
}
export default Aboutus;
