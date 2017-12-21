import React from 'react';

import IconHeader from 'components/molecules/iconHeader';

import './eduction.post.css';

const Education = () => (
  <div className="sa-portfolio-education">
    <IconHeader
      content="Education"
      icon="book"
      headerSize="h4"
    />
    <ul className="sa-portfolio-education-items">
      <div
        period="2006-2011"
        description="BSc Informatics & Telecommunications"
        icon="book"
        link={{ name: 'TEI Serron', href: 'http://informatics.teicm.gr/' }}
      />
    </ul>
  </div>
);

export default Education;
