import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default WorkoutCard = (props) => {

    /*
    This component takes a workout as prop and make a nice, styleable card out of it.
    Could as of now be extracted as a method in OverviewWorkoutScreen since it is so simple.
    */


    return (
        <React.Fragment>
            <TouchableOpacity><Text>redcross</Text></TouchableOpacity>
            <Text>{props.workout.title}</Text>
            <Text>{props.workout.date}</Text>
            <Text>{props.workout.note}</Text>
            <Text>{props.workout.exercises}</Text>
        </React.Fragment>
    );
}