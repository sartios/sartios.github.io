import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

import './text.post.css';

/**
 * Component to display text
 */
const Text = (props) => {
  const classes = cs({
    'sp-text': true,
    'sp-text-inline': props.inline === true,
    'sp-text-small': props.size === 'small',
    'sp-text-medium': props.size === 'medium',
    'sp-text-large': props.size === 'large',
  });


  return (
    <span className={classes}>{props.value}</span>
  );
};

const { string, bool, oneOf } = PropTypes;

Text.propTypes = {
  /**
   * A string to display
   */
  value: string,
  /**
   * Set true to display text inline
   */
  inline: bool,
  /**
   * The size of the text
   */
  size: oneOf(['small', 'medium', 'large', 'inherit']),
};

Text.defaultProps = {
  value: '',
  inline: false,
  size: 'inherit',
};

export default Text;

