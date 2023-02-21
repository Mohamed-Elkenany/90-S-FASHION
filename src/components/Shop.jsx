import React from 'react';
import intorVideo from '../pages/images/production ID_3917513.mp4';
import NavPage from './NavPage';
const Shop = () => {
  return (
    <div className='shop' id='shop'>
      <div className="container">
        <video src="https://player.vimeo.com/external/391960957.sd.mp4?s=dfde7649460ea3c7732f2d300214d1a33f6bc14d&profile_id=164&oauth2_token_id=57447761" autoPlay loop />
      </div>
      <NavPage/>
    </div>
  )
}

export default Shop;