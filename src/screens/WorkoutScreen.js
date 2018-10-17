import React from 'react';
import { View, Text, Button, StatusBar } from 'react-native';

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
          <Text> Fix yo Settings dawg</Text>
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

  export default WorkoutScreen;