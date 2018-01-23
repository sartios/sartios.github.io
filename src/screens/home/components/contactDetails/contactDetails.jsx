import React from 'react';
import styled from 'styled-components';

import Image from 'components/atoms/image';
import Text from 'components/atoms/text';
import Button from 'components/atoms/button';
import ContactInfo from './contactInfo';
import GithubInfo from './githubInfo';

const ContactDetails = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: white;
    padding: 60px 10px;
    margin-left: 20px;

    @media (max-width: 480px) {
      margin-left: 0;
    }
  `;

  const Item = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  return (
    <Container>
      <Item>
        <Image circular />
        <Text value="Sartios" size="large" />
        <Text value="Software Developer" size="large" />
      </Item>
      <Item>
        <Button icon="comment" content="Contact Me" />
        <GithubInfo className="sp-portfolio-contact-details-github" />
      </Item>
      <ContactInfo />
    </Container>
  );
};

export default ContactDetails;
