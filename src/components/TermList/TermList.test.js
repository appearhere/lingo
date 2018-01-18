import React from 'react';
import ReactDOM from 'react-dom';
import TermList from './TermList';

jest.mock('react-router-dom', () => ({
  // eslint-disable-next-line react/prop-types
  Link: ({ children }) => <div>{ children }</div>,
}));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TermList currentDepartment="All" />, div);
});
