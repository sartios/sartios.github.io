import React from 'react';

import ContactDetails from './components/contactDetails/contactDetails';
import Overview from './components/overview/overview';

const HomeScreen = () => (
  <div className="sa-portfolio-home-screen">
    <ContactDetails />
    <Overview />
  </div>
);

export default HomeScreen;
