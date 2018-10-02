import React from 'react';
import { View, Text, Button, StatusBar } from 'react-native';
import { TabNavigator, TabBarTop } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './src/screens/HomeScreen';
import WorkoutScreen from './src/screens/WorkoutScreen';
import SettingScreen from './src/screens/SettingScreen';

class App extends React.Component {
  render() {
    return(
      <View>
        <HomeScreen />
      </View>
    )
  }
}

export default TabNavigator(
  {
    Home: { screen: HomeScreen },
    Workouts: { screen: WorkoutScreen },
    Settings: { screen: SettingScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
          if (routeName === 'Home') {
            iconName = `ios-home${focused ? '' : '-outline'}`;
          } else if (routeName === 'Workouts') {
            iconName = `ios-stats${focused ? '' : '-outline'}`;
          } else if (routeName === 'Settings') {
            iconName = `ios-options${focused ? '' : '-outline'}`;
          }
        return <Ionicons name={iconName} size={24} color={tintColor} />;
      },
    }),

    tabBarComponent: TabBarTop,
    tabBarPosition: 'top',
    tabBarOptions: {
      showIcon: 'true',
      indicatorStyle: {
      backgroundColor: 'orange'
    },
      activeTintColor: 'white',
      inactiveTintColor: 'lightgray',
    },
    animationEnabled: true,
    swipeEnabled: true,
    
  }
);
