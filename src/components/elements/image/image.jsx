import React from 'react';
import PropTypes from 'prop-types';
import { Image as SemanticImage } from 'semantic-ui-react';

/**
 * Component to display an image.
 */
const Image = props => (
  <SemanticImage
    src={props.src}
    size={props.size}
    centered={props.centered}
    circular={props.circular}
  />
);

const { oneOf, string, bool } = PropTypes;

Image.propTypes = {
  /**
   * The src of the image.
   */
  src: string,
  /**
   * The size of the image.
   */
  size: oneOf(['massive', 'huge', 'big', 'large', 'medium', 'small', 'tiny', 'mini']),
  /**
   * Set true to appear image circular.
   */
  circular: bool,
  /**
   * Set true to appear image centered in a content block.
   */
  centered: bool,
};

Image.defaultProps = {
  src: 'https://react.semantic-ui.com/assets/images/wireframe/square-image.png',
  size: 'tiny',
  circular: false,
  centered: false,
};

export default Image;
