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
            <Row size={15} style={{display: "flex", alignItems: "center", justifyContent:"center"}}>
              <Text style={{color:'black',alignContent: "center", fontFamily: 'MontSerrat'}}> Next Workout goes here </Text>
            </Row>
            <Row size={14}>
              <Col size={10} style={{borderWidth: 1, borderRadius: 4}}>
                <GlobalPedometer startDate={this.props.startDate}
                 pedActivated={this.props.pedActivated} 
                globalStepCount={this.props.globalStepCount}/>
              </Col>
            </Row>
              <Row size={14}>
            <DisplayQuote style />
            </Row>
            <Row size={27}>
              <Col size={40}>
                <HomeCalendar />
              </Col>
            </Row>
          </Grid>
      );
    }
  }
  export default HomeScreen;
