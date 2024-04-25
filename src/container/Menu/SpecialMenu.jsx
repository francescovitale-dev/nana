import React from "react";
import { useTranslation } from "react-i18next";
import { SubHeading, MenuItem } from "../../components";
import { images } from "../../constants";

// Importa il file JSON della lingua corretta
import  deMenu  from "../../locales/de.json";
import  enMenu  from "../../locales/en.json";
import  itMenu from "../../locales/it.json";

import "./SpecialMenu.css";

const SpecialMenu = () => {
  const { t, i18n } = useTranslation();

  // Determina quale file JSON della lingua utilizzare in base alla lingua attuale
  let menuData;


if (i18n.language === 'de') {
  menuData = deMenu;
} else if (i18n.language === 'en') {
  menuData = enMenu;
} else if (i18n.language === 'it') {
  menuData = itMenu;
} else {
  menuData = enMenu; // Lingua predefinita
}

console.log(menuData.menu);


  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title={t("menu.specialMenu.title")} />
        <h1 className="headtext__cormorant">{t("menu.specialMenu.specials")}</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_food  flex__center">
          <p className="app__specialMenu-menu_heading">{t("menu.specialMenu.foodHeading")}</p>
          <div className="app__specialMenu_menu_items">
            {menuData.menu.food.map((foodItem, index) => (
              <MenuItem
                key={foodItem.title + index}
                title={t(`${foodItem.title}`)}
                price={foodItem.price}
                tags={t(`${foodItem.description}`)}
              />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu__img" />
        </div>

        <div className="app__specialMenu-menu_wine  flex__center">
          <p className="app__specialMenu-menu_heading">{t("menu.specialMenu.wineHeading")}</p>
          <div className="app__specialMenu_menu_items">
            {menuData.menu.wines.map((wine, index) => (
              <MenuItem
                key={wine.title + index}
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
