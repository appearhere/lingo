import React from 'react';
import { render } from 'react-dom';

import TermCard from './TermCard';

jest.mock('react-router-dom', () => ({
  // eslint-disable-next-line react/prop-types
  Link: ({ children }) => <div>{ children }</div>,
}));

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<TermCard name="TTV" department="Concierge" linkTo="/TTV" />, div);
});
