import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote"/>
          <p className='p__opensans'>
            We believe in the power of food to bring people together. We believe in the power of food to bring people together. We believe in the power of food to bring people together.
            We believe in the power of food to bring people together. We believe in the power of food to bring people together.
          </p>
        </div>

        <div className="app__chef-content_text">
          <p className='p__montserrat'>
            Our chefs are not just cooks, they are artists. They create masterpieces that are not just delicious but also visually appealing. We believe in the power of food to bring people together. Our chefs are not just cooks, they are artists. They create masterpieces that are not just delicious but also visually appealing.
          </p>
        </div>

        <div className="app__chef-sign">
          <p>Salvo Maggiore</p>
          <p className='p__opensans'>Chef & Co-Founder</p>
          <img src={images.sign} alt="signature" />
        </div>

      </div>
    </div>
  </div>
);

export default Chef;
