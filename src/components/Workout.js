
export default class Workout {
    constructor() {
        this.date = new Date();
        this.exercises = [];
        this.note = '';
        this.title = 'New Exercise';
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

    // Remove exercise from this workout
    removeExercise = (exercise) => {
        this.exercises.filter(a => a !== exercise);
    }

}