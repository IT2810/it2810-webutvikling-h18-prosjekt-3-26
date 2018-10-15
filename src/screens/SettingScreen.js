import React from 'react';
import { View, Text, Button, } from 'react-native';

import PedometerSettings from './../components/Pedometer/PedometerSettings.js'


class SettingScreen extends React.Component {
    render() {
      console.log("Settings props",this.props);
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green', }}>
          <Text>Settings</Text>
          <Text>Register your pedometer</Text>
          <PedometerSettings startDate={this.props.startDate} updateAvailability={this.props.updateAvailability} updateGlobalSteps={this.props.updateGlobalSteps}/>
        </View>
      );
    }
  }

export default SettingScreen;
