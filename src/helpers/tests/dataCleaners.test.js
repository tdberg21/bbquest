import { scrubRestaurants } from '../dataCleaners';

describe('DATA CLEANER TESTS', () => {
  it('should return a clean object', () => {
    const mockResponse = {"businesses": [
      {
        "id": "ZtsJuo3nfgv5Na4SZLKuZQ",
        "alias": "kitchen-table-bbq-and-comfort-food-denver",
        "name": "Kitchen Table: BBQ & Comfort Food",
        "image_url": "https://s3.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/kitchen-table-bbq",
        "review_count": 482,
        "categories": [
          {
            "alias": "bbq",
            "title": "Barbeque"
          }
        ],
        "rating": 4.5,
        "coordinates": {
          "latitude": 39.7399845279983,
          "longitude": -104.94856000875
        },
        "transactions": [],
        "price": "$$",
        "location": {
          "address1": "3242 E Colfax Ave",
          "address2": null,
          "address3": "",
          "city": "Denver",
          "zip_code": "80206",
          "country": "US",
          "state": "CO",
          "display_address": [
            "3242 E Colfax Ave",
            "Denver, CO 80206"
          ]
        },
        "phone": "+13033999703",
        "display_phone": "(303) 399-9703",
        "distance": 1919.4201776036425
      }]};
    const results = scrubRestaurants(mockResponse);
    const expected = [
      { "id": "ZtsJuo3nfgv5Na4SZLKuZQ", 
        "image": "https://s3.jpg", 
        "name": "Kitchen Table: BBQ and Comfort Food", 
        "price": "$$", 
        "rating": 4.5, 
        "address": { "address1": "3242 E Colfax Ave", "city": "Denver", "state": "CO" }, "phone": "(303) 399-9703", 
        "url": "https://www.yelp.com/biz/kitchen-table-bbq"}];

    expect(results).toEqual(expected);
  });
});