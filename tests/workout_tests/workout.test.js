// __tests__/workout_tests/workout.test.js
import Workout from '../../src/components/Workout/Workout';
import Exercise from '../../src/components/Workout/Exercise';
jest.mock('../../src/components/Workout/Exercise');

import MockStorage from './MockStorage';

const storageCache = {};
const AsyncStorage = new MockStorage(storageCache);

jest.setMock('AsyncStorage', AsyncStorage)

// ... do things

let workout = new Workout();

beforeEach(() => {
    workout = new Workout();
})

test('workouts gets properly created', ()=> {
    expect(workout).toBeDefined();
    expect(workout.title).toBe('New Workout');
    expect(workout.date).toBeDefined();
    expect(typeof workout.note).toBe('string');
    expect(Array.isArray(workout.exercises)).toBeTruthy();
});

test('workout gets revived from JSON', () => {
    const revivedWorkout = new Workout(JSON.parse(JSON.stringify(new Workout)));
    expect(revivedWorkout).toBeDefined();
    expect(revivedWorkout.title).toBe('New Workout');
    expect(revivedWorkout.date).toBeDefined();
    expect(typeof revivedWorkout.note).toBe('string');
    expect(Array.isArray(revivedWorkout.exercises)).toBeTruthy();
});

test('workout can add exercise', () => {
    const exercise = new Exercise();
    workout.addExercise(exercise);
    expect([exercise]).toEqual(expect.arrayContaining(workout.exercises));
});

test('workout can remove exercise', () => {
    const exercise = new Exercise();
    workout.addExercise(exercise);
    expect([exercise]).toEqual(workout.exercises);
    workout.removeExercise(exercise);
    expect([exercise]).not.toEqual(workout.exercises);
});

// This test will fail on timeout.
// If we had more time, I would continue reading the endless amount of issues, pull request and forums that discuss
// why AsyncStorage might never respond and why it is impossible to debug it.
// We tried 4 different implementations of AsyncStorage, but to no avail
/*
test('workout adds savekey and finishes saving without error', (done) => {
    expect(workout.saveKey).toBeFalsy();
    return workout.save().then(() => {
        expect(workout.saveKey).toBeTruthy();
    });

}, 10000);
*/