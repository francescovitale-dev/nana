import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => {
  const { t } = useTranslation();

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8 } 
    }
  };

  return (
    <div className="app__bg app__wrapper section__padding">
      <motion.div 
        className="app__chef-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={contentVariants}
      >
        <div className="app__chef-description">
          <h1 className="headtext__cormorant">{t('chef.beliefTitle')}</h1>
          <motion.img 
            src={images.mano} 
            alt="about_mano" 
            className="mano__img"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />

          <div className="app__chef-content">
            <div className="app__chef-content_quote">
              <p className="p__opensans">{t('chef.quote')}</p>
            </div>
          </div>

          <div className="app__chef-sign">
            <motion.img 
              src={images.sign} 
              alt="Salvo Maggiore signature" 
              className="signature-img"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 4 }}
              viewport={{ once: true }}
            />
            <p className="abeezee-regular">{t('chef.role')}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Chef;