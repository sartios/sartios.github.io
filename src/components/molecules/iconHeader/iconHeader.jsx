import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

import Icon from 'components/atoms/icon';

/**
 * A header component with icon.
 */
const IconHeader = props => (
  <Header
    as={props.headerSize}
  >
    <Icon name={props.icon} />
    <Header.Content>
      {props.content}
      {
        props.subHeader &&
        <Header.Subheader>{props.subHeader}</Header.Subheader>
      }
    </Header.Content>
  </Header>
);

const { string, oneOf } = PropTypes;

IconHeader.propTypes = {
  /**
   * The header content
   */
  content: string,
  /**
   * Subheader of the header
   */
  subHeader: string,
  /**
   * The name of the icon
   */
  icon: string,
  /**
   * The size of the header
   */
  headerSize: oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};

IconHeader.defaultProps = {
  content: '',
  subHeader: null,
  icon: null,
  headerSize: 'h2',
};

export default IconHeader;
