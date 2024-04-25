import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="app__footer section__padding" id="login">
      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">{t('footer.contactTitle')}</h1>
          <p className="p__opensans">{t('footer.phone')}</p>
          <p className="p__opensans">{t('footer.email')}</p>
        </div>

        <div className="app__footer-links_logo">
          <img src={images.nana} alt="footer_logo" />
          <p className="p__opensans">{t('footer.logoQuote')}</p>
          <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">{t('footer.workingHoursTitle')}</h1>
          <p className="p__opensans">{t('footer.monFriHours')}</p>
          <p className="p__opensans">08:00 am - 12:00 am</p>
          <p className="p__opensans">{t('footer.satSunHours')}</p>
          <p className="p__opensans">{t('footer.closed')}</p>
        </div>
      </div>

      <div className="footer__copyright">
        <p className="p__opensans">{t('footer.rightsReserved')}</p>
      </div>
    </div>
  );
};

export default Footer;
