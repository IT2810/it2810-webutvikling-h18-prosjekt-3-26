import { getFromStorage } from '../utils/asyncstorageUtils';
import { AsyncStorage } from 'react-native';

export default class Workout {
    constructor(title='New Workout', date= new Date(), exercises=[],note='', saveKey='') {
        // "Revives" a Workout object is that is the first parameter.
        // This allows workouts to become workout objects after being stringified in storage.
        if(typeof title === 'object'){
            const prevWorkout = title;
            this.title = prevWorkout.title;
            this.date = prevWorkout.date;
            this.exercises = prevWorkout.exercises;
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

    // Allow user to set date on a workout. 
    // Should this function open a DatetimePicker perhaps?
    setDate = (datetime) => {
        this.date = datetime;
    }

    // Add exercise to this workout.
    addExercise = (exercise) => {
        this.exercises.push(exercise);
    }

    // Save workout on title+milliseconds since Jan 1, 1970. to prevent accidental overwriting.
    // Also add key to list of workouts
    save = async () => {
        try {
//            await AsyncStorage.clear();
            const workoutsInAsyncStorage = await AsyncStorage.getItem('workouts');
            this.saveKey = this.title+this.date.getTime();
            await AsyncStorage.setItem(this.saveKey, JSON.stringify(this));
            //const logitem = await AsyncStorage.getFromStorage(cardKey);
            //console.log(logitem);
            workoutsInAsyncStorage = workoutsInAsyncStorage ? JSON.parse(workoutsInAsyncStorage) : [];
            workoutsInAsyncStorage.push(this.saveKey);
            await AsyncStorage.setItem('workouts',JSON.stringify(workoutsInAsyncStorage));
        } catch (error) {
            console.error('Could not save workout to local storage: ',error);
        }
    }

    delete = async () => {
        let workoutsInAsyncStorage = await AsyncStorage.getItem('workouts');
        workoutsInAsyncStorage = workoutsInAsyncStorage ? JSON.parse(workoutsInAsyncStorage) : [];
        const workoutIndex = workoutsInAsyncStorage.indexOf(this.saveKey);
        console.log('workoutIndex',workoutIndex);
        if (workoutIndex !==-1) {
            console.log('this.savekey',this.saveKey);
            try {
                await AsyncStorage.removeItem(this.saveKey);
                workoutsInAsyncStorage.splice(workoutIndex,1);
                await AsyncStorage.setItem('workouts',JSON.stringify(workoutsInAsyncStorage));
            } catch (err){
                console.error('failed to remove item, errormsg:',err);
            }
        }
    }
    


    // Remove exercise from this workout
    removeExercise = (exercise) => {
        this.exercises.filter(a => a !== exercise);
    }

    edit = (paramObject) => {
        'note' in paramObject ? this.note = paramObject.note : false;

    }

}