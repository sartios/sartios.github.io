import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Navigation bar widget
 */
const Navbar = (props) => {
  const Container = styled.div`
    background-color: white;
    box-shadow: 0 2px 5px #888888;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 10;
  `;

  const ContainerCV = styled.div`
    padding-left: 20px;
    text-transform: uppercase;
    color: #3F4548;
    font-weight: bold;
    position: relative;
    display: flex;
    align-items: center;
  `;

  const IconCV = styled.div`
    display: inline-block;
    width: 35px;
    height: 35px;
    background-color: #3F4548;
    border-radius: 15%;
    transform: rotate(45deg);
    margin-right: 20px;
  `;

  const IconCVContent = styled.div`
    color: white;
    position: absolute;
    display: inline-block;
    left: 26px;
  `;

  const NavbarItems = styled.div`
    padding-right:20px;
    width: 300px;
    display: flex;
    align-items: center;
  `;

  const NavBarItem = styled.div`
    color: #9A9B9D;
    display: inline-block;
    width: 45%;
    text-align: center;
    text-transform: capitalize;

    &:hover,
    &:focus {
      cursor: pointer;
      color: #84CEE0;
      transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
  `;

  return (
    <Container>
      <ContainerCV>
        <IconCV />
        <IconCVContent>cv</IconCVContent>
        {props.title}
      </ContainerCV>
      <NavbarItems>
        {props.links.map((link, index) => {
          const key = `l-${index}`;
          return (
            <NavBarItem key={key}>
              {link.name}
            </NavBarItem>);
        })}
      </NavbarItems>
    </Container>
  );
};

const { string, array } = PropTypes;

Navbar.propTypes = {
  /**
   * The title to display in naviation bar
   */
  title: string,
  /**
   * An array of navigation bar links
   */
  links: array,
};

Navbar.defaultProps = {
  title: 'sartios',
  links: [
    { name: 'home', href: '/' },
    { name: 'demos', href: '/' },
  ],
};

export default Navbar;
