import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

/**
 * Component to display a link
 */
const Link = (props) => {
  const classes = cn({
    'sp-color-gray': props.color === 'gray',
    'sp-color-gray-light': props.color === 'gray-light',
    'sp-color-black': props.color === 'black',
    'sp-color-blue': props.color === 'blue',
    'sp-size-small': props.size === 'small',
    'sp-size-medium': props.size === 'medium',
    'sp-size-large': props.size === 'large',
  });

  return (
    <a
      className={classes}
      href={props.link}
      target={props.target}
    >{props.text}
    </a>);
};

const { string, oneOf } = PropTypes;

Link.propTypes = {
  /**
   * The href link
   */
  link: string,
  /**
   * The target of the link
   */
  target: oneOf(['none', '_blank']),
  /**
   * The text of the link
   */
  text: string,
  /**
   * The size of the text icon
   */
  size: oneOf(['small', 'medium', 'large', 'inherit']),
  /**
   * The color of the link
   */
  color: oneOf(['gray', 'gray-light', 'black', 'blue', 'inherit']),
};

Link.defaultProps = {
  link: '#',
  target: 'none',
  text: '',
  color: 'inherit',
  size: 'inherit',
};

export default Link;
