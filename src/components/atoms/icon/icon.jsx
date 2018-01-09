import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Icon as SemanticIcon } from 'semantic-ui-react';

import './icon.post.css';

/**
 * Component to display an icon.
 */
const Icon = (props) => {
  const classes = cn({
    'sp-color-gray': props.color === 'gray',
    'sp-color-gray-light': props.color === 'gray-light',
    'sp-color-black': props.color === 'black',
    'sp-color-blue': props.color === 'blue',
    'sp-color-orange': props.color === 'orange',
    'sp-color-green-light': props.color === 'green-light',
    'sp-size-small': props.size === 'small',
    'sp-size-medium': props.size === 'medium',
    'sp-size-large': props.size === 'large',
  });

  return (
    <SemanticIcon name={props.name} className={classes} />
  );
};

const { string, oneOf } = PropTypes;

Icon.propTypes = {
  /**
	 * The name of the icon
	 */
  name: string,
  /**
   * The color of the icon
   */
  color: oneOf(['gray', 'gray-light', 'black', 'blue', 'orange', 'green-light', 'inherit']),
  /**
   * The size of the icon
   */
  size: oneOf(['small', 'medium', 'large', 'inherit']),
};

Icon.defaultProps = {
  name: '',
  color: 'inherit',
  size: 'inherit',
};

export default Icon;
