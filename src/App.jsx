import React from 'react';

import './i18n.js';
import { AboutUs, Chef, FindUs, Footer, Header, Menu } from './container';
import './App.css';

const App = () => (
  <div>
     <Header />
     <AboutUs />
     <Chef />
     <Menu />
     <FindUs />
     <Footer /> 
    {/*<Intro />
    <Gallery /> 
     */}
  </div>
);

export default App;
