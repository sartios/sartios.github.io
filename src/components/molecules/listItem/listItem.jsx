import React from 'react';
import PropTypes from 'prop-types';
import hasIn from 'lodash/hasIn';
import { List } from 'semantic-ui-react';

/**
 * Component to display a list item.
 */
const ListItem = (props) => {
  const {
    icon, content, text, component,
  } = props;

  const ListItemIcon = icon ? <List.Icon name={icon} /> : null;

  if (component) {
    return (
      <List.Item>
        {component}
      </List.Item>
    );
  } else if (content) {
    return (
      <List.Item>
        {ListItemIcon}
        <List.Content>
          {content.header && <List.Header>{content.header}</List.Header>}
          {content.description && <List.Description>{content.description}</List.Description>}
        </List.Content>
      </List.Item>
    );
  } else if (text) {
    return (
      <List.Item>
        {ListItemIcon}
        <List.Content>
          {text}
        </List.Content>
      </List.Item>
    );
  }

  return null;
};

const { string, shape, element } = PropTypes;

ListItem.propTypes = {
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
};

ListItem.defaultProps = {
  icon: null,
  component: null,
  content: null,
  text: null,
};

export default ListItem;
