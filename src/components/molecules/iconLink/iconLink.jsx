import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/atoms/icon';

/**
 * Component to display an icon and a link.
 */
const IconLink = props => (
  <div>
    <Icon name={props.icon} />
    <a href={props.link} target={props.target}>
      {props.text}
    </a>
  </div>
);

const { string } = PropTypes;

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
};

IconLink.defaultProps = {
  icon: '',
  target: '_blank',
  link: '',
  text: '',
};

export default IconLink;
