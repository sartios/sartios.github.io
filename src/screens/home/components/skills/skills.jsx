import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Input } from 'semantic-ui-react';

import Icon from 'components/atoms/icon/icon';

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const Container = styled.div`
      background-color:#3F4548;
      color: lightgrey;
      position: absolute;
      top: 0;
      right: 0;
      width: 20%;
      z-index: 10;
      height: 1024px;

      @media (max-width: 992px) {
        position: relative;
        width: 100%;
        height: 500px;
      }
    `;

    const ListItem = styled.div`
      padding-left: 20px;
      padding-top: 10px;
      padding-right: 20px;
    `;

    const SearchBarContainer = styled.div`
      input {
        color: lightgray !important;
      }
    
      i {
        color: lightgrey !important;
      }
    `;

    const ListItemContent = styled.div`
      height: 150px;
    `;

    const ListItemTitle = styled.div`
      border-bottom: 1px solid lightgrey;
      margin-bottom: 10px;
      padding-bottom: 10px;
      text-transform: uppercase;
    `;

    const ListItemSkill = styled.div`
      display: flex;
      justify-content: space-between;
    `;

    return (
      <Container>
        <ListItem>
          <SearchBarContainer>
            <Input icon="search" placeholder="Search..." transparent inverted />
          </SearchBarContainer>
        </ListItem>
        <ListItem>
          <ListItemContent>
            <ListItemTitle>front end</ListItemTitle>
            <ListItemSkill>
              HTML, CSS, JS
              <Icon name="check" color="green-light" />
            </ListItemSkill>
            <ListItemSkill>
              React
              <Icon name="check" color="green-light" />
            </ListItemSkill>
            <ListItemSkill>
              Redux
              <Icon name="check" color="green-light" />
            </ListItemSkill>
            <ListItemSkill>
              GraphQL
              <Icon name="check" color="green-light" />
            </ListItemSkill>
          </ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemContent>
            <ListItemTitle>back end</ListItemTitle>
            <ListItemSkill>
              Java, JavaScript, C#
              <Icon name="check" color="green-light" />
            </ListItemSkill>
            <ListItemSkill>
              REST
              <Icon name="check" color="green-light" />
            </ListItemSkill>
            <ListItemSkill>
              Serverless
              <Icon name="check" color="green-light" />
            </ListItemSkill>
          </ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemContent>
            <ListItemTitle>miscellaneous</ListItemTitle>
            <ListItemSkill>
              Travelling
              <Icon name="star" color="orange" />
            </ListItemSkill>
            <ListItemSkill>
              Fitness
              <Icon name="star" color="orange" />
            </ListItemSkill>
            <ListItemSkill>
              Contributing
              <Icon name="star" color="orange" />
            </ListItemSkill>
          </ListItemContent>
        </ListItem>
      </Container>
    );
  }
}

export default Skills;
