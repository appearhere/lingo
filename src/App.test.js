import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

jest.mock('@appearhere/react-stickynode');
jest.mock('react-ga');
jest.mock('./utils/terms');

describe('App component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
