export const scrubRestaurants =(response) => (
  response.businesses.map((business) => {
    return {
      name: business.name,
      id: business.id,
      rating: business.rating,
      price: business.price,
      image: business.image_url,
      url: business.url,
      location: business.location,
      phone: business.display_phone,
      categories: business.categories
    };
  }));