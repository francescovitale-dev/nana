import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import './i18n.js';
import { AboutUs, Chef, FindUs, Footer, Header, Menu, Impressum, NotFound } from './container';
import { MenuItem } from './components/index.js';
import './App.css';

const App = () => {
  const { i18n } = useTranslation();

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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
