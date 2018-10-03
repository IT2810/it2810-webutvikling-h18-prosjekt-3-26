import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class GlobalPedometer extends React.Component{

  constructor(props){
    super(props);

    this.state = { available: false, activated: false};
  }

  render(){
    return(

      // Container for the component, dynamic on availability
      <View style={styles.container}>
        {this.props.pedAvailable !== false ? <Text style={styles.infoText}>Starting {this.props.startDate.getDate()}.{this.props.startDate.getMonth()}.{this.props.startDate.getFullYear()}, your step number is</Text> : <Text style={styles.infoText}>Go to settings to activate global pedometer</Text>}

        {/* Container for the step number*/}
        <View style={styles.circle}>
          {this.props.pedAvailable !== false ? <Text style={styles.stepText}>{this.props.globalStepCount}</Text> : false}
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    backgroundColor: 'inherit',
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
    backgroundColor: 'inherit',
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
