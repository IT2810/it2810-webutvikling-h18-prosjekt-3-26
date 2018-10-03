export default class Exercise {
    constructor(name = '', weight = 0, repetitions = 0) {
        this.name = name;
        this.weight = weight;
        this.repetitions = repetitions;
    }

    // Change any parameter
    edit = (name, weight, repetitions) => {
        name ? this.name = name : false;
        weight ? this.weight = weight : false;
        repetitions ? this.repetitions = repetitions : false;
    }
}