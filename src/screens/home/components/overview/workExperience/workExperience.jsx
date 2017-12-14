import React from 'react';

import OverviewListItem from 'components/elements/overviewListItem/overviewListItem';

import './workExperience.post.css';

const WorkExperience = () => (
  <div className="sa-portfolio-work-experience">
    <span className="sa-portfolio-overview-title">Work Experience</span>
    <ul className="sa-portfolio-work-items">
      <OverviewListItem
        period="2016-Present"
        description="Front End Developer"
        icon="code"
        link={{ name: 'Ordereze', href: 'https://www.ordereze.com/' }}
      />
      <OverviewListItem
        period="2013-2016"
        description="Full Stack Developer"
        icon="code"
        link={{ name: 'European Dynamics', href: 'http://www.eurodyn.com/' }}
      />
      <OverviewListItem
        period="2011-2012"
        description="QA Engineer"
        icon="code"
        link={{ name: 'Voyager', href: '' }}
      />
    </ul>
  </div>
);

export default WorkExperience;
