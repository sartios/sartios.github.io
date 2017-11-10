import React from 'react';

import ContactDetails from './components/contactDetails/contactDetails';

const HomeScreen = () => (
  <div className="sa-portfolio-home-screen">
    <ContactDetails />
    <div className="sa-portfolio-home-screen-overview">
      Portfolio Overview
    </div>
  </div>
);

export default HomeScreen;
