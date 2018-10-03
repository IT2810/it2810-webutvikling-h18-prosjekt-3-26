import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PedometerSettings from './../Components/PedometerSettings.js'

// Test Settings class
export default class Settings extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Text>Register your pedometer</Text>
        <PedometerSettings startDate={this.props.startDate} updateAvailability={this.props.updateAvailability} updateGlobalSteps={this.props.updateGlobalSteps}/>
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
