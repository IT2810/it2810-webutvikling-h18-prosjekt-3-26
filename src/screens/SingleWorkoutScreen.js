import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from "react-native-paper";
import ObjectEdit from '../components/Workout/EditObject';
import Exercise from '../components/Workout/Exercise';


export default class SingleWorkoutScreen extends React.Component {
    // This class takes an exercise as a prop and displays it nicely.
    // Also, allows editing of fields and is for that reason used to create new workouts.

    createExercise = (workout) => {
        const exercisesWithEdit = workout.exercises.map((exercise,i) => { return (
            <View key={i+'view'}>
                <ObjectEdit key={i} propObject={exercise} ints={['weight','repetitions']} labels/>
                <Button key={i+'button'} icon="delete" onPress={() =>{workout.removeExercise(exercise); this.forceUpdate()}}>Delete exercise</Button>
            </View>);
        });
       return exercisesWithEdit;
    }

    /* 
    If workout is sent directly to the screen, use that.
    Else, try to get it from the parameters in navigation, which is the props passed along navigating.
    If it cannot find it in navigation parameters, it wont try to create anything.
    */
    navigationOrSingleRenderWorkout = () => {
        return this.props.workout ? this.props.workout : this.props['navigation'] ? this.props.navigation.getParam('workout',false) : false;
    }

    render () {
        const workout = this.navigationOrSingleRenderWorkout();
        if (workout) {
            const exercises = this.createExercise(workout);
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
                        Add exercise
                    </Button>
                    <Button icon="save" mode="contained" compact onPress={() => workout.save().then(()=>{this.props.navigation.navigate('Workout',{workout:workout})})}>Save</Button>
                </View>
            </ScrollView>
            );
        }
        return false;
    }
}
