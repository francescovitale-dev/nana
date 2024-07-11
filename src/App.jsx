import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import CookieConsent, { Cookies } from "react-cookie-consent";

import './i18n.js';
import { AboutUs, Chef, FindUs, Footer, Header, Menu, Impressum, NotFound, CookiePolicy } from './container';
import { MenuItem, Wines } from './components/index.js';
import './App.css';

const App = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  useEffect(() => {
    // Questo effetto si attiva ogni volta che la lingua cambia
  }, [i18n.language]);

  const getMetaTags = () => {
    const metaTags = {
      de: {
        description: "Entdecken Sie das Naná, wo traditionelle italienische Küche auf Innovation trifft. Genießen Sie authentische Gerichte aus frischen und hochwertigen Zutaten in einem gemütlichen Ambiente in Frankfurt.",
        keywords: "Restaurant, Naná, italienische Küche, traditionelle Gerichte, Innovation, Frankfurt, frisches Essen, gemütliches Restaurant",
        title: "Naná - Traditionelle und innovative Küche in Frankfurt",
        ogDescription: "Entdecken Sie das Ristorante Naná : eine Reise durch die authentischen Aromen der italienischen Küche, neu interpretiert. Jetzt reservieren!"
      },
      it: {
        description: "Scopri il Ristorante Naná, dove la cucina tradizionale italiana incontra l'innovazione. Goditi piatti autentici preparati con ingredienti freschi e di qualità in un ambiente accogliente a Francoforte.",
        keywords: "ristorante, Naná, cucina italiana, piatti tradizionali, innovazione, Francoforte, cibo fresco, ristorante accogliente",
        title: "Naná - Cucina Tradizionale e Innovativa a Francoforte",
        ogDescription: "Vieni a scoprire il Ristorante Naná : un viaggio tra i sapori autentici della cucina italiana, rivisitata in chiave moderna. Prenota ora!"
      },
      en: {
        description: "Discover Naná, where traditional Italian cuisine meets innovation. Enjoy authentic dishes prepared with fresh, high-quality ingredients in a cozy setting in Frankfurt.",
        keywords: "restaurant, Naná , Italian cuisine, traditional dishes, innovation, Frankfurt, fresh food, cozy restaurant",
        title: "Naná - Traditional and Innovative Cuisine in Frankfurt",
        ogDescription: "Discover Ristorante Naná : a journey through the authentic flavors of Italian cuisine, reinterpreted in a modern way. Book now!"
      }
    };

    return metaTags[i18n.language] || metaTags.de;
  };

  const metaTags = getMetaTags();

  const handleAccept = () => {
    Cookies.set("CookieConsent", "true", { expires: 150 });
    window.location.reload();
  };

  const handleDecline = () => {
    Cookies.set("CookieConsent", "false", { expires: 150 });
    // Implementa la logica per disabilitare le funzionalità basate sui cookie
    window.location.reload();
  };

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <meta property="og:title" content={metaTags.title} />
        <meta property="og:description" content={metaTags.ogDescription} />
        <meta property="og:url" content="https://xn--nan-ebb.de/" />
        <meta property="og:image" content={`https://xn--nan-ebb.de/images/og-image-${i18n.language}.jpg`} />
      </Helmet>

      <Router>
        <div>
          <Routes>
            <Route path="/" element={
              <>
                <Header />
                <AboutUs />
                <Chef />
                <Menu />
                <FindUs />
                <Footer />
              </>
            } />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/menu" element={<MenuItem />} />
            <Route path="/wines" element={<Wines />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>
        </div>

        <CookieConsent
        location="bottom"
        buttonText={t("cookiePolicy.accept")}
        declineButtonText={t("cookiePolicy.decline")}
        cookieName="CookiePolicy"
        style={{ background: "black" }}
        buttonStyle={{ backgroundColor:"#4f643e", color: "white", fontSize: "13px", marginLeft: "0", marginRight: "2rem" }}
        declineButtonStyle={{ backgroundColor: "#B20000", color: "white", fontSize: "13px" }}
        enableDeclineButton
        expires={150}
        onAccept={handleAccept}
        onDecline={handleDecline}
      >
        {t('cookiePolicy.notice')}
        <Link to="/cookie-policy" style={{ textDecoration: "underline", marginLeft: "0.3rem"}}>{t("cookiePolicy.readMore")}</Link>
      </CookieConsent>
      </Router>
    </>
  );
};

export default App;
