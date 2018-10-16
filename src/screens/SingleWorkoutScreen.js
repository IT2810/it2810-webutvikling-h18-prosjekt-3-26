import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from "react-native-paper";
import ObjectEdit from '../components/EditObject';
import Exercise from '../components/Exercise';


export default class SingleWorkoutScreen extends React.Component {
    // This class takes an exercise as a prop and displays it nicely.

    createExercise = (workout) => {
        const exercisesWithEdit = workout.exercises.map((exercise,i) => <ObjectEdit key={i} propObject={exercise} ints={['weight','repetitions']} labels/>);
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
            <ScrollView>
                <View>
                    <Button mode="contained" compact onPress={() => this.props.navigation.goBack()}>Go back</Button>
                    <ObjectEdit propObject={workout} exclude={['saveKey']} labels/>
                    <Text>{JSON.stringify(workout.date)}</Text>
                    <Text>Exercises:</Text>
                    {exercises || 'No exercises added'}
                    <Button onPress={() => {
                        workout.addExercise(new Exercise());
                        this.forceUpdate();
                        }
                    }>
                        Add workout
                    </Button>
                    <Button icon="save" mode="contained" compact onPress={() => workout.save().then(()=>{this.props.navigation.navigate('Home',{workout:workout})})}>Save</Button>
                </View>
            </ScrollView>
            );
        }
        return false;
    }
}
