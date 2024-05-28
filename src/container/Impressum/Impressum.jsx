import React from "react";
import { useTranslation } from "react-i18next";
import "./Impressum.css";
import images from "../../constants/images";

const Impressum = () => {
  const { t } = useTranslation();

  return (
    <div className="app__bg app__wrapper__impressum section__padding">
      <div className="app__wrapper_info">
        <img className="logo" src={images.logo} alt="app logo"/>
        <h1 className="impressum-title">{t("impressum.title")}</h1>
        <ul className="abeezee-regular impressum-font">
          <li>{t("impressum.responsibility")}</li>
          <li>{t("impressum.name")}</li>
          <li>{t("impressum.ceo")}</li>
          <li>{t("impressum.registerEntry")}</li>
          <li>{t("impressum.court")}</li>
          <li>{t("impressum.registerNumber")}</li>
          <li>{t("impressum.street")}</li>
          <li>{t("impressum.city")}</li>
          <li>{t("impressum.email")}</li>
          <li>{t("impressum.phone")}</li>
        </ul>
        <a href="/">
          <button className="app__impressum-home-link">
            {t("impressum.homeLink")}
          </button>
        </a>
      </div>
    </div>
  );
};

export default Impressum;
