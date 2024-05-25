import React from "react";
import { useTranslation } from "react-i18next";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
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

      <div className="app__wrapper_info">
        <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
          {t("contact.findUsTitle")}
        </h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">{t("contact.address")}</p>
          <p className="p__opensans" style={{ textTransform: "none" }}>
            {t("contact.email")}
          </p>
          <p className="p__opensans">{t("contact.phone")}</p>
          <p
            className="p__cormorant"
            style={{ color: "#DCCA87", margin: "2rem 0" }}
          >
            {t("contact.openingHoursTitle")}
          </p>
          <p className="p__opensans">{t("contact.openingHoursMonFri")}</p>
          <p className="p__opensans">{t("contact.openingHoursSatSun")}</p>
        </div>
      </div>

    </div>
  );
};

export default FindUs;
