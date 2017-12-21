import React from 'react';

import IconHeader from 'components/molecules/iconHeader';
import DemoApp from './demoApp/demoApp';

import './demoApps.post.css';

const DemoApps = () => (
  <div className="sa-portfolio-demo-apps">
    <IconHeader
      content="Demo Apps"
      icon="game"
      headerSize="h4"
    />
    <ul className="sa-portfolio-demo-apps-list">
      <DemoApp />
      <DemoApp />
      <DemoApp />
    </ul>
  </div>
);

export default DemoApps;
