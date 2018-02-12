import React from 'react';
import { render } from 'react-dom';

import Highlight from './Highlight';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Highlight />, div);
});
