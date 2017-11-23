import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/elements/icon/icon';

import './overviewListItem.post.css';

class OverviewListItem extends Component {
  renderLink() {
    const { link } = this.props;

    if (link && link.href) {
      return (
        <div className="sa-portfolio-work-item-company">
          <a href={`${link.href}`} target="_blank">{link.name}</a>
        </div>
      );
    }

    return (
      <div className="sa-portfolio-work-item-company">
        {link.name}
      </div>
    );
  }

  render() {
    return (
      <li className="sa-portfolio-work-item">
        <div className="sa-portfolio-work-item-content">
          <div className="sa-portfolio-work-item-period">
            {this.props.period}
          </div>
          <div className="sa-portfolio-work-item-position">
            <Icon name={this.props.icon} />{this.props.description}
          </div>
          {this.renderLink()}
        </div>
      </li>
    );
  }
}

const { object, string } = PropTypes;

OverviewListItem.propTypes = {
  /**
   * The date period of the list item
   */
  period: string,
  /**
   * The description of the list item
   */
  description: string,
  /**
   * The name of the font awesome icon to be displayed next to description
   */
  icon: string,
  /**
   * An object containing {link, name}
   */
  link: object,
};

OverviewListItem.defaultProps = {
  period: '',
  description: '',
  icon: '',
  link: { href: '', name: '' },
};

export default OverviewListItem;
