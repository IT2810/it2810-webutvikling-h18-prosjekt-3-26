import React from 'react';
import {Navigator} from './src/components/Navigator/CreateNavigator';

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
    var homeProps = {};
    homeProps.startDate = this.state.startDate;
    homeProps.pedAvailable = this.state.pedAvailable;
    homeProps.globalStepCount = this.state.globalStepCount;

    var settingsProps = {};
    settingsProps.startDate = this.state.startDate;
    settingsProps.updateAvailability = this.updateAvailability;
    settingsProps.updateGlobalSteps = this.updateGlobalSteps;

    const Nav = Navigator({...homeProps}, {...settingsProps})

    return (

      <Nav />

    );
  }
}
