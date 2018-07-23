import { fetchRestaurantData } from '../apiCalls';

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
});