import React from 'react';
import { View, Text, Button, StatusBar, FlatList, StyleSheet } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";


class HomeScreen extends React.Component {
    render() {
      return (
          <Grid>
            <Row size={15} style={{backgroundColor: 'green'}}>     
              <Text style={{color:'white'}}> Next Workout goes here </Text>
            </Row >
            
            <Row size={10} style={{backgroundColor:'black'}}>
            </Row>

            <Row size={17}>
              <Col size={10} style={{backgroundColor: 'pink'}}>  
              <Text>Notifications</Text>         
              </Col>
              <Col size={10} style={{backgroundColor: 'yellow'}}>
              <Text>Calendar</Text>
              </Col>
              <Col size={10} style={{backgroundColor: 'grey'}}>
              <Text>Something</Text>
              </Col>
            </Row>

            <Row size={10}>

            </Row>

            <Row size={30}>
              <Col size={10} style={{backgroundColor: 'black'}}>        
              </Col>
              <Col size={40} style={{backgroundColor: 'white'}}>
                <Text style={{color:'black'}}>Pedometer</Text>
              </Col>
              <Col size={10} style={{backgroundColor: 'black'}}>
              </Col>
            </Row>
          </Grid>
      );
    }  
  }

const styles=StyleSheet.create({
  gridstyle: {
    color: 'yellow',
    fontSize: 24,
  }
})
  export default HomeScreen;