import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router';

import TermCard from './TermCard';

describe('TermCard component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<StaticRouter><TermCard term={ {} } /></StaticRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
