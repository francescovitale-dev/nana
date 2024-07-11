import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./CookiePolicy.css";
import images from "../../constants/images";

const CookiePolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="app__bg app__wrapper__impressum section__padding">
      <div className="app__wrapper_info abeezee-regular">
        <img className="logo" src={images.logo} alt="app logo"/>
        <h1 className="impressum-title">{t("cookiePolicy.title")}</h1>
        <p className="abeezee-regular impressum-font">{t("cookiePolicy.lastUpdated")}</p>

        <div className="cookie-policy-section">
          <h2>{t("cookiePolicy.introductionTitle")}</h2>
          <p>{t("cookiePolicy.introductionContent")}</p>
        </div>

        <div className="cookie-policy-section">
          <h2>{t("cookiePolicy.whatAreCookiesTitle")}</h2>
          <p>{t("cookiePolicy.whatAreCookiesContent")}</p>
        </div>

        <div className="cookie-policy-section">
          <h2>{t("cookiePolicy.typesOfCookiesTitle")}</h2>
          <div className="cookie-policy-subsection">
            <h3>{t("cookiePolicy.typesOfCookiesGoogleAnalyticsTitle")}</h3>
            <p>{t("cookiePolicy.typesOfCookiesGoogleAnalyticsContent")}</p>
          </div>
          <div className="cookie-policy-subsection">
            <h3>{t("cookiePolicy.typesOfCookiesGoogleMapsTitle")}</h3>
            <p>{t("cookiePolicy.typesOfCookiesGoogleMapsContent")}</p>
          </div>
          <div className="cookie-policy-subsection">
            <h3>{t("cookiePolicy.typesOfCookiesGoogleFontsTitle")}</h3>
            <p>{t("cookiePolicy.typesOfCookiesGoogleFontsContent")}</p>
          </div>
        </div>

        <div className="cookie-policy-section">
          <h2>{t("cookiePolicy.howToControlCookiesTitle")}</h2>
          <p>{t("cookiePolicy.howToControlCookiesContent")}</p>
        </div>

        <div className="cookie-policy-section">
          <h2>{t("cookiePolicy.updatesToPolicyTitle")}</h2>
          <p>{t("cookiePolicy.updatesToPolicyContent")}</p>
        </div>

        <div className="cookie-policy-section">
          <h2>{t("cookiePolicy.contactTitle")}</h2>
          <p>{t("cookiePolicy.contactContent")}</p>
        </div>

        <Link to="/" className="app__impressum-home-link">
          {t("cookiePolicy.homeLink")}
        </Link>
      </div>
    </div>
  );
};

export default CookiePolicy;
