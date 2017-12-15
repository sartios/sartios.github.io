import React from 'react';
import { Grid } from 'semantic-ui-react';

import Navbar from './components/navbar/navbar';
import ContactDetails from './components/contactDetails/contactDetails';
import Overview from './components/overview/overview';
import Skills from './components/skills/skills';

import './homeScreen.post.css';

const HomeScreen = () => (
  <Grid celled>
    <Grid.Row>
      <Grid.Column width={13}>
        <Navbar />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row className="sp-home-main-row">
      <Grid.Column width={3}>
        <ContactDetails />
      </Grid.Column>
      <Grid.Column width={10}>
    Overview
      </Grid.Column>
      <Grid.Column width={3}>
    Skills
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default HomeScreen;
