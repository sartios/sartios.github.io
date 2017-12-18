import React from 'react';

import Icon from 'components/atoms/icon';
import Image from 'components/atoms/image';
import TextIcon from 'components/molecules/textIcon';
import IconLink from 'components/molecules/iconLink';
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
      <IconLink
        icon="github"
        link="http://www.github.com/sartios"
        text="github.com/sartios"
      />
    </div>
    <ul className="sa-portfolio-secondary-social">
      <li>
        <TextIcon icon="envelope" text="savramis.sartios@gmail.com" />
      </li>
      <li>
        <TextIcon icon="linkedin" text="linkedin.com/sartios" />
      </li>
    </ul>
  </div>
);

export default ContactDetails;
