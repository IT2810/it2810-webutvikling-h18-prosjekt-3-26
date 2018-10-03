import React from 'react';
import { CreateMaterialTopbar, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './src/screens/HomeScreen';
import SettingScreen from './src/screens/SettingScreen';
import WorkoutScreen from './src/screens/WorkoutScreen';
import CreateNavigator from './src/CreateNavigator';
import { View, Text, Button, StatusBar } from 'react-native';
import Navigator from './src/CreateNavigator';

class App extends React.Component {
  render() {
    return(
      <Navigator />
    )
  }
}
export default App;