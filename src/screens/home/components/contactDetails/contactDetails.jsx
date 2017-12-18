import React from 'react';

import Icon from 'components/atoms/icon';
import Image from 'components/atoms/image';
import TextIcon from 'components/molecules/textIcon';
import IconLink from 'components/molecules/iconLink';
import List from 'components/molecules/list';
import ContactButton from './contactButton/contactButton';

import './contactDetails.post.css';

const ContactDetails = () => {
  const email = (<TextIcon icon="envelope" text="savramis.sartios@gmail.com" />);
  const linkedin = (<TextIcon icon="linkedin" text="linkedin.com/sartios" />);

  const items = [{ component: email }, { component: linkedin }];


  return (
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
      <List items={items} />
    </div>
  );
};

export default ContactDetails;
