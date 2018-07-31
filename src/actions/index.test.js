import { addRestaurants } from '.';


describe('ACTION TESTS', () => {

  describe('ADD RESTAURANTS', () => {
    it('should return an object with a type of ADD_RESTAURANTS and restaurants', () => {
      const restaurants = ['Moes Original', 'Pee Wees', 'Famous Daves'];
      const expected = { type:'ADD_RESTAURANTS', restaurants };
      const result = addRestaurants(restaurants);

      expect(result).toEqual(expected);
    });

  });

});