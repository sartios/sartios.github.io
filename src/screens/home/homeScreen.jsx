import React from 'react';
import { Grid } from 'semantic-ui-react';

import Navbar from './components/navbar/navbar';
import ContactDetails from './components/contactDetails/contactDetails';
// import Overview from './components/overview/overview';
// import Skills from './components/skills/skills';

import './homeScreen.post.css';

const HomeScreen = () => (
  <Grid celled>
    <Grid.Row>
      <Grid.Column computer={13} mobile={16} tablet={16}>
        <Navbar />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row className="sp-home-main-row">
      <Grid.Column computer={3} mobile={16} tablet={16}>
        <ContactDetails />
      </Grid.Column>
      <Grid.Column computer={10} mobile={16} tablet={16}>
    Overview
      </Grid.Column>
      <Grid.Column computer={3} mobile={16} tablet={16}>
    Skills
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default HomeScreen;
