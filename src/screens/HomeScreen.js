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
              <Text>Pedometer</Text>         
              </Col>
              <Col size={10} style={{backgroundColor: 'yellow'}}>
              <Text>Notifications</Text>
              </Col>
            </Row>
            <Row size={17}>
              <Col size={10} style={{backgroundColor: 'blue'}}>  
              <Text>?????</Text>         
              </Col>
              <Col size={10} style={{backgroundColor: 'cyan'}}>
              <Text>??????</Text>
              </Col>
              </Row>

            <Row size={10}>
            <Text>Life is a journey</Text>
            </Row>

            <Row size={30}>
              <Col size={10} style={{backgroundColor: 'black'}}>        
              </Col>
              <Col size={40} style={{backgroundColor: 'white'}}>
                <Text style={{color:'black'}}>Calendar</Text>
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