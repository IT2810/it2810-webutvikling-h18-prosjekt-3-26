import React from 'react';
import { Navigator } from './src/components/Navigator/CreateNavigator';
import { AsyncStorage, View, StatusBar } from 'react-native';
import { Font } from 'expo'

export default class App extends React.Component {

  constructor(props){
    super(props);

    // States for global pedometer
    this.state = { startDate: null, pedActivated: false, globalStepCount: 0, prevGlobalStepCount: 0 };
  }

  // Sets a startDate state for this session.
  componentDidMount(){
    this.retrieveStartDate();
  }

  // Save start date locally, so pedometer can check the global number of steps from that date.
  saveStartDate = async (startDate) => {
    try {
      await AsyncStorage.setItem('startDate', startDate);
    } catch (error) {
      console.error(error);
    }
  }

  // Load start date.
  retrieveStartDate = async () => {
    let startDate = new Date();
    try {
      startDate = await AsyncStorage.getItem('startDate');

      // If the user does not have a saved start date, one will be made from today and used further in Global Pedometer.
      if(!startDate){
        const newStartDate = new Date();
        this.saveStartDate(newStartDate);
        this.setState({ startDate: newStartDate });
      }
      // If a start date is saved, this one will be used.
      else{
        this.setState({ startDate: new Date(startDate) });

      }
    } catch (error) {
      console.error(error);
    }
  }

  // Updates availability
  updateActivated = (val) => {
    this.setState({ pedActivated: val });
  }

  // Updates global steps
  updateGlobalSteps = (val = 0) => {
    this.setState({ globalStepCount: this.state.prevGlobalStepCount + val });
  }

  // Updates previous global steps
  updatePrevGlobalSteps = (val) => {
    this.setState({ prevGlobalStepCount: val });
  }

  render() {

    // For sending pedometer props to navigator
    var homeProps = {
        startDate: this.state.startDate,
        pedActivated: this.state.pedActivated,
        globalStepCount: this.state.globalStepCount
    };

    var settingsProps = {
        startDate: this.state.startDate,
        pedActivated: this.state.pedActivated,
        updateActivated: this.updateActivated,
        updateGlobalSteps: this.updateGlobalSteps,
        updatePrevGlobalSteps: this.updatePrevGlobalSteps
    };


    const Nav = Navigator({...homeProps}, {...settingsProps})

    return (

      <React.Fragment>
        <StatusBar hidden />
        <Nav />
      </React.Fragment>

    );
  }
}
