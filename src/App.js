import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './screens/Home/Home';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Lingo</h1>
        <Router>
          <Route exact path="/" component={ Home }/>
        </Router>
      </div>
    );
  }
}

export default App;
