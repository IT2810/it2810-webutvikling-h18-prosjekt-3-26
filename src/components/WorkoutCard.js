import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default WorkoutCard = (props) => {

    /*
    This component takes a workout as prop and make a nice, styleable card out of it.
    Could as of now be extracted as a method in OverviewWorkoutScreen since it is so simple.
    */

    const remove = () => {
        props.workout.delete();
        props.removeWorkout(props.workout);        
    }

    //
    console.log('creating workoutCard from',props.workout);
    return (
        <React.Fragment>
            <TouchableOpacity onPress={() => remove()} ><Text>redcross</Text></TouchableOpacity>
            {/*<TouchableOpacity onPress={() => this.props.navigate('SingleWorkoutScreen')}>*/}
            <Text>{props.workout.title}</Text>
            <Text>{props.workout.date.toString()}</Text>
            <Text>{props.workout.note}</Text>
            {props.workout.exercises.map( (exercise, i) => <Text key={i}>{exercise.name}</Text>)}
        </React.Fragment>
    );
}