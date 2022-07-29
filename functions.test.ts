const {shuffleArray} = require('./utils')
const cars = new Array("Saab", "Volvo", "BMW");
describe('shuffleArray should', () => {
    // CODE HERE
    test("see if shuffleArray returns array",() =>{
        expect(typeof shuffleArray(cars)).toBe('array');
      })

      test("see if shuffleArray returns same amount of objects",() =>{
        expect(shuffleArray(cars).length).toBe(cars.length);
      })
})