import React from "react";
import { useTranslation } from "react-i18next";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { images } from '../../constants';
import "./FindUs.css"; // File CSS separato per gli stili

const containerStyle = {
  width: "90%",
  height: "28rem",
  borderRadius: "15px"
};

const center = {
  lat: 50.123230, // Latitudine del ristorante
  lng: 8.665040, // Longitudine del ristorante
};


const FindUs = () => {
  const { t } = useTranslation();

  return (
    <>
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_map">
        <LoadScript
          googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
          loadingElement={<div className="abeezee-regular">Loading...</div>}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={18}
          >
            <Marker 
              position={center}
            />
          </GoogleMap>
        </LoadScript>
      </div>

      <div className="vertical-line"></div> 

      <div className="app__wrapper_info_findus">
        <h1 className="" style={{ textTransform: "uppercase", fontSize: "3rem", color: "white", fontFamily: "initial", fontWeight: "lighter"}}>
          {t("contact.title")}
        </h1>
        <img src={images.mano} alt="about_mano" className="mano__img" />
        <h2 className="app__header-h1" style={{ marginTop: "2rem"}}>
          {t("contact.adress")}
        </h2>
        <div className="app__wrapper-content">
          <p className="abeezee-regular" style={{ marginTop: "1rem", marginBottom: "1rem", textTransform: "uppercase", lineHeight: "22px"}}>
            {t("contact.street")} <br />
            {t("contact.city")}
          </p>
          <p className="abeezee-regular" style={{ textTransform: "uppercase", lineHeight: "22px" }}>
            {t("contact.email")} <br />
            {t("contact.phone")}
          </p>
          <p className="app__header-h1" style={{ marginTop: "2rem", marginBottom: "1rem" }}>
            {t("contact.openingHoursTitle")}
          </p>
          <p className="abeezee-regular" style={{ textTransform: "uppercase", lineHeight: "22px" }}>
            {t("contact.openingHoursMo")} <br />
            {t("contact.openingHours")} <br />
            {t("contact.openingHoursSat")} <br />
            {t("contact.openingHoursSun")} <br />
          </p>
        </div>
      </div>
    </div>
    <hr className="horizontal-line" /> 
    </>
  );
};

export default FindUs;
