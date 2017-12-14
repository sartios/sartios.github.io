import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './icon.post.css';

const Icon = ({ name, className }) => {
  const containerClasses = classNames({
    'sa-portfolio-icon-container': true,
    [className]: className !== '',
  });

  return (
    <span className={containerClasses}>
      <i className={`fa fa-${name}`} />
    </span>
  );
};

const { string } = PropTypes;

Icon.propTypes = {
  /**
	 * The fontawesome icon name
	 */
  name: string.isRequired,
  /**
   * Injected class name
   */
  className: string,
};

Icon.defaultProps = {
  className: '',
};

export default Icon;
