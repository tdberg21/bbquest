import { fetchRestaurantData, fetchUser } from '../apiCalls';

describe('API CALL TESTS', () => {
  let mockUrl;
  beforeEach(() => {
    mockUrl = 'bbq.com';
  });


  it('should fetch all of the restaurants', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        results: ['BBQ Restaurants']
      })
    }));
    const results = await fetchRestaurantData(mockUrl);

    expect(results).toEqual({ results: ['BBQ Restaurants']});
  });

  it('should fetch a user', async () => {
    const expected = {results: { username: 'Tory', id: 9}}
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        results: {username: 'Tory', id: 9}
      })
    }));
    const results = await fetchUser('Tory', 'rfd123@aol.com', 'taco');
    
    expect(results).toEqual(expected);
  });
});