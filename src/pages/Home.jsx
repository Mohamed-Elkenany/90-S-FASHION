import React from 'react';

import Navbar from '../components/Navbar';
import HomePage from '../components/HomePage';
import Line from '../components/Line';
import Newin from '../components/Newin';
import Feature from '../components/Feature';
import Aboutus from '../components/Aboutus';
import Shop from '../components/Shop';
import Blogs from '../components/Blogs';
import InstaBar from '../components/InstaBar';
import Footer from '../components/Footer';

const Home = (props) => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Line />
      <Newin />
      <Feature />
      <Aboutus />
      <Shop />
      <Blogs />
      <InstaBar />
      <Footer/>
      </div>
  );
}

export default Home;