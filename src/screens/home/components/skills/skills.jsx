import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';

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
            <Input icon="search" placeholder="Search..." transparent inverted />
          </div>
        </div>
        <div className="sa-portfolio-skills-list-item">
          <div className="sa-portfolio-skills-list-item-content">
            <div className="sa-portfolio-skills-list-item-title">front end</div>
            <div className="sa-portfolio-skill">
              HTML, CSS, JS
              <Icon name="check" color="green-light" />
            </div>
            <div className="sa-portfolio-skill">
            React
              <Icon name="check" color="green-light" />
            </div>
            <div className="sa-portfolio-skill">
            Redux
              <Icon name="check" color="green-light" />
            </div>
            <div className="sa-portfolio-skill">
            GraphQL
              <Icon name="check" color="green-light" />
            </div>
          </div>
        </div>
        <div className="sa-portfolio-skills-list-item">
          <div className="sa-portfolio-skills-list-item-content">
            <div className="sa-portfolio-skills-list-item-title">back end</div>
            <div className="sa-portfolio-skill">
            Java, JavaScript, C#
              <Icon name="check" color="green-light" />
            </div>
            <div className="sa-portfolio-skill">
            REST
              <Icon name="check" color="green-light" />
            </div>
            <div className="sa-portfolio-skill">
            Serverless
              <Icon name="check" color="green-light" />
            </div>
          </div>
        </div>
        <div className="sa-portfolio-skills-list-item">
          <div className="sa-portfolio-skills-list-item-content">
            <div className="sa-portfolio-skills-list-item-title">miscellaneous</div>
            <div className="sa-portfolio-skill">
            Travelling
              <Icon name="star" color="orange" />
            </div>
            <div className="sa-portfolio-skill">
            Fitness
              <Icon name="star" color="orange" />
            </div>
            <div className="sa-portfolio-skill">
            Contributing
              <Icon name="star" color="orange" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
