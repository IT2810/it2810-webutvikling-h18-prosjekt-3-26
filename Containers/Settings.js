import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Pedometer } from 'expo';
import PedometerSettings from './../Components/PedometerSettings.js'


export default class Settings extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Register your pedometer</Text>

        <PedometerSettings startDate={this.props.startDate}/>
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
