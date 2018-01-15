import React from 'react';
import ReactDOM from 'react-dom';
import Term from './Term';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Term match={ { params: { } } } />, div);
});
