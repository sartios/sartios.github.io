import React from 'react';

import EducationItem from './educationItem/educationItem';

import './eduction.post.css';

const Education = () => (
  <div className="sa-portfolio-education">
    <h3>Education</h3>
    <ul className="sa-portfolio-education-items">
      <EducationItem />
      <EducationItem />
      <EducationItem />
    </ul>
  </div>
);

export default Education;
