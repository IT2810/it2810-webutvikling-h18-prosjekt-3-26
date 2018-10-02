import React from 'react';

import { Alert, ScrollView, Text, Button } from 'react-native';
import { Pedometer } from 'expo';

export default class PedometerSettings extends React.Component {
  static navigationOptions = {
    title: 'Pedometer settings',
  };

  constructor(props){
    super(props);

    this.state = { available: false, activated: false, globalStepCount: 0};

    this.checkAvailability = this.checkAvailability.bind(this);
    this.activatePedometer = this.activatePedometer.bind(this);
    this.deactivatePedometer = this.deactivatePedometer.bind(this);
    this.getGlobalSteps = this.getGlobalSteps.bind(this);
  }

  componentDidMount(){
    this.checkAvailability();
  }

  _listener: { remove: () => void } = null;

  // Checks the users Google Fit for global steps and updates stat
  async checkAvailability(){
    const result = await Pedometer.isAvailableAsync();
    this.setState({available: result});


    console.log("Checking availability");
  }

  // Activates recording of step count
  async activatePedometer(){
    this._listener = Pedometer.watchStepCount(data => {
      this.setState({ globalStepCount: data.steps });
    });

    this.setState({ activated: true });
    console.log("Setting activated");
  }

  // Deactivates recording of step count
  async deactivatePedometer(){
    if (this._listener) {
      this._listener.remove();
      this._listener = null;
    }

    this.setState({ activated: false });
    console.log("Clearing activated");
  }

  // Gets global amount of steps. Should be called through the Home, as this is the page where it is displayed.
  async getGlobalSteps(){
    //console.log(start, end);

    const startDate = this.props.startDate;
    const endDate = new Date();
    const result = await Pedometer.getStepCountAsync(startDate, endDate);

    console.log(startDate, '\n', endDate);

    this.setState({ globalStepCount: result.steps });
    Alert.alert('Pedometer result', `Number of global steps: ${this.state.globalStepCount}`);
  }

  render() {
    return (

      <ScrollView style={{ padding: 10, backgroundColor: "#a3a3a3", margin: 5 }}>
        {this.state.activated !== false ? <Text>Du har aktivert pedometeret i applikasjonen</Text> : <Text>Du har ikke aktivert pedometeret i applikasjonen</Text>}


        <Button // This will not be necessary, as global steps will be implemented into Home instead
          onPress={() => this.getGlobalSteps()}
          title="Get global steps count"
        />
        <Button
          onPress={() => this.activatePedometer()}
          title="Activate pedometer"
        />
        <Button
          onPress={() => this.deactivatePedometer()}
          title="Deactivate pedometer"
        />

        {this.state.stepCount !== 0 ? <Text>Total steps {this.state.globalStepCount}</Text> : <Text>You have not walked at all today</Text>}
      </ScrollView>
    );
  }
}
