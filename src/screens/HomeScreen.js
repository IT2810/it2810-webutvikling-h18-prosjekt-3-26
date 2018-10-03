import React from 'react';
import { View, Text, Button, StatusBar, FlatList, StyleSheet } from 'react-native';

class HomeScreen extends React.Component {
    render() {
      return (
        <View>
        <StatusBar hidden />
        <FlatList 
          data={[{key: 'a'}, {key: 'b'}, {key: 'c'}]}
          style={styles.container}
          numColumns={3}
          renderItem={({item}) => <Text>{item.key}</Text>} 
          />
        </View>
      );
    }  
  }

const styles=StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
    padding: 40,
  }
})
  export default HomeScreen;

            
          /*<Button
            title="Go to My Workouts"
            onPress={() => {
              this.props.navigation.navigate('Workouts')
            }}
          />*/