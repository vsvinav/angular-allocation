import Technology from './Technology';
export default class Developer {
    constructor(id: number, name: string, knownTechnology: Technology[]) {
        this.id = id;
        this.name = name;
        this.knownTechnology = knownTechnology;
    }
    id: number;
    name: string;
    knownTechnology: Technology[];
}
