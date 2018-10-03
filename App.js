import React from 'react';
import Navigator from './src/components/Navigator/CreateNavigator';

import Settings from './Containers/Settings.js';
import Home from './Containers/Home.js';

export default class App extends React.Component {

  constructor(props){
    super(props);

    // States for global pedometer
    this.state = { startDate: new Date(), pedAvailable: false, globalStepCount: 0 };

    // Functions for updating states from global pedometer
    this.updateAvailability = this.updateAvailability.bind(this);
    this.updateGlobalSteps = this.updateGlobalSteps.bind(this);
  }

  // Updates availability
  updateAvailability(val){
    console.log("heyo");
    this.setState({ pedAvailable: val });
  }

  // Updates global steps
  updateGlobalSteps(val){
    this.setState({ globalStepCount: val });
  }

  render() {
    return (

      <Navigator startDate={this.state.startDate} pedAvailable={this.state.pedAvailable} globalStepCount={this.state.globalStepCount} updateAvailability={this.updateAvailability} updateGlobalSteps={this.updateGlobalSteps}/>

    );
  }
}
