import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => {
  const { t } = useTranslation();

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
      <motion.div 
        className="app__aboutus-content flex__center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div 
          className="app__aboutus-content_history"
          variants={contentVariants}
        >
          <h1 className="headtext__cormorant">{t("aboutUs.ourStory")}</h1>
          <motion.img 
            src={images.mano} 
            alt="about_mano" 
            className="mano__img"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          {[1, 2, 3, 4].map((num) => (
            <motion.p 
              key={num}
              className="abeezee-regular"
              dangerouslySetInnerHTML={{ __html: t(`aboutUs.description${num}`) }}
              variants={contentVariants}
            />
          ))}
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="line__green"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />
    </div>
  );
};

export default AboutUs;