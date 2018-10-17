import React, { Component } from 'react';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import moment from 'moment';

const today = moment().format('YYYY-MM-DD')

class HomeCalendar extends React.Component{

    constructor() {
        super();
    
        this.state = {
          superMarkedDates: this.initialState
        }
      }

      daySelect = (day) => {
          const chosenDay = moment(day.dateString).format('YYYY-MM-DD')
          let marked = true;
          let markedDates = {}
          markedDates = {...markedDates, ... { marked }};
          const newMarkedDates = {...this.state.superMarkedDatesarkedDates, ...{ [chosenDay]: markedDates}}
                console.log(newMarkedDates);        
          this.setState({ superMarkedDates: newMarkedDates})

      }


    render() {

        return(
            
            <Calendar
            current={today}
            minDate={today}
            maxDate={'2020-05-10'}
            markedDates={this.state.superMarkedDates}
            onDayPress={this.daySelect}
            monthFormat={'MMMM yyyy'}
            disableMonthChange={true}
            firstDay={1}
            />
        )
    }
}

export default HomeCalendar;