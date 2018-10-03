import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import GlobalPedometer from './../Components/GlobalPedometer.js'

// Test Home class
export default class Home extends React.Component{
  render(){
    return(
      <View>
        <GlobalPedometer startDate={this.props.startDate} pedAvailable={this.props.pedAvailable} globalStepCount={this.props.globalStepCount}/>
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
