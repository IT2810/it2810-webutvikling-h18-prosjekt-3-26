import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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

      <View style={styles.container}>
        <Settings startDate={this.state.startDate} updateAvailability={this.updateAvailability} updateGlobalSteps={this.updateGlobalSteps}/>
        <Home startDate={this.state.startDate} pedAvailable={this.state.pedAvailable} globalStepCount={this.state.globalStepCount}/>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
