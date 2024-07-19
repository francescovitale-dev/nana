import React from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';
import { Navbar } from '../../components'; 

const Header = () => {
  const  { t }  = useTranslation();

  return (
    <div className="background">
    <Navbar />
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <h1 className='app__header-h1'>{t('header.title')}</h1>
        <p className='p__opensans' style={{ margin: '2rem 0' }}>
          {t('header.description')}
        </p>
      </div>
    </div>
    </div>
  );
};

export default Header;
