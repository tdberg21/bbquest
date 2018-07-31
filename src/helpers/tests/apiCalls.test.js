import { fetchRestaurantData, fetchUser, fetchDetails, signUpUser, fetchVisitedRestaurants, addVisitedRestaurant } from '../apiCalls';

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

  it('should fetch the restaurant details', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        results: {reviews:[{text:'BBQ Restaurant'}, {text:'good'}]}
      })
    }));
    const results = await fetchDetails(mockUrl);

    expect(results).toEqual({ results: { reviews: [{ text: 'BBQ Restaurant' }, { text: 'good' }] }});
  });

  it('should create a new user', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        results: { id: 2 }
      })
    }));
    const results = await signUpUser('Tim', 'tim@aol.com', 'password');
    const expected = { "results": { "id": 2 } };

    expect(results).toEqual(expected);
  });

  it('should fetch a user', async () => {
    const expected = { results: { username: 'Tory', id: 9 } }
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        results: { username: 'Tory', id: 9 }
      })
    }));
    const results = await fetchUser('Tory', 'rfd123@aol.com', 'taco');

    expect(results).toEqual(expected);
  });

  it('should fetch all your visited bbq joints', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        results: ['PeeWees']
      })
    }));

    const expected = { results: ['PeeWees'] };
    const results = await fetchVisitedRestaurants(9);
    expect(results).toEqual(expected);
  });

  it('should add visited restaurantss and return id', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        results: { id: 2 }
      })
    }));
    const expected = { results: { id: 2 } };
    const results = await addVisitedRestaurant(7, 'notes', 'date', 9, 'PeeWees', 'pulled pork', '0982142kjf');
    expect(results).toEqual(expected);
  });
});