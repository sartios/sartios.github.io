import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Icon from 'components/atoms/icon';
import Link from 'components/atoms/link';

/**
 * Component to display an icon and a link.
 */
const IconLink = (props) => {
  const classes = cn({
    [props.className]: props.className,
    'sp-size-small': props.size === 'small',
    'sp-size-medium': props.size === 'medium',
    'sp-size-large': props.size === 'large',
  });

  return (
    <div className={classes}>
      <Icon
        name={props.icon}
        color={props.iconColor}
        size={props.size}
      />
      <Link
        link={props.link}
        target={props.target}
        text={props.text}
        color={props.linkColor}
        size={props.size}
      />
    </div>
  );
};

const { string, oneOf } = PropTypes;

IconLink.propTypes = {
  /**
   * The icon name
   */
  icon: string,
  /**
   * Link target prop
   */
  target: string,
  /**
   * The link of the href
   */
  link: string,
  /**
   * The text of the link
   */
  text: string,
  /**
   * Additional classes
   */
  className: string,
  /**
   * The size of the component
   */
  size: oneOf(['small', 'medium', 'large', 'inherit']),
  /**
   * The color of the link
   */
  linkColor: oneOf(['gray', 'gray-light', 'black', 'blue']),
  /**
   * The color of the icon
   */
  iconColor: oneOf(['gray', 'gray-light', 'black', 'blue']),
};

IconLink.defaultProps = {
  icon: '',
  target: '_blank',
  link: '',
  text: '',
  iconColor: 'gray',
  linkColor: 'blue',
  size: 'medium',
  className: null,
};

export default IconLink;
