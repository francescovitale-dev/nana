import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Navbar } from '../../components';
import './Header.css';

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="background">
      <Navbar />
      <motion.div 
        className='app__header app__wrapper section__padding' 
        id='home'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className='app__wrapper_info'>
          <motion.h1 
            className='app__header-h1'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('header.title')}
          </motion.h1>
          <motion.p 
            className='p__opensans'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('header.description')}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;