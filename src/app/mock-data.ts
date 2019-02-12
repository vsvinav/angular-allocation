import Developer from './developer';
import Technology from './Technology';
const mockdata = {
     Developer : [
    { id: 11, name: 'Mr. Nice', knownTechnology: [ 0, 1] },
    { id: 12, name: 'Narco', knownTechnology: [0, 2] },
    { id: 13, name: 'Bombasto', knownTechnology: [1, 2] },
    { id: 14, name: 'Celeritas', knownTechnology: [0, 1] }
  ],
  Project: [
    { id: 111, name: 'Angular Project', basedTechnology: [ 0, 1] },
    { id: 121, name: 'React', basedTechnology: [0, 2] },
  ]
};
export default mockdata ;
