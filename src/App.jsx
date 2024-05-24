import React from 'react';

import './i18n.js';
import { AboutUs, Chef, FindUs, Footer, Header, Intro, Menu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
     <Header />
     <AboutUs />
     <Chef />
     <Menu />
    {/*<Intro />
     <Laurels />
    <Gallery /> 
    <FindUs />
    <Footer />  */}
  </div>
);

export default App;
