import React from 'react';
import PropTypes from 'prop-types';

import './navbar.post.css';

/**
 * Navigation bar widget
 */
const Navbar = props => (
  <div className="sa-portfolio-navbar">
    <div className="sa-portfolio-navbar-home">
      <div className="sa-portfolio-navbar-home-icon" />
      <div className="sa-portfolio-navbar-home-icon-content">cv</div>
      {props.title}
    </div>
    <div className="sa-portfolio-navbar-items" >
      {props.links.map(link => <div className="sa-portfolio-navbar-item">{link.name}</div>)}
    </div>
  </div>
);

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
