import React from 'react';

import WorkExperienceItem from './workExperienceItem/workExperienceItem';

import './workExperience.post.css';

const WorkExperience = () => (
  <div className="sa-portfolio-work-experience">
    <h3>Work Experience</h3>
    <ul className="sa-portfolio-work-items">
      <WorkExperienceItem />
      <WorkExperienceItem />
      <WorkExperienceItem />
    </ul>
  </div>
);

export default WorkExperience;
