import React from 'react';

import ContactDetails from './components/contactDetails/contactDetails';
import Overview from './components/overview/overview';
import Skills from './components/skills/skills';

import './homeScreen.post.css';

const HomeScreen = () => (
  <div
    className="sa-portfolio-home-screen"
  >
    <ContactDetails />
    <Overview />
    <Skills />
  </div>);

export default HomeScreen;
