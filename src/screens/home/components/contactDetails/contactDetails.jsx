import React from 'react';

import Image from 'components/atoms/image';
import Text from 'components/atoms/text';
import IconLink from 'components/molecules/iconLink';
import ContactButton from './contactButton/contactButton';
import ContactInfo from './contactInfo';

import './contactDetails.post.css';

const ContactDetails = () => (
  <div className="sa-portfolio-contact-details-container">
    <div className="sa-portfolio-general-details">
      <Image circular />
      <Text value="Sartios" size="large" />
      <Text value="Software Developer" size="large" />
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
    <ContactInfo />
  </div>
);

export default ContactDetails;
