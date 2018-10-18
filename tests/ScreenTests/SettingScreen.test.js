import React from 'react';
import SettingScreen from '../../src/screens/SettingScreen';

import renderer from 'react-test-renderer';


test('Renders correctly', () => {
  const tree = renderer.create(<SettingScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});