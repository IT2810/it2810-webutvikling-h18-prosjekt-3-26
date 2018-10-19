import React from 'react';
import { Text } from 'react-native'
import { Col, Row, Grid, View } from "react-native-easy-grid";
import HomeCalendar from "../components/Calendar/HomeCalendar";
import DisplayQuote from "../components/Quoter/DisplayQuote";
import { NavigationEvents } from 'react-navigation'
import GlobalPedometer from './../components/Pedometer/GlobalPedometer';
import LastWorkout from '../components/LastWorkout';


class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      focused: false,
    }
  }
    render() {
      return (
        <React.Fragment>
              <NavigationEvents 
              onWillFocus={()=>{this.state.focused? false: this.setState({focused:true})}}
              onWillBlur={()=>{this.state.focused? this.setState({focused:false}) : false}}
              />
          <Grid>
            <Row size={15} style={{display: "flex", alignItems: "center", justifyContent:"center"}}>
              <LastWorkout {...this.props} bool={this.state.focused}/>
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
          </React.Fragment>
      );
    }
  }
  export default HomeScreen;
