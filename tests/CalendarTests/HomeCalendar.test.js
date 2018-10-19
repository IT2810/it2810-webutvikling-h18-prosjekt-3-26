import React from 'react';
import HomeCalendar from '../../src/components/Calendar/HomeCalendar';

import renderer from 'react-test-renderer';


test('Renders correctly', () => {
  const tree = renderer.create(<HomeCalendar />).toJSON();
  expect(tree).toMatchSnapshot();
});