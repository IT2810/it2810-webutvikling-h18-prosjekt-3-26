import React from 'react';
import { View, Text } from 'react-native';
import { Button } from "react-native-paper";
import ObjectEdit from '../components/EditObject';


export default class SingleWorkoutScreen extends React.Component {
    // This class takes an exercise as a prop and displays it nicely.

    createExercise = (workout) => {
        const exercisesWithEdit = [];
        for (const exerciseNr in workout.exercises) {
            exercisesWithEdit.push(<ObjectEdit key={exerciseNr} propObject={workout.exercises[exerciseNr]} ints={['weight','repetitions']}/>);
        }
        return exercisesWithEdit;
    }

    navigationOrSingleRenderWorkout = () => {
        return this.props.workout ? this.props.workout : this.props.navigation.getParam('workout');
    }

    render () {
        const workout = this.navigationOrSingleRenderWorkout();
        const exercises = this.createExercise(workout);
        if (workout) {
            return (
                <View>
                    <Button mode="contained" compact onPress={() => this.props.navigation.goBack()}>Go back</Button>
                    <ObjectEdit propObject={workout} exclude={['saveKey']}/>
                    <Text>{JSON.stringify(workout.date)}</Text>
                    <Text>Exercises:</Text>
                    {exercises || 'No exercises added'}
                    <Button icon="save" mode="contained" compact onPress={() => workout.save().then(()=>{this.props.navigation.navigate('Home',{workout:workout})})}>Save</Button>
                </View>
            );
        }
        return false;
    }
}
