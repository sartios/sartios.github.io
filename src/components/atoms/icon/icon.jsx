import React from 'react';
import PropTypes from 'prop-types';
import { Icon as SemanticIcon } from 'semantic-ui-react';

import './icon.post.css';

/**
 * Component to display an icon.
 */
const Icon = ({ name, className }) => (
  <SemanticIcon name={name} className={className} />
);

const { string } = PropTypes;

Icon.propTypes = {
  /**
	 * The name of the icon
	 */
  name: string,
  /**
   * Injected class name
   */
  className: string,
};

Icon.defaultProps = {
  name: '',
  className: '',
};

export default Icon;
