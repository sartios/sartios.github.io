import React from 'react';

import DemoApps from './demoApps/demoApps';
import Education from './education/education';
import WorkExperience from './workExperience/workExperience';

import './overview.post.css';

const Overview = () => (
  <div className="sa-portfolio-overview">
    <div className="sa-portfolio-overview-demos">
      <DemoApps />
    </div>
    <div className="sa-portfolio-overview-details">
      <WorkExperience />
      <Education />
    </div>
  </div>
);

export default Overview;
