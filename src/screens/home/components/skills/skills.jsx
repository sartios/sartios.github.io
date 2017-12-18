import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/atoms/icon/icon';

import './skills.post.css';

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="sa-portfolio-skills-container">
        <div className="sa-portfolio-skills-list-item">
          <div className="sa-portfolio-skills-search-bar">
            <div className="sa-portfolio-skills-search-icon">icon</div>
            <div className="sa-portfolio-skills-search-input">input</div>
          </div>
        </div>
        <div className="sa-portfolio-skills-list-item">
          <div className="sa-portfolio-skills-list-item-content">
            <div className="sa-portfolio-skills-list-item-title">front end</div>
            <div className="sa-portfolio-skill">
              HTML, CSS, JS
              <Icon name="check" className="sa-portfolio-skill-icon" />
            </div>
            <div className="sa-portfolio-skill">
            React
              <Icon name="check" className="sa-portfolio-skill-icon" />
            </div>
            <div className="sa-portfolio-skill">
            Redux
              <Icon name="check" className="sa-portfolio-skill-icon" />
            </div>
            <div className="sa-portfolio-skill">
            GraphQL
              <Icon name="check" className="sa-portfolio-skill-icon" />
            </div>
          </div>
        </div>
        <div className="sa-portfolio-skills-list-item">
          <div className="sa-portfolio-skills-list-item-content">
            <div className="sa-portfolio-skills-list-item-title">back end</div>
            <div className="sa-portfolio-skill">
            Java, JavaScript, C#
              <Icon name="check" className="sa-portfolio-skill-icon" />
            </div>
            <div className="sa-portfolio-skill">
            REST
              <Icon name="check" className="sa-portfolio-skill-icon" />
            </div>
            <div className="sa-portfolio-skill">
            Serverless
              <Icon name="check" className="sa-portfolio-skill-icon" />
            </div>
          </div>
        </div>
        <div className="sa-portfolio-skills-list-item">
          <div className="sa-portfolio-skills-list-item-content">
            <div className="sa-portfolio-skills-list-item-title">miscellaneous</div>
            <div className="sa-portfolio-skill">
            Travelling
              <Icon name="star" className="sa-portfolio-misc-skill-icon" />
            </div>
            <div className="sa-portfolio-skill">
            Fitness
              <Icon name="star" className="sa-portfolio-misc-skill-icon" />
            </div>
            <div className="sa-portfolio-skill">
            Contributing
              <Icon name="star" className="sa-portfolio-misc-skill-icon" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
