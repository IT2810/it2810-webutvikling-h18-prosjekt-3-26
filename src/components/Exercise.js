export default class Exercise {
    constructor(name = '', weight = 0, repetitions = 0) {
        this.name = name;
        this.weight = weight;
        this.repetitions = repetitions;
    }

    // Change any parameter from object.
    edit = (paramObject) => {
        'name' in paramObject ? this.name = paramObject.name : false;
        'weight' in paramObject ? this.weight = paramObject.weight : false;
        'repetitions' in paramObject ? this.repetitions = paramObject.repetitions : false;
    }
}