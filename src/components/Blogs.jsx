import React from 'react';
import blogImg from '../pages/images/blogs.png'
import {WiDirectionUpRight} from 'react-icons/wi'
const Blogs = () => {
  return (
      <div className='blogs' id='blogs'>
          <div className="container">
              <div className="content">
                  <img src={blogImg} alt="" />
                  <div className="info">
                      <p> Know about our newest arrivals.</p>
                      <h1>Get in Touch</h1>
                      <p>Fashion is part of the daily air and it changes all the time, with all the events. You can even see the approaching of a revolution in clothes. You can see and feel everything in clothes.</p>
                      <div className="lastText">
                          <p>Enter your email address</p>
                          <WiDirectionUpRight className='icon'/>
                      </div>
                          <hr />
                  </div>
              </div>
          </div>
      
    </div>
  );
}

export default Blogs;
