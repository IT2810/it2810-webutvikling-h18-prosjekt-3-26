import React, { Component } from 'react';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

class HomeCalendar extends React.Component{
    render() {

        return(
            <Calendar
            current={Date()}
            minDate={'2012-05-10'}
            maxDate={'2020-05-10'}
            // Handler which gets executed on day press. Default = undefined
            onDayPress={(day) => {console.log('selected day', day)}}
            // Handler which gets executed on day long press. Default = undefined
            onDayLongPress={(day) => {console.log('selected day', day)}}
            // http://arshaw.com/xdate/#Formatting
            monthFormat={'MMMM yyyy'}
            // Handler which gets executed when visible month changes in calendar. Default = undefined
            onMonthChange={(month) => {console.log('month changed', month)}}
            hideArrows={false}
            hideExtraDays={false}
            disableMonthChange={true}
            firstDay={1}
            hideDayNames={false}
            showWeekNumbers={false}
            onPressArrowLeft={substractMonth => substractMonth()}
            onPressArrowRight={addMonth => addMonth()}
            horizontal={true}
            />
        )
    }
}

export default HomeCalendar;