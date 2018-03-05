import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter, Route } from 'react-router';

import Home from './Home';

jest.mock('../../utils/terms', () => ([]));

describe('Home component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<StaticRouter><Route component={ Home } /></StaticRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
