import React from 'react';
import styled from 'styled-components';

import IconHeader from 'components/molecules/iconHeader';
import DemoApp from './demoApp/demoApp';

const DemoApps = () => {
  const DemoAppsList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
    margin-top: 30px;
  `;

  return (
    <div className="sa-portfolio-demo-apps">
      <IconHeader
        content="Demo Apps"
        icon="game"
        headerSize="h4"
      />
      <DemoAppsList>
        <DemoApp />
        <DemoApp />
        <DemoApp />
      </DemoAppsList>
    </div>
  );
};

export default DemoApps;
