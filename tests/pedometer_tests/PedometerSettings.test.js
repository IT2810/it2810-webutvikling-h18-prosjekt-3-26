// __tests__/PedometerSettings.js
import React from 'react';
import PedometerSettings from '../../src/components/Pedometer/PedometerSettings';

import renderer from 'react-test-renderer';


beforeEach(() => {
  const pedSettings = new PedometerSettings();
  pedSettings.setState({ activated: true });
});


// Due to limited testing without Enzyme, this will only test the definition of an object
test('Renders correctly', () => {
  expect(pedSettings).toBeDefined();
});
