import React, {useState} from 'react';
import { BsFillCartFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import {closeMenu , openMenu} from '../pages/Thems'
import { GlobalStyles } from '../pages/Thems';
import { ThemeProvider } from 'styled-components';




const Navbar = (props) => {
  const [menu, setMenu] = useState("close");
  const MenuToggler = () => {
    menu === "close" ? setMenu("open") : setMenu("close");
  }
  return (
    <div className='navbar'>
          <div className="container">
          <ul className="links">
              <li><a href="#home" className='active'>Home</a></li>
              <li><a href="#about-us">About Us</a></li>
              <li><a href="#shop">Shop</a></li>
              <li><a href="#blogs" >Blogs</a></li>
                </ul>
              <div className="logo">
            <h2>90’S FASHION</h2>
        </div>
                <ThemeProvider theme= { menu === "close" ? closeMenu: openMenu}>
      <GlobalStyles/>
          <GiHamburgerMenu className='menu'onClick={MenuToggler}/>
          </ThemeProvider>
              <div className="cart">
                    <BsFillCartFill className='icon' />
                  <span>Add to Cart </span>
              </div>
          </div>
          </div>
  );
}

export default Navbar;
