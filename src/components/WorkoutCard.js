import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';

export default WorkoutCard = (props) => {

    /*
    This component takes a workout as prop and make a nice, styleable card out of it.
    Could as of now be extracted as a method in OverviewWorkoutScreen since it is so simple.
    */

    const remove = () => {
        props.workout.delete();
        props.removeWorkout(props.workout);        
    }

    return (
        <View style={props.style}>
            {props['removeWorkoutDisabled']? false: <Button color="red" icon="delete" onPress={() => remove()} />}
            <TouchableOpacity onPress={() => props.navigation.navigate('Details',{workout:props.workout, reloadOverview:props.reloadOverview})}>
            <Text>{props.workout.title}</Text>
            <Text>{props.workout.date.toString()}</Text>
            <Text>Note:</Text>
            <Text>{props.workout.note}</Text>
            <Text>Exercises:</Text>
            {props.workout.exercises.map( (exercise, i) => <Text key={i}>{exercise.name}</Text>)}
            </TouchableOpacity>
        </View>
    );
}