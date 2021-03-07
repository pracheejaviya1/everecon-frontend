import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header';

describe('Header', () => {
  it('Renders Header', () => {
    const tree = renderer.create(<Header headerText='Default Test' />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
