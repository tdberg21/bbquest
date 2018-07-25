import { apiKey } from './apiKey';

export const fetchRestaurantData = async (key, location) => {
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

export const fetchDetails = async (id) => {
  const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
  const url = `${corsAnywhereUrl}https://api.yelp.com/v3/businesses/${id}/reviews`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }
  });
  const results = await response.json();
  return results;
}; 

export const signUpUser = async (username, email, password) => {
  const prefix = `http://localhost:3000/api/v1/users/new`;
  const suffix = `?username=${username}&email=${email}&password=${password}`;
  const url = `${prefix}${suffix}`;
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

export const fetchUser = async (username, email, password) => {
  const url = `http://localhost:3000/api/v1/users`;
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
  return await results;
};