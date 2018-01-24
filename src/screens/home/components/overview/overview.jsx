import React from 'react';
import { Grid } from 'semantic-ui-react';

import DemoApps from './demoApps/demoApps';
import Education from './education/education';
import WorkExperience from './workExperience/workExperience';

const Overview = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column>
        <DemoApps />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column computer={8} tablet={8} mobile={16}>
        <WorkExperience />
      </Grid.Column>
      <Grid.Column computer={8} tablet={8} mobile={16}>
        <Education />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Overview;
