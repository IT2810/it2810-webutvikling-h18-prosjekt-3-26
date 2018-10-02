import React from 'react';
import { View, Text, Button, StatusBar } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import { Ionicons } from '@expo/vector-icons'; // 6.2.2
import { TabNavigator, TabBarTop } from 'react-navigation'; // 1.0.0-beta.27


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', }}>
      <StatusBar hidden />
        <Text>Welcome to the best website on the web.</Text>
        <Button
          title="Go to My Workouts"
          onPress={() => {
            this.props.navigation.navigate('Workouts')
          }}
        />
      </View>
    );
  }  
}

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

class SettingScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green', }}>
        <Text>Lolscreen</Text>
        <Button
          title="Go to Home Screen"
          onPress={() => {
            this.props.navigation.navigate('Home')
          }}
        />
        <Text>Back to Workouts dog</Text>
        <Button
          title="Go to Workouts"
          onPress={() => {
            this.props.navigation.navigate('Workouts')
          }} 
        />
      </View>
    );  
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
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Workouts') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }


        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={24} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarTop,
    tabBarPosition: 'top',
    tabBarOptions: {

      indicatorStyle: {
  backgroundColor: 'orange', // color of the indicator
},
      activeTintColor: 'white',
      inactiveTintColor: 'lightgray',
    },
    animationEnabled: true,
    swipeEnabled: true,
  }
);
