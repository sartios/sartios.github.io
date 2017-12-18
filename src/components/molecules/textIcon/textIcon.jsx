import React from 'react';
import PropTypes from 'prop-types';


import Icon from 'components/atoms/icon';

/**
 * Component to display an icon and text
 */
const TextIcon = props => (
  <div>
    <Icon name={props.icon} />
    {props.text}
  </div>
);

const { string } = PropTypes;

TextIcon.propTypes = {
  /**
   * The name of the icon to display.
   */
  icon: string,
  /**
   * A text to display next to icon.
   */
  text: string,
};

TextIcon.defaultProps = {
  icon: 'chat',
  text: 'sample text',
};

export default TextIcon;
