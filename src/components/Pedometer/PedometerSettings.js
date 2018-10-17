import React from 'react';
import { Alert, ScrollView, Text, Button } from 'react-native';
import { Pedometer } from 'expo';


export default class PedometerSettings extends React.Component {

  constructor(props){
    super(props);

    this.state = { available: false, activated: this.props.pedActivated};
  }

  componentDidMount(){
    this.checkAvailability();
  }

  _listener: { remove: () => void } = null;

  // Checks the users Google Fit for availability
  checkAvailability = async () => {
    const result = await Pedometer.isAvailableAsync();

    this.setState({available: result});
  }

  // Activates recording of step count
  activatePedometer = async () => {

    // Records new steps
    if(!this.props.pedActivated){
      this._listener = Pedometer.watchStepCount(data => {
        this.props.updateGlobalSteps(data.steps);
      });

      this.setGlobalSteps();

      // Updates global state in App
      this.setState({ activated: true });
      {this.props.updateActivated(true)};
    }
  }

  // Deactivates recording of step count
  deactivatePedometer = async () => {
    if (this._listener) {
      this._listener.remove();
      this._listener = null;
    }

    this.setState({ activated: false });

    // Updates global state in App
    {this.props.updateActivated(false)};
  }

  // Gets global amount of steps. Should be called through the Home, as this is the page where it is displayed.
  setGlobalSteps = async () => {

    const end = new Date();
    const start = this.props.startDate;

    // Updates previous global steps on activation and send to App.
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.props.updatePrevGlobalSteps(result.steps);
        this.props.updateGlobalSteps();
      },
      error => {
        console.error("Could not retrieve previous steps:", error);
      }
    );
  }

  render() {
    return (

      <ScrollView style={{ padding: 10, margin: 5 }}>
        {this.state.activated ? <Text>Du har aktivert pedometeret i applikasjonen</Text> : <Text>Du har ikke aktivert pedometeret i applikasjonen</Text>}

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
