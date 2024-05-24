import React from 'react';
import { useTranslation } from 'react-i18next';
import { images } from '../../constants';
import './Menu.css';

const Menu = () => {
  const { t } = useTranslation();

  return (
    <div className="app__bg-menu app__wrapper section__padding" id="menu">
      <div className="menu-section">
        <h1 className='p__cormorant-menu'>{t('menu.menuTitle')}</h1>
        <img src={images.mano} alt="about_mano" className="mano__img-menu" />
        <h2 className='p__cormorant-menu-2'>{t('menu.menuDescription')}</h2>
        <div className="menu-card">
          <button className='menu-button' onClick={() => window.open('link-to-menu-document', '_blank')}>
          {t('menu.lacarta')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
