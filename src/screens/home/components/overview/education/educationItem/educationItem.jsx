import React from 'react';
import PropTypes from 'prop-types';

import Text from 'components/atoms/text';
import Link from 'components/atoms/link';

/**
 * Education Item component
 */
const EducationItem = (props) => {
  const link = props.institute.website
    ? <Link color="blue" link={props.institute.website} text={props.institute.name} />
    : <Text color="gray" value={props.institute.name} />;

  const item = [
    <Text color="black" size="large" value={props.educationTitle} />,
    <Text color="gray" value={props.period} />,
    link,
  ];

  return item;
};

const { string, shape } = PropTypes;

EducationItem.propTypes = {
  /**
   * The job title, e.g. "BSc. Informatics & Telecommunications"
   */
  jobTitle: string,
  /**
   * The period in years for this position
   */
  period: string,
  /**
   * Institute description
   */
  institute: shape({
    /**
     * The website of the institute
     */
    website: string,
    /**
     * The name of the institute
     */
    name: string,
  }),
};

EducationItem.defaultProps = {
  educationTitle: 'Full Stack Developer',
  period: '2013 - 2017',
  institute: {
    name: 'institute-name',
    website: 'http://www.website.com',
  },
};

export default EducationItem;
