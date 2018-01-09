import React from 'react';
import PropTypes from 'prop-types';

import IconLink from 'components/molecules/iconLink';

/**
 * Component to display github info
 */
const GithubInfo = props => (
  <IconLink
    className={props.className}
    icon="github"
    link="http://www.github.com/sartios"
    text="github.com/sartios"
    size="large"
  />
);

const { string } = PropTypes;

GithubInfo.propTypes = {
  /**
   * Additional class names
   */
  className: string,
};

GithubInfo.defaultProps = {
  className: null,
};

export default GithubInfo;
