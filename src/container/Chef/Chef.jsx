import React from 'react';
import { useTranslation } from 'react-i18next';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => {
  const { t } = useTranslation();

  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__chef-container">
        {/* <div className="app__chef-img">
          <img src={images.chef} alt="chef_image" className="chef_img" />
        </div> */}
        <div className="app__chef-description">
          <h1 className="headtext__cormorant">{t('chef.beliefTitle')}</h1>
          <img src={images.mano} alt="about_mano" className="mano__img" />

          <div className="app__chef-content">
            {/* <img src={images.quote} alt="quote_image" /> */}
            <div className="app__chef-content_quote">
              <p className="p__opensans">{t('chef.quote')}</p>
            </div>
          </div>

          <div className="app__chef-sign">
            <img src={images.sign} alt="sign_image" />
            <p className="abeezee-regular">{t('chef.role')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
