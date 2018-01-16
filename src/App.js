import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './screens/Home/Home';
import Term from './screens/Term/Term';

import css from './App.css';

const App = () => (
  <Router>
    <div className={ css.app }>
      <h1>Lingo</h1>

      <Route exact path="/" component={ Home } />
      <Route path="/:term" component={ Term } />
    </div>
  </Router>
);

export default App;
