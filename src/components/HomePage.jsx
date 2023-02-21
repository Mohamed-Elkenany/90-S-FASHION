import React from 'react';
import { FiArrowDown } from 'react-icons/fi'
import img1 from '../pages/images/fash1.png'
import img2 from '../pages/images/fash2.png'



const HomePage = () => {
  return (
    <div className='homePage' id='home'>
      <div className="container">
        <div className="homeInfo">
          <div className="Desc">
          <h2>Fashion is the armor to survive the reality of everyday life.</h2>
          <button>Shop Now</button>
          </div>
          <FiArrowDown className='down'/>
        </div>
        <div className="imageContainer">
          <div className="contOne">
            <img src={img1} />
            <p>The key to style is learning who you are.There's no how-to road map to style. It's about self expression.</p>
          </div>
          <div className="contTwo">
            <img src={img2}/>
          </div>
        </div>
        </div>
    </div>
  );
}

export default HomePage;
