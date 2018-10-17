import React from 'react';
import { Text, StyleSheet } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import HomeCalendar from "../components/Calendar/HomeCalendar";
import DisplayQuote from "../components/Quoter/DisplayQuote";

import GlobalPedometer from './../components/Pedometer/GlobalPedometer';


class HomeScreen extends React.Component {
    render() {
      return (
          <Grid>
            <Row size={15} style={{backgroundColor: 'green'}}>
              <Text style={{color:'white'}}> Next Workout goes here </Text>
            </Row>
            <Row size={14}>
              <Col size={10} style={{borderWidth: 1, borderRadius: 4}}>
                <GlobalPedometer startDate={this.props.startDate} pedActivated={this.props.pedActivated} globalStepCount={this.props.globalStepCount}/>
              </Col>
              <Col size={10} style={{backgroundColor: 'yellow'}}>
              <Text>Notifications</Text>
              </Col>
            </Row>
            <Row size={14}>
              <Col size={10} style={{backgroundColor: 'blue'}}>
              <Text>?????</Text>
              </Col>
              <Col size={10} style={{backgroundColor: 'cyan'}}>
              <Text>??????</Text>
              </Col>
              </Row>
              <Row size={7} style={{backgroundColor: 'green'}}>
            <DisplayQuote style={{color: 'red'}} />
            </Row>
            <Row size={30}>
              <Col size={80} style={{backgroundColor: 'white'}}>
                <HomeCalendar />
              </Col>
            </Row>
          </Grid>
      );
    }
  }
  export default HomeScreen;
