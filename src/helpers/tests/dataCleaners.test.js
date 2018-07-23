import { scrubRestaurants } from '../dataCleaners';

describe('DATA CLEANER TESTS', () => {
  it('should return a clean object', () => {
    const mockResponse = {"businesses": [
      {
        "id": "ZtsJuo3nfgv5Na4SZLKuZQ",
        "alias": "kitchen-table-bbq-and-comfort-food-denver",
        "name": "Kitchen Table: BBQ & Comfort Food",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/ynztQJcaNpv1tG_Spq6uhw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/kitchen-table-bbq-and-comfort-food-denver?adjust_creative=xz8zl7Xpo9WS8XitIWTpPw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=xz8zl7Xpo9WS8XitIWTpPw",
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
    }]}
    const results = scrubRestaurants(mockResponse);
    const expected = [{ "image": "https://s3-media3.fl.yelpcdn.com/bphoto/ynztQJcaNpv1tG_Spq6uhw/o.jpg", "name": "Kitchen Table: BBQ & Comfort Food", "price": "$$", "rating": 4.5 }];

    expect(results).toEqual(expected);
  });
});