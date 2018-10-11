import React from 'react';
import { View } from 'react-native';
import { getFromStorage } from '../utils/asyncstorageUtils';
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

    // This function loads all workouts from async storage 
    loadWorkoutsFromAsyncStorage = async () => {
        let workoutTitles = await getFromStorage('workouts');
        workoutTitles = JSON.parse(workoutTitles);
        console.log('got this from asyncstorage',workoutTitles);
        const workoutArray = [];
        for (const workoutNr in workoutTitles) {
            console.log('workout',workoutTitles[workoutNr]);
            let workout = await getFromStorage(workoutTitles[workoutNr]);
            console.log('workout from storage',workout);
            workoutArray.push(workout);
        }
        console.log(workoutArray);
        this.setState({workouts:workoutArray});
    }

    // Converts a list of workouts to display cards
    workoutsToCard = () => {
        const cards = this.state.workouts.map( workout => {
            <WorkoutCard workout={workout}/>
        });
        return cards;
    }

    render() {
        return (
            <View>
              {this.workoutsToCard()}
            </View>
        );
    }

}