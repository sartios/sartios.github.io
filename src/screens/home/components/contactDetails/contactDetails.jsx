import React from 'react';

import Icon from 'components/elements/icon';
import Image from 'components/elements/image';
import ContactButton from './contactButton/contactButton';

import './contactDetails.post.css';

const ContactDetails = () => (
  <div className="sa-portfolio-contact-details-container">
    <div className="sa-portfolio-general-details">
      <Image circular />
      <div>Savramis Sartios</div>
      <div>Software Developer</div>
    </div>
    <div className="sa-portfolio-buttons-container">
      <ContactButton />
    </div>
    <div className="sa-portfolio-main-social">
      <Icon name="github" />
      <div className="sa-portfolio-github-link">
        <a href="http://www.github.com/sartios" target="_blank">github.com/sartios</a>
      </div>
    </div>
    <ul className="sa-portfolio-secondary-social">
      <li><Icon name="envelope-o" />savramis.sartios@gmail.com</li>
      <li><Icon name="linkedin" />linkedin.com/sartios</li>
    </ul>
  </div>
);

export default ContactDetails;
