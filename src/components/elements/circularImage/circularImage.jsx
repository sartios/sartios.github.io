import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';

const CircularImage = props => (
  <Image
    src={props.src}
    size={props.size}
    centered
    circular
  />
);

const { oneOf, string } = PropTypes;

CircularImage.propTypes = {
  /**
   * The src of the image
   */
  src: string,
  /**
   * The size of the image
   */
  size: oneOf(['massive', 'huge', 'big', 'large', 'medium', 'small', 'tiny', 'mini']),
};

CircularImage.defaultProps = {
  src: 'https://react.semantic-ui.com/assets/images/wireframe/square-image.png',
  size: 'tiny',
};

export default CircularImage;
