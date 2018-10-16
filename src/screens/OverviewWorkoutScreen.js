import React from 'react';
import { View, AsyncStorage, Text, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import WorkoutCard from '../components/WorkoutCard';
import Workout from '../components/Workout';

export default class OverviewWorkoutScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            workouts: [],
        }
    }

    /*
    This screen is the overview for all workouts.
    It contains:
     an add-button (at bottom? upper right?) 
     cards for every workout
     a delete button at card corner?

    Workouts will be in an array
    */

    componentDidMount = () => {
        this.loadWorkoutsFromAsyncStorage();
    }

    removeWorkout = (workout) => {
        const workouts = this.state.workouts;
        workouts.splice(workouts.indexOf(workout),1);
        this.setState({ workouts });
    }


    addWorkout = () => {
        const newWorkout = new Workout();

    }

    // This function loads all workouts from async storage 
    loadWorkoutsFromAsyncStorage = async () => {
        let workoutTitles = await AsyncStorage.getItem('workouts');
        workoutTitles ? workoutTitles = JSON.parse(workoutTitles) : workoutTitles;
        const workoutArray = []
        for (const workoutNr in workoutTitles) {
            let workout = await AsyncStorage.getItem(workoutTitles[workoutNr]);
            if (workout) {
                workout = JSON.parse(workout);
                workout = new Workout(workout);
                workoutArray.push(workout);
            }
        }

        this.setState({workouts:workoutArray});
    }

    // Converts a list of workouts to display cards
    workoutsToCard = () => {
        //console.log('overview state workouts',this.state.workouts);
        const cards = this.state.workouts.map( workout => {
            return <WorkoutCard key={workout.title+workout.date} workout={workout} removeWorkout={this.removeWorkout}/>;
        });
        //console.log('cards',cards);
        return cards;
    }

    render() {
        return (
            <View>
              {this.workoutsToCard() || <Text>Found no workouts</Text>}
            </View>
        );
    }

}