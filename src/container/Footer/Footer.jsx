import React from "react";
import { FaInstagram, FaTiktok, FaTripadvisor } from "react-icons/fa";
import { SlSocialGoogle } from "react-icons/sl";
import { useTranslation } from "react-i18next";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="app__footer app__bg section__padding" id="login">
      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <p
            className="abeezee-regular"
            style={{ lineHeight: "20px", marginBottom: "1rem" }}
          >
            {t("footer.adress")} <br />
            {t("footer.street")} <br />
            {t("footer.city")} <br />
            {t("footer.email")} <br />
          </p>

          <p className="abeezee-regular" style={{ lineHeight: "20px" }}>
            {t("footer.openingHoursTitle")} <br />
            {t("footer.openingHoursMo")} <br />
            {t("footer.openingHours")} <br />
            {t("footer.openingHoursSat")} <br />
            {t("footer.openingHoursSun")} <br />
          </p>
        </div>

        <div className="app__footer-links_logo">
          <img src={images.nana} alt="footer_logo" />
          <p className="p__opensans" style={{ textTransform: "none" }}>
            {t("footer.quote")}
          </p>
          <img src={images.mano} alt="about_mano" className="mano__img" />
          <div className="app__footer-links_icons">
            <a
              href="https://www.tripadvisor.de/Restaurant_Review-g187337-d28001972-Reviews-Nana_Convivial_Italian_Kitchen-Frankfurt_Hesse.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTripadvisor />
            </a>
            <a
              href="https://www.instagram.com/nana.convivial?igsh=MWQwZmp3ZGpjeWpwMQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@nana.convivial?_t=8pHtGwe8veD&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </a>
            <a
              href="https://maps.app.goo.gl/n9BrCcorpb9VgEqM9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SlSocialGoogle className="google-logo" />
            </a>
          </div>
        </div>

        <div className="app__footer-links_contact">
          <nav className="abeezee-regular">
            <ul
              style={{
                listStyleType: "none",
                padding: 0,
                lineHeight: "25px",
                textDecoration: "underline",
              }}
            >
              <li>
                <a href="#home">&gt; {t("footer.home")}</a> <br />
              </li>
              <li>
                <a href="#about">&gt; {t("footer.aboutUs")}</a> <br />
              </li>
              <li>
                <a href="#menu">&gt; {t("footer.menu")}</a> <br />
              </li>
              <li>
                <a href="#contact">&gt; {t("footer.contact")}</a> <br />
              </li>
              <li>
                <Link to="/cookie-policy">&gt; {t("footer.privacy")}</Link>
              </li>
              <li>
                <Link to="/impressum">&gt; {t("footer.imprint")}</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="footer__copyright">
        <p className="p__opensans">{t("footer.rightsReserved")}</p>
        <p className="developer-credit">
        <a 
          href="https://vitalefrancesco.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="developer-credit"
        >
          {t("footer.developedBy")}
        </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
