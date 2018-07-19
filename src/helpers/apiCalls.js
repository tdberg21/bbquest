// export const fetchRestaurantData = async (key) => {

//   const url = `https://api.yelp.com/v3/businesses/search?location=denver_co&categories=bbq&limit=15`;
//   const response = await fetch(url, {
//     'method': 'GET',
//     'headers': {
//       'Authorization': `Bearer ${key}`,
//       'Content-Type': 'application/json'
//       // 'Access-Control - Allow - Origin': 'http://localhost:3000'
//     }
//   });
//   const results = await response.json();
//   return results;
// };