// __tests__/GlobalPedometer.js
import React from 'react';
import GlobalPedometer from '../../src/components/Pedometer/GlobalPedometer';

import renderer from 'react-test-renderer';


// Tests if component actually renders
test('Renders correctly', () => {
  const tree = renderer.create(<GlobalPedometer/>).toJSON();
  expect(tree).toMatchSnapshot();
});

/*
test('Displays text if activated', () => {
  const props = {
    startDate: new Date(),
    globalStepCount: 4,
    pedActivated: true
  }

  const testNumber = renderer.create(<GlobalPedometer {...props} />).toJSON();

  expect(testNumber.text()).to.contain('4');
});*/
