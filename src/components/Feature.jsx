import React from 'react';
import FeatOne from '../pages/images/fea1.png'
import FeatTow from '../pages/images/fea2.png'
const Feature = () => {
  return (
      <div className='feature'>
          <div className="container">
              <div className="info">
                  <h2>Featured Collections</h2>
                  <p>What you wear is how you present yourself to the world, especially today, when human contacts are so quick. Fashion is instant language</p>
              </div>
              <div className="images">
                  <img src={FeatOne} alt="" />
                  <img src={FeatTow} alt="" />
              </div>
              <hr />
          </div>

    </div>
  );
}

export default Feature;
