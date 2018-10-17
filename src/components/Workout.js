import { getFromStorage } from '../utils/asyncstorageUtils';
import { AsyncStorage } from 'react-native';
import Exercise from './Exercise';

export default class Workout {
    constructor(title='New Workout', date= new Date(), exercises=[],note='', saveKey='') {
        // "Revives" a Workout object is that is the first parameter.
        // This allows workouts to become workout objects after being stringified in storage.
        if(typeof title === 'object'){
            const prevWorkout = title;
            this.title = prevWorkout.title;
            this.date = new Date(prevWorkout.date);
            this.exercises = prevWorkout.exercises.map(exercise => {
                return new Exercise(exercise.name,exercise.weight, exercise.repetitions);
            });
            this.note = prevWorkout.note;
            this.saveKey = prevWorkout.saveKey;
        }
        else {
            this.title = title;
            this.date = date;
            this.exercises = exercises;
            this.note = note;
            this.saveKey = saveKey;
        }
    }

    // Add exercise to this workout.
    addExercise = (exercise) => {
        this.exercises.push(exercise);
    }

    // Save workout on title+milliseconds since Jan 1, 1970. to prevent accidental overwriting.
    // Also add key to list of workouts
    save = async () => {
        try {
            //await AsyncStorage.clear();
            const workoutsInAsyncStorage = await AsyncStorage.getItem('@projectum-tres:workouts');
            this.saveKey = this.date.getTime();
            await AsyncStorage.setItem('@projectum-tres:'+this.saveKey, JSON.stringify(this));
            // Parse if not null
            workoutsInAsyncStorage = workoutsInAsyncStorage ? JSON.parse(workoutsInAsyncStorage) : [];
            if (workoutsInAsyncStorage.indexOf('@projectum-tres:'+this.saveKey) === -1) {
                workoutsInAsyncStorage.push('@projectum-tres:'+this.saveKey);
            }
            await AsyncStorage.setItem('@projectum-tres:workouts',JSON.stringify(workoutsInAsyncStorage));
        } catch (error) {
            console.error('Could not save workout to local storage: ',error);
        }
    }

    /* 
    Gets the list of workouts, parses it if it got a list.
    If it finds a workout, removes it from the AsyncStorage, then removes it from the list and puts it back.
    */ 
    delete = async () => {
        let workoutsInAsyncStorage = await AsyncStorage.getItem('@projectum-tres:workouts');
        workoutsInAsyncStorage = workoutsInAsyncStorage ? JSON.parse(workoutsInAsyncStorage) : [];
        const workoutIndex = workoutsInAsyncStorage.indexOf('@projectum-tres:'+this.saveKey);
        if (workoutIndex !==-1) {
            try {
                workoutsInAsyncStorage.splice(workoutIndex,1);
                await AsyncStorage.setItem('@projectum-tres:workouts',JSON.stringify(workoutsInAsyncStorage));
                await AsyncStorage.removeItem('@projectum-tres:'+this.saveKey);
            } catch (err){
                console.error('failed to remove item, errormsg:',err);
            }
        }
    }

    // Remove exercise from this workout
    removeExercise = (exercise) => {
        this.exercises = this.exercises.filter(a => a !== exercise);
    }

    edit = (paramObject) => {
        'note' in paramObject ? this.note = paramObject.note : false;
        'title' in paramObject ? this.title = paramObject.title : false;
    }

}
