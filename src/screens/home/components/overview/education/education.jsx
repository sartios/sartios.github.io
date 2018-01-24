import React from 'react';

import IconHeader from 'components/molecules/iconHeader';
import Card from 'components/molecules/card';
import EducationItem from './educationItem';

const Education = () => {
  const bsc = (<EducationItem
    educationTitle="BSc. Informatics & Telecommunications"
    period="2006 - 2011"
    institute={{
      website: 'http://informatics.teicm.gr/',
      name: 'TEI Serron',
    }}
  />);

  return (
    <div className="sa-portfolio-education">
      <IconHeader
        content="Education"
        icon="book"
        headerSize="h4"
      />
      <Card content={bsc} />
    </div>
  );
};

export default Education;
