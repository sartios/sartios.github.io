import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/elements/icon/icon';

import './workExeprience.post.css';

class WorkExperienceItem extends Component {
  renderCompany() {
    const { company } = this.props;

    if (company.link) {
      return (
        <div className="sa-portfolio-work-item-company">
          <a href={`${company.link}`}>{company.name}</a>
        </div>
      );
    }

    return (
      <div className="sa-portfolio-work-item-company">
        {company.name}
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
            <Icon name="code" />{this.props.position}
          </div>
          {this.renderCompany()}
        </div>
      </li>
    );
  }
}

const { object, string } = PropTypes;

WorkExperienceItem.propTypes = {
  /**
   * The period of working in that position
   */
  period: string,
  /**
   * The position in the company (Front End Developer || Back End Developer)
   */
  position: string,
  /**
   * The name and the link of the company
   */
  company: object,
};

WorkExperienceItem.defaultProps = {
  period: 'current',
  position: 'Full Stack Developer',
  company: {},
};

export default WorkExperienceItem;
