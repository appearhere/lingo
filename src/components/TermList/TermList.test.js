import React from 'react';
import ReactDOM from 'react-dom';
import TermList from './TermList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TermList />, div);
});
