import React from 'react';

import './i18n.js';
import { AboutUs, Chef, FindUs, Footer, Header, Intro, Menu } from './container';
import './App.css';

const App = () => (
  <div>
     <Header />
     <AboutUs />
     <Chef />
     <Menu />
    {/*<Intro />
    <FindUs />
     <Laurels />
    <Gallery /> 
    <Footer />  */}
  </div>
);

export default App;
