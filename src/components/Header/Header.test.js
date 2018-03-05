import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter, Route } from 'react-router';

import Header from './Header';

jest.mock('@appearhere/react-stickynode');
jest.mock('../../utils/terms');

describe('Header component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<StaticRouter><Route component={ Header } /></StaticRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
