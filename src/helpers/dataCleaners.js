export const scrubRestaurants =(response) => (
  response.businesses.map((business) => {
    console.log(business.location)
    return {
      name: business.name.replace(/&/, 'and'),
      id: business.id,
      rating: business.rating,
      price: business.price,
      image: business.image_url,
      url: business.url,
      address: business.location,
      phone: business.display_phone,
      categories: business.categories
    };
  }));