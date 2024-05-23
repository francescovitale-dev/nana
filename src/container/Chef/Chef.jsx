import React from 'react';
import { useTranslation } from 'react-i18next';
// import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => {
  const { t } = useTranslation();

  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef_image" className="chef_img" />
      </div>
      <div className="app__wrapper_info">
        {/* <SubHeading title={t('chef.title')} /> */}
        <h1 className="headtext__cormorant">{t('chef.beliefTitle')}</h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote_image" />
            <p className="p__opensans">{t('chef.quote')}</p>
          </div>
          <p className="p__opensans">{t('chef.content')}</p>
        </div>

        <div className="app__chef-sign">
          <p>{t('chef.name')}</p>
          <p className="p__opensans">{t('chef.role')}</p>
          <img src={images.sign} alt="sign_image" />
        </div>
      </div>
    </div>
  );
};

export default Chef;
