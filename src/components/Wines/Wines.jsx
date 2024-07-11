import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { images } from '../../constants';

const MenuItem = () => {
  const { t } = useTranslation();

  return (
    <div className="menu-container">
      <h1>{t('menuItem.title-wine')}</h1>
      <div className="menu-images">
        <div className="menu-item">
          <img src={images.vino1} alt="Menu alla Carta" className="menu-image" />
          <img src={images.vino2} alt="Menu alla Carta" className="menu-image" />
          <img src={images.vino3} alt="Menu alla Carta" className="menu-image" />
          <img src={images.vino4} alt="Menu alla Carta" className="menu-image" />
          <img src={images.vino5} alt="Menu alla Carta" className="menu-image" />
          <img src={images.vino6} alt="Menu alla Carta" className="menu-image" />
          <img src={images.vino7} alt="Menu alla Carta" className="menu-image" />
          <img src={images.vino8} alt="Menu alla Carta" className="menu-image" />
          <img src={images.vino9} alt="Menu alla Carta" className="menu-image" />
          <img src={images.vino10} alt="Menu alla Carta" className="menu-image" />
          <img src={images.vino11} alt="Menu alla Carta" className="menu-image" />
        </div>
      </div>
      <Link to="/" className="app__menu-button">
        {t("impressum.homeLink")}
      </Link>
    </div>
  );
};

export default MenuItem;
