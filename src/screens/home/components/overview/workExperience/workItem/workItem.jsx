import React from 'react';
import PropTypes from 'prop-types';

import Text from 'components/atoms/text';
import Link from 'components/atoms/link';

/**
 * Work Item component
 */
const WorkItem = (props) => {
  const link = props.company.website
    ? <Link color="blue" link={props.company.website} text={props.company.name} />
    : <Text color="gray" value={props.company.name} />;

  const item = [
    <Text color="black" size="large" value={props.jobTitle} />,
    <Text color="gray" value={props.period} />,
    link,
  ];

  return item;
};

const { string, shape } = PropTypes;

WorkItem.propTypes = {
  /**
   * The job title, e.g. "Full Stack Developer"
   */
  jobTitle: string,
  /**
   * The period in years for this position
   */
  period: string,
  /**
   * Company description
   */
  company: shape({
    /**
     * The website of the company
     */
    website: string,
    /**
     * The name of the company
     */
    name: string,
  }),
};

WorkItem.defaultProps = {
  jobTitle: 'Full Stack Developer',
  period: '2013 - 2017',
  company: {
    name: 'company-name',
    website: 'http://www.website.com',
  },
};

export default WorkItem;
