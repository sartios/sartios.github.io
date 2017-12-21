import React from 'react';
import PropTypes from 'prop-types';
import { Card as SementicCard } from 'semantic-ui-react';

/**
 * A card component
 */
const Card = (props) => {
  if (!props.content) return null;

  return (
    <SementicCard>
      <SementicCard.Content>
        {props.content}
      </SementicCard.Content>
    </SementicCard>
  );
};

const {
  string, oneOfType, arrayOf, node,
} = PropTypes;

Card.propTypes = {
  /**
   * The content of the card
   */
  content: oneOfType([
    arrayOf(node),
    node,
  ]),
};

Card.defaultProps = {
  content: null,
};

export default Card;
