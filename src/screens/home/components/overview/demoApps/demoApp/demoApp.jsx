import React from 'react';
import styled from 'styled-components';

const DemoApp = () => {
  const Link = styled.a`
    display: inline-block;
    width: 100px;
    height: 60px;
    line-height: 60px;
    border: 1px solid lightgrey;
    text-decoration: none;
    color: #3F4548;
    text-align: center;
    vertical-align: center;
  `;

  const Metadata = styled.div`
    margin-top: 10px;
  `;

  const Name = styled.span`
    display: block;
    font-weight: bold;
    cursor: default;
  `;

  const Tech = styled.span`
    display: block;
    color: #9A9B9D;
    cursor: default;
  `;

  return (
    <li>
      <Link href="#">
        App Logo
      </Link>
      <Metadata>
        <Name>App Name</Name>
        <Tech>React</Tech>
      </Metadata>
    </li>
  );
};

export default DemoApp;
