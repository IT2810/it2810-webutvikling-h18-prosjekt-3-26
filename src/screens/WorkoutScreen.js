import React from 'react';
import { View, Text, Button, StatusBar } from 'react-native';
import SettingScreen from './SettingScreen';

class WorkoutScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue', }}>
          <Text>Workouts Screen</Text>
          <Button
            title="Go to Home Screen"
            onPress={() => {
              this.props.navigation.navigate('Home')
            }}
          />
          <Text> Yo you wanna see something funny</Text>
          <Button
            title="Go to Settings"
            onPress={() => {
              this.props.navigation.navigate('Settings')
            }}
          />
        </View>
      );
    }  
  }   

  export default SettingScreen;