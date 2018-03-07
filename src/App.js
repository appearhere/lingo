import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GA from 'react-ga';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Header from './components/Header/Header';

import Home from './screens/Home/Home';
import Term from './screens/Term/Term';

import GoogleAnalytics from './utils/GoogleAnalytics';

import css from './App.css';

GA.initialize(process.env.REACT_APP_GA_TRACKING_ID, {
  debug: process.env.NODE_ENV === 'development',
});

const App = () => (
  <Router>
    <ScrollToTop>
      <Route path="/" component={GoogleAnalytics} />
      <div className={css.app}>
        <Route exact path="/:department?/:term?" component={Header} />
        <Route exact path="/:department?" component={Home} />
        <Route exact path="/:department/:term" component={Term} />
      </div>
    </ScrollToTop>
  </Router>
);

export default App;
