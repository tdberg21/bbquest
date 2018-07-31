export const scrubRestaurants = (response) => {
  return response.businesses.map((business) => {
    return {
      name: business.name.replace(/&/, 'and'),
      id: business.id,
      rating: business.rating,
      price: business.price,
      image: business.image_url,
      url: business.url,
      address: {address1: business.location.address1, city: business.location.city, state: business.location.state},
      phone: business.display_phone
    };
  }); 
};