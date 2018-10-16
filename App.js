import React from 'react';
import OverviewWorkoutScreen from './src/screens/OverviewWorkoutScreen';
import SingleWorkoutScreen from './src/screens/SingleWorkoutScreen';
import { createStackNavigator } from 'react-navigation';

export default class App extends React.Component {

  render() {
    return (
      <Navigate />
    );
  }
}



const Navigate = createStackNavigator(
  {
    Home: OverviewWorkoutScreen,
    Details: SingleWorkoutScreen,
  }, 
  {
    initialRouteName: 'Home',
  });