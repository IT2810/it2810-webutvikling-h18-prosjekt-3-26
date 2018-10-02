import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, AsyncStorage } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      asyncText: '',
    }
  }

  componentDidMount() {
    this.getTextFromAsyncStorage();
  }

  saveInput = async () => {
    try {
      await AsyncStorage.setItem('mykey_lebowski', this.state.text);
    } catch (error) {
      // Error saving data
    }
  }

  getTextFromAsyncStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('mykey_lebowski');
      if (value !== null) {
        // We have data!!
        this.setState({asyncText: value});
      }
     } catch (error) {
       // Error retrieving data
       return "No text found yet"
     }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          onChangeText={(text) => this.setState({text})}
        />
        <Button
          onPress={() => {this.saveInput();this.getTextFromAsyncStorage();}}
          title="Save input to AsyncStorage"
          accessibilityLabel="Do you really need this?"
        />
        <Text>{this.state.asyncText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
