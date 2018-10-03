  import React, { Component } from 'react';
  import { Platform } from 'react-native';
  import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
  import Icon from 'react-native-vector-icons/Ionicons';

  import HomeScreen from '../../screens/HomeScreen';
  import WorkoutScreen from '../../screens/WorkoutScreen';
  import SettingsScreen  from '../../screens/SettingScreen';

  export default createMaterialBottomTabNavigator(
    {
      // All below are supposed to pass props to the screens.
      Home: {
        screen: props => <HomeScreen {...props}/>,
        navigationOptions: {
          tabBarLabel: 'Home',
          tabBarIcon: ({ tintColor, focused }) => (
            <Icon size={23} name={(focused ? 'ios-home' : 'ios-home-outline')} style={{ color: tintColor }} />
          )/*,
          tabBarOnPress: ({navigation}) => {
            navigation.setParam({ startDate: this.props.startDate });
          }*/
        }/*,
        screenProps: {
          { startDate: this.props.startDate },
          { pedAvailable: this.props.pedAvailable },
          { globalStepCount: this.props.globalStepCount }
        }*/
      },
      Workout: {
        screen: WorkoutScreen,
        navigationOptions: {
          tabBarLabel: 'Workout',
          tabBarIcon: ({ tintColor, focused }) => (
            <Icon size={23} name={(focused ? 'ios-stats' : 'ios-stats-outline')} style={{ color: tintColor }} />
          )
        }
      },
      Settings: {
        screen: SettingsScreen,
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
      initialRouteName: 'Home',
      activeColor: 'white',
      tabBarColor: 'blue',
      inactiveTintColor: 'black',
      barStyle: { backgroundColor: 'orange'},
      swipeEnabled: true,
    }
  );
