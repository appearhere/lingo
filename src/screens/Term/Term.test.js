import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter, Route } from 'react-router';

import Term from './Term';

jest.mock('../../utils/terms');

describe('Term component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<StaticRouter><Route component={ Term } /></StaticRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
