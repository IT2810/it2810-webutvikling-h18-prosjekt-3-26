import React from 'react';
import {Navigator} from './src/components/Navigator/CreateNavigator';

export default class App extends React.Component {

  constructor(props){
    super(props);

    // States for global pedometer
    this.state = { startDate: new Date(), pedActivated: false, globalStepCount: 0, prevGlobalStepCount: 0 };

    // Functions for updating states from global pedometer
    this.updateActivated = this.updateActivated.bind(this);
    this.updateGlobalSteps = this.updateGlobalSteps.bind(this);
    this.updatePrevGlobalSteps = this.updatePrevGlobalSteps.bind(this);
  }

  // Updates availability
  updateActivated(val){
    this.setState({ pedActivated: val });
  }

  // Updates global steps
  updateGlobalSteps(val){
    this.setState({ globalStepCount: this.state.prevGlobalStepCount + val });
  }

  // Updates global steps
  updatePrevGlobalSteps(val){
    this.setState({ globalStepCount: val });
    this.setState({ prevGlobalStepCount: val });
  }

  render() {
    var homeProps = {};
    homeProps.startDate = this.state.startDate;
    homeProps.pedActivated = this.state.pedActivated;
    homeProps.globalStepCount = this.state.globalStepCount;

    var settingsProps = {};
    settingsProps.startDate = this.state.startDate;
    settingsProps.pedActivated = this.state.pedActivated;
    settingsProps.updateActivated = this.updateActivated;
    settingsProps.updateGlobalSteps = this.updateGlobalSteps;
    settingsProps.updatePrevGlobalSteps = this.updatePrevGlobalSteps;

    const Nav = Navigator({...homeProps}, {...settingsProps})

    return (

      <Nav />

    );
  }
}
