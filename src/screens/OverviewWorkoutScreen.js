import React from 'react';
import { View, AsyncStorage, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { FAB } from 'react-native-paper';
import WorkoutCard from '../components/WorkoutCard';
import Workout from '../components/Workout';

export default class OverviewWorkoutScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            workouts: [],
            loading: false,
        }
    }

    /*
    This screen is the overview for all workouts.
    It contains:
     an add-button
     cards for every workout
     a delete button at card

    Workouts will be in an array
    */

    componentDidMount = () => {
        this.setState({loading:true});
        this.loadWorkoutsFromAsyncStorage();
    }

    // Removes workout from state and put it back,
    // effectively removes workout from the component.
    removeWorkout = (workout) => {
        const workouts = {...this.state}.workouts;
        workouts.splice(workouts.indexOf(workout),1);
        //console.log('workouts being sat to state:',workouts);
        this.setState({ workouts });
        //this.props.forceAppUpdate('Workout');
    }

    addToDisplayedListOfWorkouts = (workout, edit=-1) => {
        const workouts = {...this.state}.workouts;
        if (edit >= 0) {
            workouts[edit] = workout;
            this.setState({ workouts });
        }
        else {
            workouts.push(workout);
            this.setState({ workouts });
        }
    }


    // Creates a new workout and returns a button that takes the user to an edit-screen.
    addWorkout = () => {
        return <FAB icon="add" onPress={() =>{this.props.navigation.push('Details',{workout:new Workout()})}} label={'Start workout'}/>;
    }

    componentDidUpdate = (prevProps, prevState) => {
        // Get workout from props if we navigated here and it exists
        const workout = this.props['navigation'] ? this.props.navigation.getParam('workout',false) : false;
        if (workout){
            if (this.state.workouts === prevState.workouts && workout !== prevProps.navigation.getParam('workout', false)) {
                this.addToDisplayedListOfWorkouts(workout, this.state.workouts.indexOf(workout));
            }
        }
    }

    /*
     This function loads all workouts from async storage.
     First, get list of workouts, then get all workouts, and "revive" them as workouts again.
     Last, put it in state and tell the component that it is loading no more.
    */
    loadWorkoutsFromAsyncStorage = async () => {
        try{
            let workoutTitles = await AsyncStorage.getItem('@projectum-tres:workouts');
            workoutTitles ? workoutTitles = JSON.parse(workoutTitles) : workoutTitles;
            //const workouts = await Promise.all(workoutTitles.map(workout => AsyncStorage.getItem(workout)));
            if (workoutTitles) {
                const workouts = await AsyncStorage.multiGet(workoutTitles);
                workouts = workouts.map(workoutKeyPair => workoutKeyPair[1]);
                const workoutArray = workouts.filter(workout => workout).map(workout => new Workout(JSON.parse(workout)));
                this.setState({workouts:workoutArray, loading:false});
            }
        } catch (err){
            console.error('could not load workouts from asyncstorage, ',err);
        }
    }




    // Converts a list of workouts to display cards
    workoutsToCard = () => {
        const cards = this.state.workouts.map( workout => {
            return <WorkoutCard style={styles.card} key={workout.saveKey} workout={workout} removeWorkout={this.removeWorkout} navigation={this.props.navigation} reloadOverview={this.loadWorkoutsFromAsyncStorage}/>;
        });
        return cards;
    }

    render() {
        let cards = this.workoutsToCard();
        cards = cards != false ? cards : false;
        if (cards) {
            return (
            <ScrollView>
                <View style={styles.cardContainer}>
                    {this.addWorkout()}
                    {cards}
                </View>
            </ScrollView>
            );
        }
        if (this.state.loading) {
            return (
                <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',height:500}}>
                    <Text>Loading workouts...</Text>
                    <ActivityIndicator size='large' color='#0000FF'/>
                </View>
            );
        }
        return (
            <View>
                {this.addWorkout()}
                <Text>Found no workouts</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    card: {
        margin: 20,
        padding:10,
        borderStyle: 'solid',
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius:10,
    },
    cardContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    addButton: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    }
})