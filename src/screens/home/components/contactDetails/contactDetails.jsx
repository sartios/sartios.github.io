import React from 'react';

import Image from 'components/atoms/image';
import Text from 'components/atoms/text';
import Button from 'components/atoms/button';
import ContactInfo from './contactInfo';
import GithubInfo from './githubInfo';

import './contactDetails.post.css';

const ContactDetails = () => (
  <div className="sa-portfolio-contact-details-container">
    <div className="sa-portfolio-contact-details-container-item-1">
      <Image circular />
      <Text value="Sartios" size="large" />
      <Text value="Software Developer" size="large" />
    </div>
    <div className="sa-portfolio-contact-details-container-item-2">
      <Button icon="comment" content="Contact Me" />
      <GithubInfo className="sp-portfolio-contact-details-github" />
    </div>
    <ContactInfo />
  </div>
);

export default ContactDetails;
