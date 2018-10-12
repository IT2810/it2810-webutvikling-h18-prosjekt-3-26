import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default WorkoutCard = (props) => {

    /*
    This component takes a workout as prop and make a nice, styleable card out of it.
    Could as of now be extracted as a method in OverviewWorkoutScreen since it is so simple.
    */

    const remove = () => {
        console.log(JSON.stringify(props.workout));
        //props.workout.delete();
        props.removeWorkout(props.workout);        
    }

    //

    return (
        <React.Fragment>
            <TouchableOpacity onPress={() => remove()} ><Text>redcross</Text></TouchableOpacity>
            <Text>{props.workout.title}</Text>
            <Text>{props.workout.date}</Text>
            <Text>{props.workout.note}</Text>
            {props.workout.exercises.map( (exercise, i) => <Text key={i}>{exercise.name}</Text>)}
            
        </React.Fragment>
    );
}