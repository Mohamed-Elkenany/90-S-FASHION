import React from 'react';
import Newone from '../pages/images/new1.png'
import Newtwo from '../pages/images/new2.png'
import Newthree from '../pages/images/new3.png'
const Newin = () => {
  return (
      <div className='newin'>
          <div className="container">
              <div className="info">
                  <h2>New In</h2>
                  <div className="Desc">
                      <p>Style is the only thing you can’t buy. It’s something reflected from our soul to the outside world.</p>
                      <ul className="categories">
                          <li>Hoddies</li>
                          <li>Jeans& Shirts</li>
                          <li>T-Shirts</li>
                          <li>Jackets</li>
                      </ul>
                  </div>
              </div>
              <div className="images">
                  <img src={Newone} alt="" />
                  <img src={Newtwo} alt="" />
                  <img src={Newthree} alt="" />
              </div>
      </div>
    </div>
  );
}

export default Newin;
