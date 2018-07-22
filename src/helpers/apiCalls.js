export const fetchRestaurantData = async (key, location) => {
  console.log(location);
  const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
  const url = `${corsAnywhereUrl}https://api.yelp.com/v3/businesses/search?location=${location}&categories=bbq&limit=20`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${key}`,
      'Content-Type': 'application/json'
    }
  });
  const results = await response.json();
  return results;
};


export const fetchUser = async (username, email, password) => {
  const url = `http://localhost:3000/api/v1/users?username=${username}&email=${email}&password=${password}`;
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      username,
      email,
      password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const results = await response.json();
  return await results; 
};

export const fetchVisitedRestaurants = async (user_id) => {
  const url = `http://localhost:3000/api/v1/restaurants/?id=${user_id}`;
  const response = await fetch(url);
  const results = await response.json();
  console.log(results);
  return await results;
};