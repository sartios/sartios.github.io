import React from 'react';

import ContactButton from './contactButton/contactButton';

import './contactDetails.post.css';

const ContactDetails = () => (
  <div className="sa-portfolio-contact-details-container">
    <div className="sa-portfolio-general-details">
      <div className="sa-portfolio-photo">
        Photo
      </div>
      <div>Savramis Sartios</div>
      <div>Software Developer</div>
    </div>
    <div className="sa-portfolio-buttons-container">
      <ContactButton />
    </div>
    <div className="sa-portfolio-main-social">
      <div>github icon</div>
      <div>
        <div>github.com</div>
        <div>sartios</div>
      </div>
    </div>
    <ul>
      <li>savramis.sartios@gmail.com</li>
      <li>linkedin.com/sartios</li>
    </ul>
  </div>
);

export default ContactDetails;
