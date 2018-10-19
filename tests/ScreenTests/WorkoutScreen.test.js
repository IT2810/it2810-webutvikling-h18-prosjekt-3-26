import React from 'react';
import WorkoutScreen from '../../src/screens/WorkoutScreen';

import renderer from 'react-test-renderer';


test('Renders correctly', () => {
  const tree = renderer.create(<WorkoutScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});