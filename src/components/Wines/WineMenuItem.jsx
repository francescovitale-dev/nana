import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './WineMenuItem.css';

const LazyImage = lazy(() => import('../LazyImage'));

const WineMenuItem = () => {
  const { t } = useTranslation();

  const wineImages = [
    images.vino1, images.vino2, images.vino3, images.vino4, images.vino5,
    images.vino6, images.vino7, images.vino8, images.vino9, images.vino10,
    images.vino11
  ];

  return (
    <motion.div 
      className="wine-menu-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>{t('menuItem.title-wine')}</h1>
      <div className="wine-menu-images">
        {wineImages.map((image, index) => (
          <motion.div 
            key={index}
            className="wine-menu-item"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Suspense fallback={<div className="image-placeholder">Loading...</div>}>
              <LazyImage src={image} alt={`Wine Menu ${index + 1}`} className="wine-menu-image" />
            </Suspense>
          </motion.div>
        ))}
      </div>
      <Link to="/" className="app__menu-wine-button">
        {t("impressum.homeLink")}
      </Link>
    </motion.div>
  );
};

export default WineMenuItem;

