import React from 'react';
import { View, Text } from 'react-native';
import ObjectEdit from '../components/EditObject';


export default class SingleWorkoutScreen extends React.Component {
    // This class takes an exercise as a prop and displays it nicely.

    createExercise = () => {
        const exercisesWithEdit = [];
        for (const exerciseNr in this.props.workout.exercises) {
            exercisesWithEdit.push(<ObjectEdit key={exerciseNr} propObject={this.props.workout.exercises[exerciseNr]} ints={['weight','repetitions']}/>);
        }
        return exercisesWithEdit;
    }

    render () {
        const exercises = this.createExercise();
        if (this.props.workout) {
            return (
                <View>
                    <ObjectEdit propObject={this.props.workout} exclude={['note']}/>
                    <Text>{JSON.stringify(this.props.workout.date)}</Text>
                    <Text>Exercises:</Text>
                    {exercises || 'No exercises added'}
                </View>
            );
        }
    }
}