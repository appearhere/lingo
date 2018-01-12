import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './screens/Home/Home';

import css from './App.css';

const App = () => (
  <div className={ css.app }>
    <h1>Lingo</h1>
    <Router>
      <Route exact path="/" component={ Home } />
    </Router>
  </div>
);

export default App;
