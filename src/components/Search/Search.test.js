import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router';

import Search from './Search';

describe('Search component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<StaticRouter><Search /></StaticRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
