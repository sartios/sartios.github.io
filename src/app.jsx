import React from 'react';
import { render } from 'react-dom';

import HomeScreen from './screens/home/homeScreen';

import './styles/global.post.css';
import './styles/app.post.css';


const App = () => (
  <div
    className="sa-portfolio-container"
  >
    <HomeScreen />
  </div>
);

render(<App />, document.getElementById('app'));
