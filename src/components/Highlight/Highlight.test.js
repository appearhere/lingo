import React from 'react';
import renderer from 'react-test-renderer';

import Highlight from './Highlight';

describe('Highlight component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Highlight />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
