import React from 'react';
import { View, Text, Button, StatusBar } from 'react-native';

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
  
export default SettingScreen;