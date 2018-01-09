import React from 'react';

import Card from 'components/molecules/card';
import IconHeader from 'components/molecules/iconHeader';
import WorkItem from './workItem';

import './workExperience.post.css';

const WorkExperience = () => {
  const ordereze = (<WorkItem
    jobTitle="Front End Developer"
    period="2017 - Present"
    company={{
    website: 'https://www.ordereze.com/',
    name: 'Ordereze',
  }}
  />);

  const eurodyn = (<WorkItem
    jobTitle="Full Stack Developer"
    period="2013 - 2017"
    company={{
    website: 'http://www.eurodyn.com/',
    name: 'European Dynamics',
  }}
  />);

  const voyager = (<WorkItem
    jobTitle="QA Engineer"
    period="2011 - 2012"
    company={{
    name: 'Voyager',
  }}
  />);

  return (
    <div className="sa-portfolio-work-experience">
      <IconHeader
        content="Working Experience"
        icon="cloud"
        headerSize="h4"
      />
      <div>
        <Card content={ordereze} />
        <Card content={eurodyn} />
        <Card content={voyager} />
      </div>
    </div>
  );
};

export default WorkExperience;
