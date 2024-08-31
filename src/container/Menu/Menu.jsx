import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { images } from '../../constants';
import './Menu.css';

const Menu = () => {
  const { t } = useTranslation();

  return (
    <div className="app__bg-menu" id="menu">
      <div className="menu-section">
        <h1 className='p__cormorant-menu'>{t('menu.menuTitle')}</h1>
        <img src={images.mano} alt="about_mano" className="mano__img" />
        <h2 className='p__cormorant-menu-2'>{t('menu.menuDescription')}</h2>
        <div className="menu-card">
          <Link to="/menu" className='menu-button'>
            {t('menu.lacarta')}
          </Link>
          <Link to="/wines" className='menu-button'>
            {t('menu.vini')}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;