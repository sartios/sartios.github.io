import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Icon from 'components/atoms/icon';
import Text from 'components/atoms/text';

import './textIcon.post.css';

/**
 * Component to display an icon and text
 */
const TextIcon = (props) => {
  const classes = cn({
    'sp-texticon-small': props.size === 'small',
    'sp-texticon-medium': props.size === 'medium',
    'sp-texticon-large': props.size === 'large',
    'sp-color-gray': props.color === 'gray',
    'sp-color-gray-light': props.color === 'gray-light',
    'sp-color-black': props.color === 'black',
    'sp-color-blue': props.color === 'blue',
  });

  return (
    <div className={classes}>
      <Icon name={props.icon} />
      <Text value={props.text} inline />
    </div>
  );
};

const { string, oneOf } = PropTypes;

TextIcon.propTypes = {
  /**
   * The name of the icon to display.
   */
  icon: string,
  /**
   * A text to display next to icon.
   */
  text: string,
  /**
   * The size of the text icon
   */
  size: oneOf(['small', 'medium', 'large', 'inherit']),
  /**
   * The color of the icon and text
   */
  color: oneOf(['gray', 'gray-light', 'black', 'blue']),
};

TextIcon.defaultProps = {
  icon: 'chat',
  text: 'sample text',
  size: 'medium',
  color: null,
};

export default TextIcon;
