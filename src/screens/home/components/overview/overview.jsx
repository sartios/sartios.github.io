import React from 'react';
import { Grid } from 'semantic-ui-react';

import IconHeader from 'components/molecules/iconHeader';
// import DemoApps from './demoApps/demoApps';
// import Education from './education/education';
// import WorkExperience from './workExperience/workExperience';

import './overview.post.css';

const Overview = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column>
        <IconHeader
          content="Demo Apps"
          icon="game"
          headerSize="h4"
        />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column computer={8} tablet={8} mobile={16}>
        <IconHeader
          content="Working Experience"
          icon="cloud"
          headerSize="h4"
        />
      </Grid.Column>
      <Grid.Column computer={8} tablet={8} mobile={16}>
        <IconHeader
          content="Education"
          icon="book"
          headerSize="h4"
        />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Overview;
