import React from 'react';
import Navigator from './src/components/Navigator/CreateNavigator';
import { View, StatusBar } from 'react-native'

class App extends React.Component {
  render() {
    return(
      <React.Fragment>
        <StatusBar hidden />
        <Navigator />
      </React.Fragment>
    )
  }
}
export default App;