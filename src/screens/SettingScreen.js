import React from 'react';
import { View, Text, Button, } from 'react-native';
import PedometerSettings from './../components/Pedometer/PedometerSettings.js'


class SettingScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green' }}>
          <Text>Settings</Text>
          <Text>Register your pedometer</Text>

          {/* Settings specifically for the global pedometer. */}
          <PedometerSettings startDate={this.props.startDate} pedActivated={this.props.pedActivated} updateActivated={this.props.updateActivated} updateGlobalSteps={this.props.updateGlobalSteps} updatePrevGlobalSteps={this.props.updatePrevGlobalSteps}/>
        </View>
      );
    }
  }

export default SettingScreen;
