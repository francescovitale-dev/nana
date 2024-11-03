import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './MenuItem.css';

const LazyImage = lazy(() => import('../LazyImage'));

const MenuItem = () => {
  const { t } = useTranslation();

  return (
    <motion.div 
      className="menu-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>{t('menuItem.title')}</h1>
      <p className='menu-description'>{t('menuItem.description-carta')}</p>
      <p className="menu-info">{t('menuItem.allaCartaAvailability')}</p>

      <div className="menu-images">
        <motion.div 
          className="menu-item"
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <LazyImage src={images.allaCarta} alt="Menu alla Carta" className="menu-image" />
            <LazyImage src={images.allaCarta2} alt="Menu alla Carta" className="menu-image" />
          </Suspense>
        </motion.div>
        <motion.div 
          className="menu-item"
          transition={{ type: "spring", stiffness: 300 }}
        >
          <p className='menu-description'>{t('menuItem.description-degustazione')}</p>
          <p className="menu-info">{t('menuItem.degustazioneAvailability')}</p>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyImage src={images.degustazione} alt="Menu Degustazione" className="menu-image" />
            <LazyImage src={images.degustazione2} alt="Menu Degustazione" className="menu-image" />
          </Suspense>
        </motion.div>
      </div>
      <Link to="/#home" className="app__menu-button">
        {t("impressum.homeLink")}
      </Link>
    </motion.div>
  );
};

export default MenuItem;