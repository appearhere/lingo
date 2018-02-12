import React from 'react';
import { render } from 'react-dom';

import ScrollToTop from './ScrollToTop';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<ScrollToTop />, div);
});
