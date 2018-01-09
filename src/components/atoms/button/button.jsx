import React from 'react';
import PropTypes from 'prop-types';
import { Button as SemanticButton } from 'semantic-ui-react';

/**
 * A button component
 */
const Button = (props) => {
  const smt = '';

  return (
    <SemanticButton
      animated={props.animated}
      active={props.active}
      color={props.color}
      className={props.className}
      circular={props.circular}
      content={props.content}
      loading={props.loading}
      icon={props.icon}
      onClick={props.onClick}
    />
  );
};

const {
  string, bool, func, oneOf,
} = PropTypes;

Button.propTypes = {
  /**
   * Additional classes for the button
   */
  className: string,
  /**
   * True to show a loading indicator
   */
  loading: bool,
  /**
   * True to display circular button
   */
  circular: bool,
  /**
   * True to display animated button
   */
  animated: bool,
  /**
   * True for active button
   */
  active: bool,
  /**
   * The color of the button
   */
  color: oneOf([
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'teal',
    'blue',
    'violet',
    'purple',
    'pink',
    'brown',
    'grey',
    'black',
    'facebook',
    'google plus',
    'instagram',
    'linkedin',
    'twitter',
    'vk',
    'youtube']),
  /**
   * The name of the icon to be displayed inside button
   */
  icon: string,
  /**
   * Primary button content
   */
  content: string,
  /**
   * Callback to be invoked on click event
   */
  onClick: func,
};

Button.defaultProps = {
  className: '',
  loading: false,
  circular: false,
  animated: false,
  active: false,
  color: 'linkedin',
  icon: '',
  content: '',
  onClick: () => true,
};

export default Button;
