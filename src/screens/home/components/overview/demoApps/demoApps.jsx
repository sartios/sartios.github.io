import React from 'react';

import DemoApp from './demoApp/demoApp';

import './demoApps.post.css';

const DemoApps = () => (
  <div className="sa-portfolio-demo-apps">
    <h3>Demo Apps</h3>
    <ul className="sa-portfolio-demo-apps-list">
      <DemoApp />
      <DemoApp />
      <DemoApp />
    </ul>
  </div>
);

export default DemoApps;
