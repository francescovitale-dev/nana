import React from 'react';
import { useTranslation } from 'react-i18next';
import images from "../../constants/images";
import './NotFound.css';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="app__bg app__wrapper__notfound section__padding">
      <div className="app__wrapper_info">
        <img className="logo" src={images.logo} alt="app logo"/>
        <h1 className="notfound-title">{t("notfound.title")}</h1>
        <ul className="abeezee-regular notfound-font">
          <p>{t("notfound.message")}</p>
        </ul>
        <a href="/">
          <button className="app__notfound-home-link">
            {t("notfound.homeLink")}
          </button>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
