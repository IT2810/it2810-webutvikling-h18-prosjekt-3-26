import React from 'react';
import { View, Text } from 'react-native';
import ObjectEdit from '../components/ExerciseEdit';


export default class SingleWorkoutScreen extends React.Component {
    // This class takes an exercise as a prop and displays it nicely.

    createExercise = () => {
        const exercisesWithEdit = [];
        for (const exerciseNr in this.props.workout.exercises) {
            exercisesWithEdit.push(<ObjectEdit key={exerciseNr} propObject={this.props.workout.exercises[exerciseNr]}/>);
        }
        return exercisesWithEdit;
    }

    render () {
        const exercises = this.createExercise();
        if (this.props.workout) {
            return (
                <View>
                    <Text>{this.props.workout.title}</Text>
                    <Text>{JSON.stringify(this.props.workout.date)}</Text>
                    <Text>Exercises:</Text>
                    {exercises || 'No exercises added'}
                </View>
            );
        }
    }
}