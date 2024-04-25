// Navbar.js
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { useTranslation } from "react-i18next";

import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { t, i18n } = useTranslation();

  const handleLinkClick = () => {
    setToggleMenu(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logonobgold} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home" onClick={handleLinkClick}>
            {t("navbar.home")}
          </a>
        </li>
        <li className="p__opensans">
          <a href="#about" onClick={handleLinkClick}>
            {t("navbar.about")}
          </a>
        </li>
        <li className="p__opensans">
          <a href="#menu" onClick={handleLinkClick}>
            {t("navbar.menu")}
          </a>
        </li>
        {/* <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li> */}
        <li className="p__opensans">
          <a href="#contact" onClick={handleLinkClick}>
            {t("navbar.contact")}
          </a>
        </li>
      </ul>
      <div className="app__navbar-language">
        <button className="language__button" onClick={() => changeLanguage("de")}>
          DE
        </button>
        <div/>
        <button className="language__button" onClick={() => changeLanguage("en")}>
          EN
        </button>
        <div/>
        <button className="language__button" onClick={() => changeLanguage("it")}>
          IT
        </button>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              className="overlay__close"
              fontSize={27}
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a href="#home" onClick={handleLinkClick}>
                  {t("navbar.home")}
                </a>
              </li>
              <li className="p__opensans">
                <a href="#about" onClick={handleLinkClick}>
                  {t("navbar.about")}
                </a>
              </li>
              <li className="p__opensans">
                <a href="#menu" onClick={handleLinkClick}>
                  {t("navbar.menu")}
                </a>
              </li>
              {/* <li className="p__opensans">
                <a href="#awards">Awards</a>
              </li> */}
              <li className="p__opensans">
                <a href="#contact" onClick={handleLinkClick}>
                  {t("navbar.contact")}
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
