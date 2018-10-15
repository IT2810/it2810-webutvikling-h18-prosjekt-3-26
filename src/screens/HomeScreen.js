import React from 'react';
import { View, Text, Button, StatusBar, FlatList, StyleSheet } from 'react-native';

import GlobalPedometer from './../components/Pedometer/GlobalPedometer.js'


class HomeScreen extends React.Component {
    render() {
      console.log("Home props",this.props);
      return (
        <View>
          <StatusBar hidden />
          <FlatList
            data={[{key: 'a'}, {key: 'b'}, {key: 'c'}]}
            style={styles.container}
            numColumns={3}
            renderItem={({item}) => <Text>{item.key}</Text>}
            />
            <GlobalPedometer startDate={this.props.startDate} pedAvailable={this.props.pedAvailable} globalStepCount={this.props.globalStepCount}/>
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
