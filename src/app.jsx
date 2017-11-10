import React from 'react';
import { render } from 'react-dom';

import HomeScreen from './screens/home/homeScreen';

import './styles/app.post.css';

const App = () => (<HomeScreen />);

render(<App />, document.getElementById('app'));
