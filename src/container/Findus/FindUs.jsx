import React from 'react';
import { useTranslation } from 'react-i18next';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => {
  const { t } = useTranslation();

  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title={t('contact.title')} />
        <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>{t('contact.findUsTitle')}</h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">{t('contact.address')}</p>
          <p className="p__opensans" style={{ textTransform: 'none' }}>{t('contact.email')}</p>
          <p className="p__opensans">{t('contact.phone')}</p>
          <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>{t('contact.openingHoursTitle')}</p>
          <p className="p__opensans">{t('contact.openingHoursMonFri')}</p>
          <p className="p__opensans">{t('contact.openingHoursSatSun')}</p>
        </div>
        {/* <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>{t('contact.visitButton')}</button> */}
      </div>

      <div className="app__wrapper_img">
        <img src={images.findus} alt="finus_img" />
      </div>
    </div>
  );
};

export default FindUs;
