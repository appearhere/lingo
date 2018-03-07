import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router';

import ScrollToTop from './ScrollToTop';

describe('ScrollToTop component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <StaticRouter>
          <ScrollToTop>
            <div />
          </ScrollToTop>
        </StaticRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
