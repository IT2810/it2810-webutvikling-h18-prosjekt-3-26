import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class GlobalPedometer extends React.Component{


  render(){
    return(

      // Container for the component, dynamic on availability
      <View style={styles.container}>
        {this.props.pedActivated !== false ? <Text style={styles.infoText}>Starting {this.props.startDate.getDate()}.{this.props.startDate.getMonth() + 1}.{this.props.startDate.getFullYear()}, your step number is</Text> : <Text style={styles.infoText}>Go to settings to activate global pedometer</Text>}

        {/* Container for the step number*/}
        <View style={styles.circle}>
          {this.props.pedActivated !== false ? <Text style={styles.stepText}>{this.props.globalStepCount}</Text> : false}
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    marginTop: 5,
    minWidth: 200,
    minHeight: 200,
    borderWidth: 3,
    borderRadius: 100,
    borderColor: '#361e81',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoText: {
    textAlign: 'center',
    fontSize: 20,
    marginRight: 50,
    marginLeft: 50,
  },
  stepText: {
    fontSize: 45,
  }
});
