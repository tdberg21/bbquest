export const scrubRestaurants =(response) => (
  response.businesses.map((business) => {
    console.log(business);
    return {
      name: business.name,
      id: business.id,
      rating: business.rating,
      price: business.price,
      image: business.image_url
    };
  }));