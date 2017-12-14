import React from 'react';

import OverviewListItem from 'components/elements/overviewListItem/overviewListItem';

import './eduction.post.css';

const Education = () => (
  <div className="sa-portfolio-education">
    <span className="sa-portfolio-overview-title">Education</span>
    <ul className="sa-portfolio-education-items">
      <OverviewListItem
        period="2006-2011"
        description="BSc Informatics & Telecommunications"
        icon="book"
        link={{ name: 'TEI Serron', href: 'http://informatics.teicm.gr/' }}
      />
    </ul>
  </div>
);

export default Education;
