import React from 'react';

import Image from 'components/atoms/image';
import Text from 'components/atoms/text';
import ContactButton from './contactButton/contactButton';
import ContactInfo from './contactInfo';
import GithubInfo from './githubInfo';

import './contactDetails.post.css';

const ContactDetails = () => (
  <div className="sa-portfolio-contact-details-container">
    <Image circular />
    <Text value="Sartios" size="large" />
    <Text value="Software Developer" size="large" />
    <ContactButton />
    <GithubInfo />
    <ContactInfo />
  </div>
);

export default ContactDetails;
