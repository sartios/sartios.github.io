import React from 'react';
import PropTypes from 'prop-types';

import './icon.post.css';

const Icon = ({ name }) => (
  <span className="sa-portfolio-icon-container">
    <i className={`fa fa-${name}`} />
  </span>
);

const { string } = PropTypes;

Icon.propTypes = {
  /**
	 * The fontawesome icon name
	 */
  name: string.isRequired,
};

export default Icon;
