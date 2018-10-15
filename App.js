import React from 'react';
import {Navigator, AsyncStorage} from './src/components/Navigator/CreateNavigator';

export default class App extends React.Component {

  constructor(props){
    super(props);

    // States for global pedometer
    this.state = { pedActivated: false, globalStepCount: 0, prevGlobalStepCount: 0 };

    this.startDate = new Date();

    // Functions for updating states from global pedometer
    this.updateActivated = this.updateActivated.bind(this);
    this.updateGlobalSteps = this.updateGlobalSteps.bind(this);
    this.updatePrevGlobalSteps = this.updatePrevGlobalSteps.bind(this);
  }

  // Sets a startDate state for this session.
  componentDidMount(){
    this.startDate = this.retrieveStartDate();
    console.log(this.startDate);
  }

  // Save start date locally, so pedometer can check the global number of steps from that date.
  saveStartDate = async (startDate) => {
    try {
      await AsyncStorage.setItem('startDate', startDate);
    } catch (error) {
      console.log(error.message);
    }
  }

  // Load start date.
  retrieveStartDate = async () => {
    let startDate = new Date();
    try {
      startDate = await AsyncStorage.getItem('startDate') || 'none';

      console.log(startDate);

      if(startDate === 'none'){
        let newStartDate = new Date();
        saveStartDate(newStartDate);
        return newStartDate;
      }
      else{
        return startDate;
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  // Updates availability
  updateActivated(val){
    this.setState({ pedActivated: val });
  }

  // Updates global steps
  updateGlobalSteps(val){
    this.setState({ globalStepCount: this.state.prevGlobalStepCount + val });
  }

  // Updates previous global steps
  updatePrevGlobalSteps(val){
    this.setState({ globalStepCount: val });
    this.setState({ prevGlobalStepCount: val });
  }

  render() {
    // For sending pedometer props to navigator
    var homeProps = {};
    homeProps.startDate = this.startDate;
    homeProps.pedActivated = this.state.pedActivated;
    homeProps.globalStepCount = this.state.globalStepCount;

    var settingsProps = {};
    settingsProps.startDate = this.startDate;
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
