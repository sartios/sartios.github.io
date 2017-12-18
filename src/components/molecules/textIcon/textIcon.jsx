import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/atoms/icon';
import Text from 'components/atoms/text';

/**
 * Component to display an icon and text
 */
const TextIcon = props => (
  <div>
    <Icon name={props.icon} color={props.color} size={props.size} />
    <Text value={props.text}color={props.color} size={props.size} inline />
  </div>
);

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
