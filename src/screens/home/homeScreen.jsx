import React from 'react';

import Navbar from './components/navbar/navbar';
import ContactDetails from './components/contactDetails/contactDetails';
import Overview from './components/overview/overview';
import Skills from './components/skills/skills';

import './homeScreen.post.css';

const HomeScreen = () => (
  <div
    className="sa-portfolio-home-screen"
  >
    <div className="sa-portfolio-home-screen-main">
      <Navbar />
      <ContactDetails />
      <Overview />
    </div>
    <div className="sa-portfolio-home-screen-side">
      <Skills />
    </div>
  </div>);

export default HomeScreen;
