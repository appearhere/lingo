import React from 'react';
import { render } from 'react-dom';

import Header from './Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Header />, div);
});
