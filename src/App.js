import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header/Header';

import Home from './screens/Home/Home';
import Term from './screens/Term/Term';

import css from './App.css';

const App = () => (
  <Router>
    <div className={ css.app }>
      <Route exact path="/:department?/:term?" component={ Header } />
      <Route exact path="/:department?" component={ Home } />
      <Route exact path="/:department/:term" component={ Term } />
    </div>
  </Router>
);

export default App;
