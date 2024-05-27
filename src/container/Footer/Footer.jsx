import React from 'react';
import { FaTiktok, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="app__footer app__bg section__padding" id="login">
      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <p className="abeezee-regular" style={{ lineHeight: "20px", marginBottom: "1rem"}}>
            {t('footer.adress')} <br />
            {t('footer.street')} <br />
            {t('footer.city')} <br />
            {t('footer.email')} <br />
          </p>

          <p className="abeezee-regular" style={{ lineHeight: "20px"}}>
            {t('footer.openingHoursTitle')} <br />
            {t('footer.openingHoursMonFri')} <br />
            {t('footer.openingHoursSatSun')}
          </p>
        </div>

        <div className="app__footer-links_logo">
          <img src={images.nana} alt="footer_logo" />
          <p className="p__opensans" style={{ textTransform: 'none'}}>{t('footer.quote')}</p>
          <img src={images.mano} alt="about_mano" className="mano__img" />
          <div className="app__footer-links_icons">
            <FaTiktok />
            <FaInstagram />
          </div>
        </div>

        <div className="app__footer-links_contact">
          <p className="abeezee-regular" style={{ lineHeight: "25px", textDecoration: "underline"}}>
            <a href="#home">&gt; {t('footer.home')}</a> <br />
            <a href="#about">&gt; {t('footer.aboutUs')}</a> <br />
            <a href="#menu">&gt; {t('footer.menu')}</a> <br />
            <a href="#contact">&gt; {t('footer.contact')}</a> <br />
            <a href="#home">&gt; {t('footer.imprint')}</a>
          </p>
        </div>
      </div>

      <div className="footer__copyright">
        <p className="p__opensans">{t('footer.rightsReserved')}</p>
      </div>
    </div>
  );
};

export default Footer;
