import React from 'react';
import { useTranslation } from 'react-i18next';
import { images } from '../../constants';
import './MenuItem.css';  // Importa lo stile CSS per il layout e la responsività

const MenuItem = () => {
  const { t } = useTranslation();

  return (
    <div className="menu-container">
      <h1>{t('menuItem.title')}</h1>
      <p className='menu-description'>{t('menuItem.description-carta')}</p>
      <p className="menu-info">{t('menuItem.allaCartaAvailability')}</p>

      <div className="menu-images">
        <div className="menu-item">
          <img src={images.allaCarta} alt="Menu alla Carta" className="menu-image" />
        </div>
        <div className="menu-item">
          <p className='menu-description'>{t('menuItem.description-degustazione')}</p>
          <p className="menu-info">{t('menuItem.degustazioneAvailability')}</p>
          <img src={images.degustazione} alt="Menu Degustazione" className="menu-image" />
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
