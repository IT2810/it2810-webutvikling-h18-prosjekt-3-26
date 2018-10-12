import React from 'react';
import { View, AsyncStorage } from 'react-native';
import { getFromStorage, AsyncStorageSupplement } from '../utils/asyncstorageUtils';
import WorkoutCard from '../components/WorkoutCard';

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
        console.log(workouts);
        this.setState({ workouts });
    }

    // This function loads all workouts from async storage 
    loadWorkoutsFromAsyncStorage = async () => {
        let workoutTitles = await AsyncStorage.getItem('workouts');
        workoutTitles ? workoutTitles = JSON.parse(workoutTitles) : workoutTitles;
        console.log('got this from asyncstorage',workoutTitles);
        const workoutArray = []
        for (const workoutNr in workoutTitles) {
            //console.log('loading workout',workoutTitles[workoutNr]);
            let workout = await AsyncStorage.getItem(workoutTitles[workoutNr]);
            //console.log('workout from storage',workout);
            if (workout) {
                workout = JSON.parse(workout);
                workoutArray.push(workout);
            }
        }

        console.log('setting state to',workoutArray);
        this.setState({workouts:workoutArray});
    }

    // Converts a list of workouts to display cards
    workoutsToCard = () => {
        //console.log('overview state workouts',this.state.workouts);
        const cards = this.state.workouts.map( workout => {
            console.log('making card from',workout);
            return <WorkoutCard key={workout.title+workout.date} workout={workout} removeWorkout={this.removeWorkout}/>;
        });
        //console.log('cards',cards);
        return cards;
    }

    render() {
        console.log('Render OverviewWorkoutScreen!');
        return (
            <View>
              {this.workoutsToCard() || <Text>Found no workouts</Text>}
            </View>
        );
    }

}