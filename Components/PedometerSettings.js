import React from 'react';

import { Alert, ScrollView, Text, Button } from 'react-native';
import { Pedometer } from 'expo';

export default class PedometerSettings extends React.Component {

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
      this.getGlobalSteps(data.steps);
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
  async getGlobalSteps(steps){

    // Defines the proper dates
    /*const startDate = this.props.startDate;
    const endDate = new Date();
    const result = await Pedometer.getStepCountAsync(startDate, endDate);

    console.log("Updating with value: ", result);
    // Sets local state for steps
    this.setState({ globalStepCount: result.steps });
    {this.props.updateGlobalSteps(this.state.globalStepCount)};*/


    this.setState({ globalStepCount: steps });
    {this.props.updateGlobalSteps(steps)};
    console.log("Pedometer updated globally to", steps);
  }

  render() {
    return (

      <ScrollView style={{ padding: 10, backgroundColor: "#a3a3a3", margin: 5 }}>
        {this.state.activated !== false ? <Text>Du har aktivert pedometeret i applikasjonen</Text> : <Text>Du har ikke aktivert pedometeret i applikasjonen</Text>}

        <Button
          onPress={() => this.activatePedometer()}
          title="Activate pedometer"
        />
        <Button
          onPress={() => this.deactivatePedometer()}
          title="Deactivate pedometer"
        />
      </ScrollView>
      
    );
  }
}
