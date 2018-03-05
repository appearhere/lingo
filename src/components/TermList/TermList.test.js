import React from 'react';
import renderer from 'react-test-renderer';
import TermList from './TermList';

describe('TermList component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<TermList />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
