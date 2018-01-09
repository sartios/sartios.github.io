import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import { List as SemanticList } from 'semantic-ui-react';

import ListItem from '../listItem';

/**
 * A component to display a list of items
 */
const List = props => (
  <SemanticList>
    {map(props.items, (item, index) => (<ListItem key={`i-${index}`} {...item} />))}
  </SemanticList>);

const {
  arrayOf, shape, string, element,
} = PropTypes;

List.propTypes = {
  /**
   * An array of the list items
   */
  items: arrayOf(shape({
    /**
   * The name of the icon for the list item
   */
    icon: string,
    /**
   * A react component as a list item
   */
    component: element,
    /**
   * The content of the list item
   */
    content: shape({
    /**
     * The header of the list item
     */
      header: string,
      /**
     * The description of the list item
     */
      description: string,
    }),
    /**
   * The text of the list item.
   * NOTE: use instead of content
   */
    text: string,
  })),
};

List.defaultProps = {
  items: [],
};

export default List;
