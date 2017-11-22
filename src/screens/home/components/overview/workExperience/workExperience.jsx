import React from 'react';

import WorkExperienceItem from './workExperienceItem/workExperienceItem';

import './workExperience.post.css';

const WorkExperience = () => (
  <div className="sa-portfolio-work-experience">
    <span className="sa-portfolio-overview-title">Work Experience</span>
    <ul className="sa-portfolio-work-items">
      <WorkExperienceItem
        period="2016-Present"
        position="Front End Developer"
        company={{ name: 'Ordereze', link: 'https://www.ordereze.com/' }}
      />
      <WorkExperienceItem
        period="2013-2016"
        position="Full Stack Developer"
        company={{ name: 'European Dynamics', link: 'http://www.eurodyn.com/' }}
      />
      <WorkExperienceItem
        period="2011-2012"
        position="QA Engineer"
        company={{ name: 'Voyager', link: '' }}
      />
    </ul>
  </div>
);

export default WorkExperience;
