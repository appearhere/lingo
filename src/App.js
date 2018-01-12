import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './screens/Home/Home';

const App = () => (
  <div>
    <h1>Lingo</h1>
    <Router>
      <Route exact path="/" component={ Home } />
    </Router>
  </div>
);

export default App;
