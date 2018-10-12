import { getFromStorage } from '../utils/asyncstorageUtils';
import { AsyncStorage } from 'react-native';

export default class Workout {
    constructor() {
        this.date = new Date();
        this.exercises = [];
        this.note = '';
        this.title = 'New Workout';
        this.saveKey = 0;
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
            console.log('pre-await')
            //await AsyncStorage.clear();
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
        if (workoutIndex !==-1) {
            await AsyncStorage.removeItem(this.saveKey, () => {
                console.error('failed to remove '+this.saveKey+' from storage');
                return;
            });
            workoutsInAsyncStorage.splice(workoutIndex,1);
            await AsyncStorage.setItem('workouts',workoutsInAsyncStorage);
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