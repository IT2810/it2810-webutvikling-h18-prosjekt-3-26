import React from 'react';
import SingleWorkoutScreen from '../../src/screens/SingleWorkoutScreen';

import renderer from 'react-test-renderer';


test('Renders correctly', () => {
  const tree = renderer.create(<SingleWorkoutScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});