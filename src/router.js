//Libs
import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

// Components
import App from './components/App';
import Home from './components/Home';
import Profile from './components/Profile';
import Courses from './components/Courses';
import Rewards from './components/Rewards';
import Settings from './components/Settings';
import NotFound from './components/NotFound';
import CourseContainer from "./components/courses/CourseContainer";
import CourseList from './data/courses';
import Featured from "./components/Featured";

//Routes
const routes = (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="profile" component={Profile} title="Profile"/>
      <Route path="rewards" component={Rewards} />
      <Route path="settings" component={Settings} />

      <Route path="courses" component={Courses}>
        <IndexRedirect to="HTML" />
        <Route path="html" component={CourseContainer} data={CourseList.HTML} />
        <Route path="css" component={CourseContainer} data={CourseList.CSS} />
        <Route path="javascript" component={CourseContainer} data={CourseList.JS} />
      </Route>
      <Route path="featured/:topic/:name" component={Featured} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default routes;
