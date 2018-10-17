  import React, { Component } from 'react';
  import { Platform, View } from 'react-native';
  import { createStackNavigator } from 'react-navigation';
  import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
  import Icon from 'react-native-vector-icons/Ionicons';

  import HomeScreen from '../../screens/HomeScreen';
  import OverviewWorkoutScreen from '../../screens/OverviewWorkoutScreen';
  import SingleWorkoutScreen from '../../screens/SingleWorkoutScreen';
  import SettingsScreen  from '../../screens/SettingScreen';


  // Creates a navigator using an external react navigation framework.
  export const Navigator = (home, settings, workoutSettings, routeName) => createMaterialBottomTabNavigator(
    {
      Home: {
        screen: props => <HomeScreen startDate={home.startDate} pedActivated={home.pedActivated} globalStepCount={home.globalStepCount} {...props}/>,
        navigationOptions: {
          tabBarLabel: 'Home',
          tabBarIcon: ({ tintColor, focused }) => (
            <Icon size={23} name={(focused ? 'ios-home' : 'ios-home-outline')} style={{ color: tintColor }} />
          ),
        }
      },
      Workout: {
        screen: workoutStack(workoutSettings),
        navigationOptions: {
          tabBarLabel: 'Workout',
          tabBarIcon: ({ tintColor, focused }) => (
            <Icon size={23} name={(focused ? 'ios-stats' : 'ios-stats-outline')} style={{ color: tintColor }} />
          )
        }
      },
      Settings: {
        screen: props => <SettingsScreen startDate={settings.startDate} pedActivated={settings.pedActivated} updateActivated={settings.updateActivated} updateGlobalSteps={settings.updateGlobalSteps} updatePrevGlobalSteps={settings.updatePrevGlobalSteps} forceAppUpdate={settings.forceAppUpdate} {...props}/>,
        navigationOptions: {
          tabBarLabel: 'Settings',
          tabBarIcon: ({ tintColor, focused }) => (
            <Icon size={23} name={(focused ? 'ios-options' : 'ios-options-outline') } style={{ color: tintColor }} />
          )
        }
      }
    },
    {
      shifting: false,
      backBehavior: "initialRoute",
      initialRouteName: routeName/*'Home'*/,
      activeColor: 'white',
      tabBarColor: 'blue',
      inactiveTintColor: 'black',
      barStyle: { backgroundColor: 'orange'},
      swipeEnabled: true,
    }
  );

const workoutStack = (workoutSettings) => createStackNavigator({
  Workout: props => <OverviewWorkoutScreen {...props} {...workoutSettings}/>,
  Details: props => <SingleWorkoutScreen {...props} {...workoutSettings}/>,
  },{
    navigationOptions: {
      header:null,
    }
});