import React from 'react';

import DemoApps from './demoApps/demoApps';
import Education from './education/education';
import WorkExperience from './workExperience/workExperience';

import './overview.post.css';

const Overview = () => (
  <div className="sa-portfolio-overview">
    <DemoApps />
    <Education />
    <WorkExperience />
  </div>
);

export default Overview;
