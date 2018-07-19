export const scrubRestaurants =(response) => (
  response.businesses.map((business) => {
    return {
      name: business.name,
      rating: business.rating,
      price: business.price
    };
  }));