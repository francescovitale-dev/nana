import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './i18n.js';
import { AboutUs, Chef, FindUs, Footer, Header, Menu, Impressum } from './container';
import './App.css';

const App = () => (
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
      </Routes>
    </div>
  </Router>
);

export default App;
