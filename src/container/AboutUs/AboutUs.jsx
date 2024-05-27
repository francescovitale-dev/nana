import React from "react";
import { useTranslation } from "react-i18next";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">{t("aboutUs.ourStory")}</h1>
          <img src={images.mano} alt="about_mano" className="mano__img" />
          <p className="abeezee-regular" dangerouslySetInnerHTML={{ __html: t("aboutUs.description1") }}></p>
          <p className="abeezee-regular">{t("aboutUs.description2")}</p>
          <p className="abeezee-regular">{t("aboutUs.description3")}</p>
          <p className="abeezee-regular">{t("aboutUs.description4")}</p>
        </div>
      </div>
      
      <div className="line__green"></div> 
    </div>
  );
};

export default AboutUs;
