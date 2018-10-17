import React from 'react';
import { AsyncStorage, Text } from 'react-native';
import WorkoutCard from '../components/WorkoutCard';
import Workout from '../components/Workout';

export default class LastWorkout extends React.Component {

    componentDidMount = () => {
        this.findClosestWorkout();
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState && prevState.workout.date.getTime() !== this.state.workout.date.getTime() || this.props.bool !== prevProps.bool) {
            this.findClosestWorkout();
        }
    }


    findClosestWorkout = async () => {
        try {
            const rightNow = new Date().getTime();
            let workoutKeys = await AsyncStorage.getItem('@projectum-tres:workouts');
            workoutKeys = workoutKeys ? JSON.parse(workoutKeys) : workoutKeys;
            const workoutTimes = workoutKeys.map(workout => workout.replace('@projectum-tres:','')).sort((a,b) => Math.abs(a-rightNow) - Math.abs(b-rightNow));
            let newestWorkout = await AsyncStorage.getItem('@projectum-tres:'+workoutTimes[0]);
            newestWorkout = newestWorkout ? new Workout(JSON.parse(newestWorkout)):newestWorkout;
            this.setState({workout:newestWorkout});
        } catch(err) {
            console.error('failed to find closest workout',err);
        }
    }

    render() {
        const workout = this.state ? this.state['workout'] : false;
        if (workout) {
            return (
                <React.Fragment>
                    <Text>Newest workout</Text>
                    <WorkoutCard workout={workout} removeWorkoutDisabled navigation={this.props.navigation}/>
                </React.Fragment>
            );
        }
        return (<Text>No workouts added, go to overview to start one!</Text>);
    }
}