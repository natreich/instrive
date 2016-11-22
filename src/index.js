// Libs
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

// CSS
import './css/style.css';

// Components
import App from './components/App';
import Home from './components/Home';
import Profile from './components/Profile';
import Courses from './components/Courses';
import Rewards from './components/Rewards';
import Settings from './components/Settings';

//Routes
import routes from './router';

// Render
render(
  routes,
  document.getElementById('root')
);
