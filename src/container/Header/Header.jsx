import React from 'react';

import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Header.css';


const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour" />
      <h1 className='app__header-h1'>The key to Fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0'}}>
        Always fresh, always tasty. Enjoy our fine
        dining experience.
      </p>
      <button type='button' className='custom__button' ><a href="#menu">Explore Menu</a></button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
