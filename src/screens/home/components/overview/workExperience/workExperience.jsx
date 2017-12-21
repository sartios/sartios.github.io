import React from 'react';

import IconHeader from 'components/molecules/iconHeader';

import './workExperience.post.css';

const WorkExperience = () => (
  <div className="sa-portfolio-work-experience">
    <IconHeader
      content="Working Experience"
      icon="cloud"
      headerSize="h4"
    />
    <ul className="sa-portfolio-work-items">
      <div
        period="2016-Present"
        description="Front End Developer"
        icon="code"
        link={{ name: 'Ordereze', href: 'https://www.ordereze.com/' }}
      />
      <div
        period="2013-2016"
        description="Full Stack Developer"
        icon="code"
        link={{ name: 'European Dynamics', href: 'http://www.eurodyn.com/' }}
      />
      <div
        period="2011-2012"
        description="QA Engineer"
        icon="code"
        link={{ name: 'Voyager', href: '' }}
      />
    </ul>
  </div>
);

export default WorkExperience;
