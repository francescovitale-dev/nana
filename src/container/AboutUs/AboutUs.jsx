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
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">{t("aboutUs.description1")}</p>
          <p className="p__opensans">{t("aboutUs.description2")}</p>
          <p className="p__opensans">{t("aboutUs.description3")}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
