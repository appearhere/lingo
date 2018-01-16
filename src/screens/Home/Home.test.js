import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';

jest.mock('react-router-dom', () => ({
  // eslint-disable-next-line react/prop-types
  Link: ({ children }) => <div>{ children }</div>,
}));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home match={ { params: { department: 'All' } } } />, div);
});
