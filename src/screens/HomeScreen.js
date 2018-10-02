import React from 'react';
import { View, Text, Button, StatusBar } from 'react-native';

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

  export default HomeScreen;