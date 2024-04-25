import React from 'react';

import './i18n.js';
import { AboutUs, Chef, FindUs, Footer, Header, Intro, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    {/* <Laurels />
    <Gallery /> */}
    <FindUs />
    <Footer />
  </div>
);

export default App;
